-- create or replace function set_modified_on()
--     returns trigger as
-- $$
-- begin
--     NEW.modified_on = now();
--     return NEW;
-- end;
-- $$ language plpgsql;

-- create or replace function trigger_modified_on(tablename regclass)
--     returns void as
-- $$
-- begin
--     execute format('CREATE TRIGGER set_modified_on
--         BEFORE UPDATE
--         ON %s
--         FOR EACH ROW
--         WHEN (OLD is distinct from NEW)
--     EXECUTE FUNCTION set_modified_on();', tablename);
-- end;
-- $$ language plpgsql;
