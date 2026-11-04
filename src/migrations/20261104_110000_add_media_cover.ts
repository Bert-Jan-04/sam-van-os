import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Idempotent because `next dev` schema-push may already have added the column to this DB.
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media" ADD COLUMN IF NOT EXISTS "cover_id" integer;
  DO $$ BEGIN
    ALTER TABLE "media" ADD CONSTRAINT "media_cover_id_media_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN NULL;
  END $$;
  CREATE INDEX IF NOT EXISTS "media_cover_idx" ON "media" USING btree ("cover_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media" DROP CONSTRAINT IF EXISTS "media_cover_id_media_id_fk";
  DROP INDEX IF EXISTS "media_cover_idx";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "cover_id";`)
}
