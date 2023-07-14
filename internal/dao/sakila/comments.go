// Copyright 2023 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package sakila

import (
	"time"

	"github.com/jmoiron/sqlx"
	"github.com/rocboss/paopao-ce/internal/core"
	"github.com/rocboss/paopao-ce/internal/core/cs"
	"github.com/rocboss/paopao-ce/internal/core/ms"
	"github.com/rocboss/paopao-ce/internal/dao/jinzhu/dbr"
	"github.com/rocboss/paopao-ce/internal/dao/sakila/yesql/cc"
	"github.com/rocboss/paopao-ce/pkg/types"
)

var (
	_ core.CommentService       = (*commentSrv)(nil)
	_ core.CommentManageService = (*commentManageSrv)(nil)
)

type commentSrv struct {
	*sqlxSrv
	q *cc.Comment
}

type commentManageSrv struct {
	*sqlxSrv
	q *cc.CommentManage
}

func (s *commentSrv) GetComments(r *ms.ConditionsT, offset, limit int) ([]*ms.Comment, error) {
	res := []*ms.Comment{}
	(*r)["limit"], (*r)["offset"] = limit, offset
	err := s.q.GetComments.Select(&res, r)
	return res, err
}

func (s *commentSrv) GetCommentByID(id int64) (*ms.Comment, error) {
	res := &ms.Comment{}
	err := s.q.GetCommentById.Get(res, id)
	return res, err
}

func (s *commentSrv) GetCommentReplyByID(id int64) (*ms.CommentReply, error) {
	res := &ms.CommentReply{}
	err := s.q.GetCommentById.Get(res, id)
	return res, err
}

func (s *commentSrv) GetCommentCount(r *ms.ConditionsT) (res int64, err error) {
	err = s.q.GetCommentCount.Get(&res, r)
	return
}

func (s *commentSrv) GetCommentContentsByIDs(ids []int64) ([]*ms.CommentContent, error) {
	res := []*ms.CommentContent{}
	err := s.inSelect(&res, s.q.GetCommentContentsByIds, ids)
	return res, err
}

func (s *commentSrv) GetCommentThumbsMap(userId int64, tweetId int64) (cs.CommentThumbsMap, cs.CommentThumbsMap, error) {
	if userId < 0 {
		return nil, nil, nil
	}
	commentThumbsList := cs.CommentThumbsList{}
	err := s.q.GetCommentThumbs.Select(&commentThumbsList, userId, tweetId)
	if err != nil {
		return nil, nil, err
	}
	commentThumbs, replyThumbs := make(cs.CommentThumbsMap), make(cs.CommentThumbsMap)
	for _, thumbs := range commentThumbsList {
		if thumbs.CommentType == 0 {
			commentThumbs[thumbs.CommentID] = thumbs
		} else {
			replyThumbs[thumbs.ReplyID] = thumbs
		}
	}
	return commentThumbs, replyThumbs, nil
}

func (s *commentSrv) GetCommentRepliesByID(ids []int64) ([]*ms.CommentReplyFormated, error) {
	replies := []*ms.CommentReply{}
	err := s.inSelect(&replies, s.q.GetCommmentRepliesByIds, ids)
	if err != nil {
		return nil, err
	}
	userIds := []int64{}
	for _, reply := range replies {
		userIds = append(userIds, reply.UserID, reply.AtUserID)
	}
	users := []*ms.UserFormated{}
	if err = s.inSelect(&users, s.q.GetUsersByIds, userIds); err != nil {
		return nil, err
	}
	repliesFormated := []*ms.CommentReplyFormated{}
	for _, reply := range replies {
		replyFormated := reply.Format()
		for _, user := range users {
			if reply.UserID == user.ID {
				replyFormated.User = user
			}
			if reply.AtUserID == user.ID {
				replyFormated.AtUser = user
			}
		}
		repliesFormated = append(repliesFormated, replyFormated)
	}
	return repliesFormated, nil
}

func (s *commentManageSrv) DeleteComment(r *ms.Comment) error {
	return s.with(func(tx *sqlx.Tx) error {
		if _, err := tx.Stmtx(s.q.DeleteComment).Exec(r.ID); err != nil {
			return err
		}
		_, err := tx.Stmtx(s.q.DeleteCommentThumbs).Exec(r.UserID, r.PostID, r.ID)
		return err
	})
}

func (s *commentManageSrv) CreateComment(r *ms.Comment) (*ms.Comment, error) {
	res, err := s.q.CreateComment.Exec(r)
	if err != nil {
		return nil, err
	}
	id, err := res.LastInsertId()
	if err != nil {
		return nil, err
	}
	r.Model = &dbr.Model{
		ID: id,
	}
	return r, nil
}

func (s *commentManageSrv) CreateCommentReply(r *ms.CommentReply) (*ms.CommentReply, error) {
	res, err := s.q.CreateComment.Exec(r)
	if err != nil {
		return nil, err
	}
	id, err := res.LastInsertId()
	if err != nil {
		return nil, err
	}
	r.Model = &dbr.Model{ID: id}
	return r, nil
}

func (s *commentManageSrv) DeleteCommentReply(r *ms.CommentReply) error {
	return s.with(func(tx *sqlx.Tx) error {
		if _, err := tx.Stmtx(s.q.DeleteCommentReply).Exec(r.ID); err != nil {
			return err
		}
		_, err := tx.Stmtx(s.q.DeleteCommentThumbs).Exec(r.UserID, r.CommentID, r.ID)
		return err
	})
}

func (s *commentManageSrv) CreateCommentContent(r *ms.CommentContent) (*ms.CommentContent, error) {
	res, err := s.q.CreateCommentContent.Exec(r)
	if err != nil {
		return nil, err
	}
	id, err := res.LastInsertId()
	if err != nil {
		return nil, err
	}
	r.Model = &dbr.Model{ID: id}
	return r, nil
}

func (s *commentManageSrv) ThumbsUpComment(userId int64, tweetId, commentId int64) error {
	return s.with(func(tx *sqlx.Tx) error {
		var (
			thumbsUpCount   int32 = 0
			thumbsDownCount int32 = 0
		)
		commentThumbs := &dbr.TweetCommentThumbs{}
		// 检查thumbs状态
		err := tx.Stmtx(s.q.GetTweetCommentThumb).Get(commentThumbs, userId, tweetId, commentId)
		if err == nil {
			switch {
			case commentThumbs.IsThumbsUp == types.Yes && commentThumbs.IsThumbsDown == types.No:
				thumbsUpCount, thumbsDownCount = -1, 0
			case commentThumbs.IsThumbsUp == types.No && commentThumbs.IsThumbsDown == types.No:
				thumbsUpCount, thumbsDownCount = 1, 0
			default:
				thumbsUpCount, thumbsDownCount = 1, -1
				commentThumbs.IsThumbsDown = types.No
			}
			commentThumbs.IsThumbsUp = 1 - commentThumbs.IsThumbsUp
			commentThumbs.ModifiedOn = time.Now().Unix()
			if _, err := tx.NamedStmt(s.q.UpdateThumbsUpComment).Exec(commentThumbs); err != nil {
				return err
			}
		} else {
			commentThumbs = &dbr.TweetCommentThumbs{
				UserID:       userId,
				TweetID:      tweetId,
				CommentID:    commentId,
				IsThumbsUp:   types.Yes,
				IsThumbsDown: types.No,
				CommentType:  0,
				Model: &dbr.Model{
					CreatedOn: time.Now().Unix(),
				},
			}
			thumbsUpCount, thumbsDownCount = 1, 0
			if _, err := tx.NamedStmt(s.q.CreateThumbsUpComment).Exec(commentThumbs); err != nil {
				return err
			}
		}
		// 更新thumbsUpCount
		_, err = tx.Stmtx(s.q.UpdateCommentThumbsCount).Exec(commentId, thumbsUpCount, thumbsDownCount)
		return err
	})
}

func (s *commentManageSrv) ThumbsDownComment(userId int64, tweetId, commentId int64) error {
	return s.with(func(tx *sqlx.Tx) error {
		var (
			thumbsUpCount   int32 = 0
			thumbsDownCount int32 = 0
		)
		commentThumbs := &dbr.TweetCommentThumbs{}
		// 检查thumbs状态
		err := tx.Stmtx(s.q.GetTweetCommentThumb).Get(commentThumbs, userId, tweetId, commentId)
		if err == nil {
			switch {
			case commentThumbs.IsThumbsDown == types.Yes:
				thumbsUpCount, thumbsDownCount = 0, -1
			case commentThumbs.IsThumbsDown == types.No && commentThumbs.IsThumbsUp == types.No:
				thumbsUpCount, thumbsDownCount = 0, 1
			default:
				thumbsUpCount, thumbsDownCount = -1, 1
				commentThumbs.IsThumbsUp = types.No

			}
			commentThumbs.IsThumbsDown = 1 - commentThumbs.IsThumbsDown
			commentThumbs.ModifiedOn = time.Now().Unix()
			if _, err := tx.NamedStmt(s.q.UpdateThumbsUpComment).Exec(commentThumbs); err != nil {
				return err
			}
		} else {
			commentThumbs = &dbr.TweetCommentThumbs{
				UserID:       userId,
				TweetID:      tweetId,
				CommentID:    commentId,
				IsThumbsUp:   types.No,
				IsThumbsDown: types.Yes,
				CommentType:  0,
				Model: &dbr.Model{
					CreatedOn: time.Now().Unix(),
				},
			}
			thumbsUpCount, thumbsDownCount = 0, 1
			if _, err := tx.NamedStmt(s.q.CreateThumbsUpComment).Exec(commentThumbs); err != nil {
				return err
			}
		}
		// 更新thumbsUpCount
		_, err = tx.Stmtx(s.q.UpdateCommentThumbsCount).Exec(commentId, thumbsUpCount, thumbsDownCount)
		return err
	})
}

func (s *commentManageSrv) ThumbsUpReply(userId int64, tweetId, commentId, replyId int64) error {
	return s.with(func(tx *sqlx.Tx) error {

		var (
			thumbsUpCount   int32 = 0
			thumbsDownCount int32 = 0
		)
		commentThumbs := &dbr.TweetCommentThumbs{}
		// 检查thumbs状态
		err := tx.Stmtx(s.q.GetCommentReplyThumb).Get(commentThumbs, userId, tweetId, commentId, replyId)
		if err == nil {
			switch {
			case commentThumbs.IsThumbsUp == types.Yes:
				thumbsUpCount, thumbsDownCount = -1, 0
			case commentThumbs.IsThumbsUp == types.No && commentThumbs.IsThumbsDown == types.No:
				thumbsUpCount, thumbsDownCount = 1, 0
			default:
				thumbsUpCount, thumbsDownCount = 1, -1
				commentThumbs.IsThumbsDown = types.No
			}
			commentThumbs.IsThumbsUp = 1 - commentThumbs.IsThumbsUp
			commentThumbs.ModifiedOn = time.Now().Unix()
			if _, err := tx.NamedStmt(s.q.UpdateThumbsUpComment).Exec(commentThumbs); err != nil {
				return err
			}
		} else {
			commentThumbs = &dbr.TweetCommentThumbs{
				UserID:       userId,
				TweetID:      tweetId,
				CommentID:    commentId,
				ReplyID:      replyId,
				IsThumbsUp:   types.Yes,
				IsThumbsDown: types.No,
				CommentType:  1,
				Model: &dbr.Model{
					CreatedOn: time.Now().Unix(),
				},
			}
			thumbsUpCount, thumbsDownCount = 1, 0
			if _, err := tx.NamedStmt(s.q.CreateThumbsUpComment).Exec(commentThumbs); err != nil {
				return err
			}
		}
		// 更新thumbsUpCount
		_, err = tx.Stmtx(s.q.UpdateCommentThumbsCount).Exec(commentId, thumbsUpCount, thumbsDownCount)
		return err
	})
}

func (s *commentManageSrv) ThumbsDownReply(userId int64, tweetId, commentId, replyId int64) error {
	return s.with(func(tx *sqlx.Tx) error {
		var (
			thumbsUpCount   int32 = 0
			thumbsDownCount int32 = 0
		)
		commentThumbs := &dbr.TweetCommentThumbs{}
		// 检查thumbs状态
		err := tx.Stmtx(s.q.GetCommentReplyThumb).Get(commentThumbs, userId, tweetId, commentId, replyId)
		if err == nil {
			switch {
			case commentThumbs.IsThumbsDown == types.Yes:
				thumbsUpCount, thumbsDownCount = 0, -1
			case commentThumbs.IsThumbsUp == types.No && commentThumbs.IsThumbsDown == types.No:
				thumbsUpCount, thumbsDownCount = 0, 1
			default:
				thumbsUpCount, thumbsDownCount = -1, 1
				commentThumbs.IsThumbsUp = types.No
			}
			commentThumbs.IsThumbsDown = 1 - commentThumbs.IsThumbsDown
			commentThumbs.ModifiedOn = time.Now().Unix()
			if _, err := tx.NamedStmt(s.q.UpdateThumbsUpComment).Exec(commentThumbs); err != nil {
				return err
			}
		} else {
			commentThumbs = &dbr.TweetCommentThumbs{
				UserID:       userId,
				TweetID:      tweetId,
				CommentID:    commentId,
				ReplyID:      replyId,
				IsThumbsUp:   types.No,
				IsThumbsDown: types.Yes,
				CommentType:  1,
				Model: &dbr.Model{
					CreatedOn: time.Now().Unix(),
				},
			}
			thumbsUpCount, thumbsDownCount = 0, 1
			if _, err := tx.NamedStmt(s.q.CreateThumbsUpComment).Exec(commentThumbs); err != nil {
				return err
			}
		}
		// 更新thumbsUpCount
		_, err = tx.Stmtx(s.q.UpdateCommentThumbsCount).Exec(commentId, thumbsUpCount, thumbsDownCount)
		return err
	})
}

func newCommentService(db *sqlx.DB) core.CommentService {
	return &commentSrv{
		sqlxSrv: newSqlxSrv(db),
		q:       mustBuild(db, cc.BuildComment),
	}
}

func newCommentManageService(db *sqlx.DB) core.CommentManageService {
	return &commentManageSrv{
		sqlxSrv: newSqlxSrv(db),
		q:       mustBuild(db, cc.BuildCommentManage),
	}
}
