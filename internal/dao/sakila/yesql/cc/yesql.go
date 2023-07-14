// Code generated by Yesql. DO NOT EDIT.
// versions:
// - Yesql v1.3.0

package cc

import (
	"context"

	"github.com/alimy/yesql"
	"github.com/jmoiron/sqlx"
)

const (
	_BeFriendFilter_AuthorizationManage = `SELECT * FROM @user WHERE username=?`
	_BeFriendIds_AuthorizationManage    = `SELECT * FROM @user WHERE username=?`
	_MyFriendSet_AuthorizationManage    = `SELECT * FROM @user WHERE username=?`
	_GetCommentById_Comment             = `SELECT * FROM @user WHERE username=?`
	_GetCommentContentsByIds_Comment    = `SELECT * FROM @user WHERE username=?`
	_GetCommentCount_Comment            = `SELECT * FROM @user WHERE username=?`
	_GetCommentReplayById_Comment       = `SELECT * FROM @user WHERE username=?`
	_GetCommentThumbsMap_Comment        = `SELECT * FROM @user WHERE username=?`
	_GetComments_Comment                = `SELECT * FROM @user WHERE username=?`
	_GetCommmentRepliesById_Comment     = `SELECT * FROM @user WHERE username=?`
	_CreateComment_CommentManage        = `SELECT * FROM @user WHERE username=?`
	_CreateCommentContent_CommentManage = `SELECT * FROM @user WHERE username=?`
	_CreateCommentReply_CommentManage   = `SELECT * FROM @user WHERE username=?`
	_DeleteComment_CommentManage        = `SELECT * FROM @user WHERE username=?`
	_DeleteCommentReply_CommentManage   = `SELECT * FROM @user WHERE username=?`
	_ThumbsDownComment_CommentManage    = `SELECT * FROM @user WHERE username=?`
	_ThumbsDownReply_CommentManage      = `SELECT * FROM @user WHERE username=?`
	_ThumbsUpComment_CommentManage      = `SELECT * FROM @user WHERE username=?`
	_ThumbsUpReply_CommentManage        = `SELECT * FROM @user WHERE username=?`
	_AddFriend_ContactManager           = `SELECT * FROM @user WHERE username=?`
	_DelFriend_ContactManager           = `SELECT * FROM @user WHERE username=?`
	_GetContacts_ContactManager         = `SELECT * FROM @user WHERE username=?`
	_IsFriend_ContactManager            = `SELECT * FROM @user WHERE username=?`
	_RejectFriend_ContactManager        = `SELECT * FROM @user WHERE username=?`
	_RequestingFriend_ContactManager    = `SELECT * FROM @user WHERE username=?`
	_UserInfo_FollowIndexA              = `SELECT * FROM @user WHERE username=?`
	_UserInfo_FollowIndex               = `SELECT * FROM @user WHERE username=?`
	_UserInfo_FriendIndexA              = `SELECT * FROM @user WHERE username=?`
	_UserInfo_FriendIndex               = `SELECT * FROM @user WHERE username=?`
	_UserInfo_LightIndexA               = `SELECT * FROM @user WHERE username=?`
	_UserInfo_LightIndex                = `SELECT * FROM @user WHERE username=?`
	_CreateMessage_Message              = `SELECT * FROM @user WHERE username=?`
	_GetMessageById_Message             = `SELECT * FROM @user WHERE username=?`
	_GetMessageCount_Message            = `SELECT * FROM @user WHERE username=?`
	_GetMessages_Message                = `SELECT * FROM @user WHERE username=?`
	_GetUnreadCount_Message             = `SELECT * FROM @user WHERE username=?`
	_ReadMessage_Message                = `SELECT * FROM @user WHERE username=?`
	_GetLatestPhoneCaptcha_Security     = `SELECT * FROM @user WHERE username=?`
	_SendPhoneCaptcha_Security          = `SELECT * FROM @user WHERE username=?`
	_UsePhoneCaptcha_Security           = `SELECT * FROM @user WHERE username=?`
	_UserInfo_SimpleIndexA              = `SELECT * FROM @user WHERE username=?`
	_UserInfo_SimpleIndex               = `SELECT * FROM @user WHERE username=?`
	_DecrTagsById_TopicA                = `UPDATE @tag SET quote_num=quote_num-1, modified_on=? WHERE id IN (?)`
	_HotTags_TopicA                     = `SELECT t.id id, t.user_id user_id, t.tag tag, t.quote_num quote_num, u.id, u.nickname, u.username, u.status, u.avatar, u.is_admin FROM @tag t JOIN @user u ON t.user_id = u.id WHERE t.is_del = 0 AND t.quote_num > 0 ORDER BY t.quote_num DESC LIMIT ? OFFSET ?`
	_IncrTagsById_TopicA                = `UPDATE @tag SET quote_num=quote_num+1, is_del=0, modified_on=? WHERE id IN (?)`
	_InsertTag_TopicA                   = `INSERT INTO @tag (user_id, tag, created_on, modified_on, quote_num) VALUES (?, ?, ?, ?, 1)`
	_NewestTags_TopicA                  = `SELECT t.id id, t.user_id user_id, t.tag tag, t.quote_num quote_num, u.id, u.nickname, u.username, u.status, u.avatar, u.is_admin FROM @tag t JOIN @user u ON t.user_id = u.id WHERE t.is_del = 0 AND t.quote_num > 0 ORDER BY t.id DESC LIMIT ? OFFSET ?`
	_TagsByIdA_TopicA                   = `SELECT id FROM @tag WHERE id IN (?) AND is_del = 0 AND quote_num > 0`
	_TagsByIdB_TopicA                   = `SELECT id, user_id, tag, quote_num FROM @tag WHERE id IN (?)`
	_TagsByKeywordA_TopicA              = `SELECT id, user_id, tag, quote_num FROM @tag WHERE is_del = 0 ORDER BY quote_num DESC LIMIT 6`
	_TagsByKeywordB_TopicA              = `SELECT id, user_id, tag, quote_num FROM @tag WHERE is_del = 0 AND tag LIKE ? ORDER BY quote_num DESC LIMIT 6`
	_TagsForIncr_TopicA                 = `SELECT id, user_id, tag, quote_num FROM @tag WHERE tag IN (?)`
	_AttachmentByTweetId_TweetA         = `SELECT * FROM @user WHERE username=?`
	_FavoriteByTweetId_TweetA           = `SELECT * FROM @user WHERE username=?`
	_ReactionByTweetId_TweetA           = `SELECT * FROM @user WHERE username=?`
	_TweetInfoById_TweetA               = `SELECT * FROM @user WHERE username=?`
	_TweetItemById_TweetA               = `SELECT * FROM @user WHERE username=?`
	_UserFavorites_TweetA               = `SELECT * FROM @user WHERE username=?`
	_UserInfo_TweetA                    = `SELECT * FROM @user WHERE username=?`
	_UserReactions_TweetA               = `SELECT * FROM @user WHERE username=?`
	_UserTweetsByAdmin_TweetA           = `SELECT * FROM @user WHERE username=?`
	_UserTweetsByFriend_TweetA          = `SELECT * FROM @user WHERE username=?`
	_UserTweetsByGuest_TweetA           = `SELECT * FROM @user WHERE username=?`
	_UserTweetsBySelf_TweetA            = `SELECT * FROM @user WHERE username=?`
	_GetPostAttachmentBill_Tweet        = `SELECT * FROM @user WHERE username=?`
	_GetPostById_Tweet                  = `SELECT * FROM @user WHERE username=?`
	_GetPostContentById_Tweet           = `SELECT * FROM @user WHERE username=?`
	_GetPostContetnsByIds_Tweet         = `SELECT id, user_id, tag, quote_num FROM @tag WHERE tag IN (?)`
	_GetPostCount_Tweet                 = `SELECT * FROM @user WHERE username=?`
	_GetPosts_Tweet                     = `SELECT * FROM @user WHERE username=?`
	_GetUserPostCollection_Tweet        = `SELECT * FROM @user WHERE username=?`
	_GetUserPostCollectionCount_Tweet   = `SELECT * FROM @user WHERE username=?`
	_GetUserPostCollections_Tweet       = `SELECT * FROM @user WHERE username=?`
	_GetUserPostStar_Tweet              = `SELECT * FROM @user WHERE username=?`
	_GetUserPostStarCount_Tweet         = `SELECT * FROM @user WHERE username=?`
	_GetUserPostStars_Tweet             = `SELECT * FROM @user WHERE username=?`
	_UserInfo_TweetHelpA                = `SELECT * FROM @user WHERE username=?`
	_GetPostContentByIds_TweetHelp      = `SELECT * FROM @user WHERE username=?`
	_GetUsersByIds_TweetHelp            = `SELECT * FROM @user WHERE username=?`
	_UserInfo_TweetManageA              = `SELECT * FROM @user WHERE username=?`
	_AddAttachment_TweetManage          = `SELECT * FROM @user WHERE username=?`
	_AddPost_TweetManage                = `SELECT * FROM @user WHERE username=?`
	_AddPostCollection_TweetManage      = `SELECT * FROM @user WHERE username=?`
	_AddPostContent_TweetManage         = `SELECT * FROM @user WHERE username=?`
	_AddPostStar_TweetManage            = `SELECT * FROM @user WHERE username=?`
	_DelPost_TweetManage                = `SELECT * FROM @user WHERE username=?`
	_DelPostCollection_TweetManage      = `SELECT * FROM @user WHERE username=?`
	_DelPostStar_TweetManage            = `SELECT * FROM @user WHERE username=?`
	_LockPost_TweetManage               = `SELECT * FROM @user WHERE username=?`
	_StickPost_TweetManage              = `SELECT * FROM @user WHERE username=?`
	_UpdatePost_TweetManage             = `SELECT * FROM @user WHERE username=?`
	_VisiblePost_TweetManage            = `SELECT * FROM @user WHERE username=?`
	_AddUser_UserManage                 = `SELECT * FROM @user WHERE username=?`
	_GetUserById_UserManage             = `SELECT * FROM @user WHERE username=?`
	_GetUserByPhone_UserManage          = `SELECT * FROM @user WHERE username=?`
	_GetUserByUsername_UserManage       = `SELECT * FROM @user WHERE username=?`
	_GetUsersByIds_UserManage           = `SELECT * FROM @user WHERE username=?`
	_GetUsersByKeyword_UserManage       = `SELECT * FROM @user WHERE username=?`
	_UpdateUser_UserManage              = `SELECT * FROM @user WHERE username=?`
	_CreateRecharge_Wallet              = `SELECT * FROM @user WHERE username=?`
	_GetRechargeById_Wallet             = `SELECT * FROM @user WHERE username=?`
	_GetUserWalletBillCount_Wallet      = `SELECT * FROM @user WHERE username=?`
	_GetUserWalletBills_Wallet          = `SELECT * FROM @user WHERE username=?`
	_HandlePostAttachementBought_Wallet = `SELECT * FROM @user WHERE username=?`
	_HandleRechargeSuccess_Wallet       = `SELECT * FROM @user WHERE username=?`
)

type AuthorizationManage struct {
	yesql.Namespace `yesql:"authorization_manage"`
	BeFriendFilter  *sqlx.Stmt `yesql:"be_friend_filter"`
	BeFriendIds     *sqlx.Stmt `yesql:"be_friend_ids"`
	MyFriendSet     *sqlx.Stmt `yesql:"my_friend_set"`
}

type Comment struct {
	yesql.Namespace         `yesql:"comment"`
	GetCommentById          *sqlx.Stmt `yesql:"get_comment_by_id"`
	GetCommentContentsByIds *sqlx.Stmt `yesql:"get_comment_contents_by_ids"`
	GetCommentCount         *sqlx.Stmt `yesql:"get_comment_count"`
	GetCommentReplayById    *sqlx.Stmt `yesql:"get_comment_replay_by_id"`
	GetCommentThumbsMap     *sqlx.Stmt `yesql:"get_comment_thumbs_map"`
	GetComments             *sqlx.Stmt `yesql:"get_comments"`
	GetCommmentRepliesById  *sqlx.Stmt `yesql:"get_commment_replies_by_id"`
}

type CommentManage struct {
	yesql.Namespace      `yesql:"comment_manage"`
	CreateComment        *sqlx.Stmt `yesql:"create_comment"`
	CreateCommentContent *sqlx.Stmt `yesql:"create_comment_content"`
	CreateCommentReply   *sqlx.Stmt `yesql:"create_comment_reply"`
	DeleteComment        *sqlx.Stmt `yesql:"delete_comment"`
	DeleteCommentReply   *sqlx.Stmt `yesql:"delete_comment_reply"`
	ThumbsDownComment    *sqlx.Stmt `yesql:"thumbs_down_comment"`
	ThumbsDownReply      *sqlx.Stmt `yesql:"thumbs_down_reply"`
	ThumbsUpComment      *sqlx.Stmt `yesql:"thumbs_up_comment"`
	ThumbsUpReply        *sqlx.Stmt `yesql:"thumbs_up_reply"`
}

type ContactManager struct {
	yesql.Namespace  `yesql:"contact_manager"`
	AddFriend        *sqlx.Stmt `yesql:"add_friend"`
	DelFriend        *sqlx.Stmt `yesql:"del_friend"`
	GetContacts      *sqlx.Stmt `yesql:"get_contacts"`
	IsFriend         *sqlx.Stmt `yesql:"is_friend"`
	RejectFriend     *sqlx.Stmt `yesql:"reject_friend"`
	RequestingFriend *sqlx.Stmt `yesql:"requesting_friend"`
}

type FollowIndex struct {
	yesql.Namespace `yesql:"follow_index"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type FollowIndexA struct {
	yesql.Namespace `yesql:"follow_index_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type FriendIndex struct {
	yesql.Namespace `yesql:"friend_index"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type FriendIndexA struct {
	yesql.Namespace `yesql:"friend_index_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type LightIndex struct {
	yesql.Namespace `yesql:"light_index"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type LightIndexA struct {
	yesql.Namespace `yesql:"light_index_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type Message struct {
	yesql.Namespace `yesql:"message"`
	CreateMessage   *sqlx.Stmt `yesql:"create_message"`
	GetMessageById  *sqlx.Stmt `yesql:"get_message_by_id"`
	GetMessageCount *sqlx.Stmt `yesql:"get_message_count"`
	GetMessages     *sqlx.Stmt `yesql:"get_messages"`
	GetUnreadCount  *sqlx.Stmt `yesql:"get_unread_count"`
	ReadMessage     *sqlx.Stmt `yesql:"read_message"`
}

type Security struct {
	yesql.Namespace       `yesql:"security"`
	GetLatestPhoneCaptcha *sqlx.Stmt `yesql:"get_latest_phone_captcha"`
	SendPhoneCaptcha      *sqlx.Stmt `yesql:"send_phone_captcha"`
	UsePhoneCaptcha       *sqlx.Stmt `yesql:"use_phone_captcha"`
}

type SimpleIndex struct {
	yesql.Namespace `yesql:"simple_index"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type SimpleIndexA struct {
	yesql.Namespace `yesql:"simple_index_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type TopicA struct {
	yesql.Namespace `yesql:"topic_a"`
	DecrTagsById    string     `yesql:"decr_tags_by_id"`
	IncrTagsById    string     `yesql:"incr_tags_by_id"`
	TagsByIdA       string     `yesql:"tags_by_id_a"`
	TagsByIdB       string     `yesql:"tags_by_id_b"`
	TagsForIncr     string     `yesql:"tags_for_incr"`
	HotTags         *sqlx.Stmt `yesql:"hot_tags"`
	InsertTag       *sqlx.Stmt `yesql:"insert_tag"`
	NewestTags      *sqlx.Stmt `yesql:"newest_tags"`
	TagsByKeywordA  *sqlx.Stmt `yesql:"tags_by_keyword_a"`
	TagsByKeywordB  *sqlx.Stmt `yesql:"tags_by_keyword_b"`
}

type Tweet struct {
	yesql.Namespace            `yesql:"tweet"`
	GetPostContetnsByIds       string     `yesql:"get_post_contetns_by_ids"`
	GetPostAttachmentBill      *sqlx.Stmt `yesql:"get_post_attachment_bill"`
	GetPostById                *sqlx.Stmt `yesql:"get_post_by_id"`
	GetPostContentById         *sqlx.Stmt `yesql:"get_post_content_by_id"`
	GetPostCount               *sqlx.Stmt `yesql:"get_post_count"`
	GetPosts                   *sqlx.Stmt `yesql:"get_posts"`
	GetUserPostCollection      *sqlx.Stmt `yesql:"get_user_post_collection"`
	GetUserPostCollectionCount *sqlx.Stmt `yesql:"get_user_post_collection_count"`
	GetUserPostCollections     *sqlx.Stmt `yesql:"get_user_post_collections"`
	GetUserPostStar            *sqlx.Stmt `yesql:"get_user_post_star"`
	GetUserPostStarCount       *sqlx.Stmt `yesql:"get_user_post_star_count"`
	GetUserPostStars           *sqlx.Stmt `yesql:"get_user_post_stars"`
}

type TweetA struct {
	yesql.Namespace     `yesql:"tweet_a"`
	AttachmentByTweetId *sqlx.Stmt `yesql:"attachment_by_tweet_id"`
	FavoriteByTweetId   *sqlx.Stmt `yesql:"favorite_by_tweet_id"`
	ReactionByTweetId   *sqlx.Stmt `yesql:"reaction_by_tweet_id"`
	TweetInfoById       *sqlx.Stmt `yesql:"tweet_info_by_id"`
	TweetItemById       *sqlx.Stmt `yesql:"tweet_item_by_id"`
	UserFavorites       *sqlx.Stmt `yesql:"user_favorites"`
	UserInfo            *sqlx.Stmt `yesql:"user_info"`
	UserReactions       *sqlx.Stmt `yesql:"user_reactions"`
	UserTweetsByAdmin   *sqlx.Stmt `yesql:"user_tweets_by_admin"`
	UserTweetsByFriend  *sqlx.Stmt `yesql:"user_tweets_by_friend"`
	UserTweetsByGuest   *sqlx.Stmt `yesql:"user_tweets_by_guest"`
	UserTweetsBySelf    *sqlx.Stmt `yesql:"user_tweets_by_self"`
}

type TweetHelp struct {
	yesql.Namespace     `yesql:"tweet_help"`
	GetPostContentByIds string `yesql:"get_post_content_by_ids"`
	GetUsersByIds       string `yesql:"get_users_by_ids"`
}

type TweetHelpA struct {
	yesql.Namespace `yesql:"tweet_help_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type TweetManage struct {
	yesql.Namespace   `yesql:"tweet_manage"`
	AddAttachment     *sqlx.Stmt `yesql:"add_attachment"`
	AddPost           *sqlx.Stmt `yesql:"add_post"`
	AddPostCollection *sqlx.Stmt `yesql:"add_post_collection"`
	AddPostContent    *sqlx.Stmt `yesql:"add_post_content"`
	AddPostStar       *sqlx.Stmt `yesql:"add_post_star"`
	DelPost           *sqlx.Stmt `yesql:"del_post"`
	DelPostCollection *sqlx.Stmt `yesql:"del_post_collection"`
	DelPostStar       *sqlx.Stmt `yesql:"del_post_star"`
	LockPost          *sqlx.Stmt `yesql:"lock_post"`
	StickPost         *sqlx.Stmt `yesql:"stick_post"`
	UpdatePost        *sqlx.Stmt `yesql:"update_post"`
	VisiblePost       *sqlx.Stmt `yesql:"visible_post"`
}

type TweetManageA struct {
	yesql.Namespace `yesql:"tweet_manage_a"`
	UserInfo        *sqlx.Stmt `yesql:"user_info"`
}

type UserManage struct {
	yesql.Namespace   `yesql:"user_manage"`
	GetUsersByIds     string     `yesql:"get_users_by_ids"`
	AddUser           *sqlx.Stmt `yesql:"add_user"`
	GetUserById       *sqlx.Stmt `yesql:"get_user_by_id"`
	GetUserByPhone    *sqlx.Stmt `yesql:"get_user_by_phone"`
	GetUserByUsername *sqlx.Stmt `yesql:"get_user_by_username"`
	GetUsersByKeyword *sqlx.Stmt `yesql:"get_users_by_keyword"`
	UpdateUser        *sqlx.Stmt `yesql:"update_user"`
}

type Wallet struct {
	yesql.Namespace             `yesql:"wallet"`
	CreateRecharge              *sqlx.Stmt `yesql:"create_recharge"`
	GetRechargeById             *sqlx.Stmt `yesql:"get_recharge_by_id"`
	GetUserWalletBillCount      *sqlx.Stmt `yesql:"get_user_wallet_bill_count"`
	GetUserWalletBills          *sqlx.Stmt `yesql:"get_user_wallet_bills"`
	HandlePostAttachementBought *sqlx.Stmt `yesql:"handle_post_attachement_bought"`
	HandleRechargeSuccess       *sqlx.Stmt `yesql:"handle_recharge_success"`
}

func BuildAuthorizationManage(p yesql.PreparexBuilder, ctx ...context.Context) (obj *AuthorizationManage, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &AuthorizationManage{}
	if obj.BeFriendFilter, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_BeFriendFilter_AuthorizationManage))); err != nil {
		return
	}
	if obj.BeFriendIds, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_BeFriendIds_AuthorizationManage))); err != nil {
		return
	}
	if obj.MyFriendSet, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_MyFriendSet_AuthorizationManage))); err != nil {
		return
	}
	return
}

func BuildComment(p yesql.PreparexBuilder, ctx ...context.Context) (obj *Comment, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Comment{}
	if obj.GetCommentById, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetCommentById_Comment))); err != nil {
		return
	}
	if obj.GetCommentContentsByIds, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetCommentContentsByIds_Comment))); err != nil {
		return
	}
	if obj.GetCommentCount, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetCommentCount_Comment))); err != nil {
		return
	}
	if obj.GetCommentReplayById, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetCommentReplayById_Comment))); err != nil {
		return
	}
	if obj.GetCommentThumbsMap, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetCommentThumbsMap_Comment))); err != nil {
		return
	}
	if obj.GetComments, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetComments_Comment))); err != nil {
		return
	}
	if obj.GetCommmentRepliesById, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetCommmentRepliesById_Comment))); err != nil {
		return
	}
	return
}

func BuildCommentManage(p yesql.PreparexBuilder, ctx ...context.Context) (obj *CommentManage, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &CommentManage{}
	if obj.CreateComment, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_CreateComment_CommentManage))); err != nil {
		return
	}
	if obj.CreateCommentContent, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_CreateCommentContent_CommentManage))); err != nil {
		return
	}
	if obj.CreateCommentReply, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_CreateCommentReply_CommentManage))); err != nil {
		return
	}
	if obj.DeleteComment, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_DeleteComment_CommentManage))); err != nil {
		return
	}
	if obj.DeleteCommentReply, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_DeleteCommentReply_CommentManage))); err != nil {
		return
	}
	if obj.ThumbsDownComment, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_ThumbsDownComment_CommentManage))); err != nil {
		return
	}
	if obj.ThumbsDownReply, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_ThumbsDownReply_CommentManage))); err != nil {
		return
	}
	if obj.ThumbsUpComment, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_ThumbsUpComment_CommentManage))); err != nil {
		return
	}
	if obj.ThumbsUpReply, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_ThumbsUpReply_CommentManage))); err != nil {
		return
	}
	return
}

func BuildContactManager(p yesql.PreparexBuilder, ctx ...context.Context) (obj *ContactManager, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &ContactManager{}
	if obj.AddFriend, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_AddFriend_ContactManager))); err != nil {
		return
	}
	if obj.DelFriend, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_DelFriend_ContactManager))); err != nil {
		return
	}
	if obj.GetContacts, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetContacts_ContactManager))); err != nil {
		return
	}
	if obj.IsFriend, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_IsFriend_ContactManager))); err != nil {
		return
	}
	if obj.RejectFriend, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_RejectFriend_ContactManager))); err != nil {
		return
	}
	if obj.RequestingFriend, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_RequestingFriend_ContactManager))); err != nil {
		return
	}
	return
}

func BuildFollowIndex(p yesql.PreparexBuilder, ctx ...context.Context) (obj *FollowIndex, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &FollowIndex{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_FollowIndex))); err != nil {
		return
	}
	return
}

func BuildFollowIndexA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *FollowIndexA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &FollowIndexA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_FollowIndexA))); err != nil {
		return
	}
	return
}

func BuildFriendIndex(p yesql.PreparexBuilder, ctx ...context.Context) (obj *FriendIndex, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &FriendIndex{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_FriendIndex))); err != nil {
		return
	}
	return
}

func BuildFriendIndexA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *FriendIndexA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &FriendIndexA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_FriendIndexA))); err != nil {
		return
	}
	return
}

func BuildLightIndex(p yesql.PreparexBuilder, ctx ...context.Context) (obj *LightIndex, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &LightIndex{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_LightIndex))); err != nil {
		return
	}
	return
}

func BuildLightIndexA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *LightIndexA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &LightIndexA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_LightIndexA))); err != nil {
		return
	}
	return
}

func BuildMessage(p yesql.PreparexBuilder, ctx ...context.Context) (obj *Message, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Message{}
	if obj.CreateMessage, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_CreateMessage_Message))); err != nil {
		return
	}
	if obj.GetMessageById, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetMessageById_Message))); err != nil {
		return
	}
	if obj.GetMessageCount, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetMessageCount_Message))); err != nil {
		return
	}
	if obj.GetMessages, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetMessages_Message))); err != nil {
		return
	}
	if obj.GetUnreadCount, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUnreadCount_Message))); err != nil {
		return
	}
	if obj.ReadMessage, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_ReadMessage_Message))); err != nil {
		return
	}
	return
}

func BuildSecurity(p yesql.PreparexBuilder, ctx ...context.Context) (obj *Security, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Security{}
	if obj.GetLatestPhoneCaptcha, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetLatestPhoneCaptcha_Security))); err != nil {
		return
	}
	if obj.SendPhoneCaptcha, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_SendPhoneCaptcha_Security))); err != nil {
		return
	}
	if obj.UsePhoneCaptcha, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UsePhoneCaptcha_Security))); err != nil {
		return
	}
	return
}

func BuildSimpleIndex(p yesql.PreparexBuilder, ctx ...context.Context) (obj *SimpleIndex, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &SimpleIndex{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_SimpleIndex))); err != nil {
		return
	}
	return
}

func BuildSimpleIndexA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *SimpleIndexA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &SimpleIndexA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_SimpleIndexA))); err != nil {
		return
	}
	return
}

func BuildTopicA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *TopicA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &TopicA{
		DecrTagsById: p.QueryHook(_DecrTagsById_TopicA),
		IncrTagsById: p.QueryHook(_IncrTagsById_TopicA),
		TagsByIdA:    p.QueryHook(_TagsByIdA_TopicA),
		TagsByIdB:    p.QueryHook(_TagsByIdB_TopicA),
		TagsForIncr:  p.QueryHook(_TagsForIncr_TopicA),
	}
	if obj.HotTags, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_HotTags_TopicA))); err != nil {
		return
	}
	if obj.InsertTag, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_InsertTag_TopicA))); err != nil {
		return
	}
	if obj.NewestTags, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_NewestTags_TopicA))); err != nil {
		return
	}
	if obj.TagsByKeywordA, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_TagsByKeywordA_TopicA))); err != nil {
		return
	}
	if obj.TagsByKeywordB, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_TagsByKeywordB_TopicA))); err != nil {
		return
	}
	return
}

func BuildTweet(p yesql.PreparexBuilder, ctx ...context.Context) (obj *Tweet, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Tweet{
		GetPostContetnsByIds: p.QueryHook(_GetPostContetnsByIds_Tweet),
	}
	if obj.GetPostAttachmentBill, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetPostAttachmentBill_Tweet))); err != nil {
		return
	}
	if obj.GetPostById, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetPostById_Tweet))); err != nil {
		return
	}
	if obj.GetPostContentById, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetPostContentById_Tweet))); err != nil {
		return
	}
	if obj.GetPostCount, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetPostCount_Tweet))); err != nil {
		return
	}
	if obj.GetPosts, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetPosts_Tweet))); err != nil {
		return
	}
	if obj.GetUserPostCollection, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUserPostCollection_Tweet))); err != nil {
		return
	}
	if obj.GetUserPostCollectionCount, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUserPostCollectionCount_Tweet))); err != nil {
		return
	}
	if obj.GetUserPostCollections, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUserPostCollections_Tweet))); err != nil {
		return
	}
	if obj.GetUserPostStar, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUserPostStar_Tweet))); err != nil {
		return
	}
	if obj.GetUserPostStarCount, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUserPostStarCount_Tweet))); err != nil {
		return
	}
	if obj.GetUserPostStars, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUserPostStars_Tweet))); err != nil {
		return
	}
	return
}

func BuildTweetA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *TweetA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &TweetA{}
	if obj.AttachmentByTweetId, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_AttachmentByTweetId_TweetA))); err != nil {
		return
	}
	if obj.FavoriteByTweetId, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_FavoriteByTweetId_TweetA))); err != nil {
		return
	}
	if obj.ReactionByTweetId, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_ReactionByTweetId_TweetA))); err != nil {
		return
	}
	if obj.TweetInfoById, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_TweetInfoById_TweetA))); err != nil {
		return
	}
	if obj.TweetItemById, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_TweetItemById_TweetA))); err != nil {
		return
	}
	if obj.UserFavorites, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserFavorites_TweetA))); err != nil {
		return
	}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_TweetA))); err != nil {
		return
	}
	if obj.UserReactions, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserReactions_TweetA))); err != nil {
		return
	}
	if obj.UserTweetsByAdmin, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserTweetsByAdmin_TweetA))); err != nil {
		return
	}
	if obj.UserTweetsByFriend, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserTweetsByFriend_TweetA))); err != nil {
		return
	}
	if obj.UserTweetsByGuest, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserTweetsByGuest_TweetA))); err != nil {
		return
	}
	if obj.UserTweetsBySelf, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserTweetsBySelf_TweetA))); err != nil {
		return
	}
	return
}

func BuildTweetHelp(p yesql.PreparexBuilder) (obj *TweetHelp, err error) {
	obj = &TweetHelp{
		GetPostContentByIds: p.QueryHook(_GetPostContentByIds_TweetHelp),
		GetUsersByIds:       p.QueryHook(_GetUsersByIds_TweetHelp),
	}
	return
}

func BuildTweetHelpA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *TweetHelpA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &TweetHelpA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_TweetHelpA))); err != nil {
		return
	}
	return
}

func BuildTweetManage(p yesql.PreparexBuilder, ctx ...context.Context) (obj *TweetManage, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &TweetManage{}
	if obj.AddAttachment, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_AddAttachment_TweetManage))); err != nil {
		return
	}
	if obj.AddPost, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_AddPost_TweetManage))); err != nil {
		return
	}
	if obj.AddPostCollection, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_AddPostCollection_TweetManage))); err != nil {
		return
	}
	if obj.AddPostContent, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_AddPostContent_TweetManage))); err != nil {
		return
	}
	if obj.AddPostStar, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_AddPostStar_TweetManage))); err != nil {
		return
	}
	if obj.DelPost, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_DelPost_TweetManage))); err != nil {
		return
	}
	if obj.DelPostCollection, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_DelPostCollection_TweetManage))); err != nil {
		return
	}
	if obj.DelPostStar, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_DelPostStar_TweetManage))); err != nil {
		return
	}
	if obj.LockPost, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_LockPost_TweetManage))); err != nil {
		return
	}
	if obj.StickPost, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_StickPost_TweetManage))); err != nil {
		return
	}
	if obj.UpdatePost, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UpdatePost_TweetManage))); err != nil {
		return
	}
	if obj.VisiblePost, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_VisiblePost_TweetManage))); err != nil {
		return
	}
	return
}

func BuildTweetManageA(p yesql.PreparexBuilder, ctx ...context.Context) (obj *TweetManageA, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &TweetManageA{}
	if obj.UserInfo, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UserInfo_TweetManageA))); err != nil {
		return
	}
	return
}

func BuildUserManage(p yesql.PreparexBuilder, ctx ...context.Context) (obj *UserManage, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &UserManage{
		GetUsersByIds: p.QueryHook(_GetUsersByIds_UserManage),
	}
	if obj.AddUser, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_AddUser_UserManage))); err != nil {
		return
	}
	if obj.GetUserById, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUserById_UserManage))); err != nil {
		return
	}
	if obj.GetUserByPhone, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUserByPhone_UserManage))); err != nil {
		return
	}
	if obj.GetUserByUsername, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUserByUsername_UserManage))); err != nil {
		return
	}
	if obj.GetUsersByKeyword, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUsersByKeyword_UserManage))); err != nil {
		return
	}
	if obj.UpdateUser, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UpdateUser_UserManage))); err != nil {
		return
	}
	return
}

func BuildWallet(p yesql.PreparexBuilder, ctx ...context.Context) (obj *Wallet, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Wallet{}
	if obj.CreateRecharge, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_CreateRecharge_Wallet))); err != nil {
		return
	}
	if obj.GetRechargeById, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetRechargeById_Wallet))); err != nil {
		return
	}
	if obj.GetUserWalletBillCount, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUserWalletBillCount_Wallet))); err != nil {
		return
	}
	if obj.GetUserWalletBills, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_GetUserWalletBills_Wallet))); err != nil {
		return
	}
	if obj.HandlePostAttachementBought, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_HandlePostAttachementBought_Wallet))); err != nil {
		return
	}
	if obj.HandleRechargeSuccess, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_HandleRechargeSuccess_Wallet))); err != nil {
		return
	}
	return
}
