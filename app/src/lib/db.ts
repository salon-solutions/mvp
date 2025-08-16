import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import { DB } from '../db/types';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL ?? "postgresql://user:user@localhost:5432/mvp?schema=public";

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString
  }),
});

const db = new Kysely<DB>({
  dialect,
  log(args) {
    console.log("SQL: ", args.query.sql);
    console.log("PARAMS: ", args.query.parameters);
  }
});

export default db;
