// Code generated by Yesql. DO NOT EDIT.
// versions:
// - Yesql v1.8.4

package yesql

import (
	"context"

	"github.com/bitbus/sqlx"
)

const (
	_TagsFromNames  = `SELECT * FROM @tag WHERE tag IN (?) AND is_del=0`
	_UpdateTagQuote = `UPDATE @tag SET quote_num=?, modified_on=? WHERE id=? AND is_del=0`
)

// PreparexContext enhances the Conn interface with context.
type PreparexContext interface {
	// PrepareContext prepares a statement.
	// The provided context is used for the preparation of the statement, not for
	// the execution of the statement.
	PreparexContext(ctx context.Context, query string) (*sqlx.Stmt, error)

	// PrepareNamedContext returns an sqlx.NamedStmt
	PrepareNamedContext(ctx context.Context, query string) (*sqlx.NamedStmt, error)

	// Rebind rebind query to adapte SQL Driver
	Rebind(query string) string
}

// PreparexBuilder preparex builder interface for sqlx
type PreparexBuilder interface {
	PreparexContext
	QueryHook(query string) string
}

type Yesql struct {
	TagsFromNames  string     `yesql:"tags_from_names"`
	UpdateTagQuote *sqlx.Stmt `yesql:"update_tag_quote"`
}

func BuildYesql(p PreparexBuilder, ctx ...context.Context) (obj *Yesql, err error) {
	var c context.Context
	if len(ctx) > 0 && ctx[0] != nil {
		c = ctx[0]
	} else {
		c = context.Background()
	}
	obj = &Yesql{
		TagsFromNames: p.QueryHook(_TagsFromNames),
	}
	if obj.UpdateTagQuote, err = p.PreparexContext(c, p.Rebind(p.QueryHook(_UpdateTagQuote))); err != nil {
		return
	}
	return
}
