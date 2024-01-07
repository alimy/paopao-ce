// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.25.0
// source: trends.sql

package pgc

import (
	"context"
)

const countIndexTrends = `-- name: CountIndexTrends :one
SELECT count(*)
FROM p_contact c 
JOIN p_user u 
ON c.friend_id=u.id 
JOIN p_user_metric m 
ON c.friend_id=m.user_id 
WHERE c.user_id=$1 AND c.is_del=0 AND u.is_del=0 AND m.is_del=0 AND m.tweets_count>0
`

func (q *Queries) CountIndexTrends(ctx context.Context, userID int64) (int64, error) {
	row := q.db.QueryRow(ctx, countIndexTrends, userID)
	var count int64
	err := row.Scan(&count)
	return count, err
}

const getIndexTrends = `-- name: GetIndexTrends :many

SELECT u.username username,
    u.nickname nickname,
    u.avatar avatar
FROM p_contact c
JOIN p_user u 
ON c.friend_id=u.id
JOIN p_user_metric m 
ON c.friend_id=m.user_id 
WHERE c.user_id=$1 AND c.is_del=0 AND u.is_del=0 AND m.is_del=0 AND m.tweets_count>0
LIMIT $2 OFFSET $3
`

type GetIndexTrendsParams struct {
	UserID int64
	Limit  int32
	Offset int32
}

type GetIndexTrendsRow struct {
	Username string
	Nickname string
	Avatar   string
}

// ------------------------------------------------------------------------------
// trends_manager sql dml
// ------------------------------------------------------------------------------
func (q *Queries) GetIndexTrends(ctx context.Context, arg *GetIndexTrendsParams) ([]*GetIndexTrendsRow, error) {
	rows, err := q.db.Query(ctx, getIndexTrends, arg.UserID, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []*GetIndexTrendsRow
	for rows.Next() {
		var i GetIndexTrendsRow
		if err := rows.Scan(&i.Username, &i.Nickname, &i.Avatar); err != nil {
			return nil, err
		}
		items = append(items, &i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}
