import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "team" RENAME COLUMN "founder_video_id" TO "founder_tertiary_image_id";
  ALTER TABLE "team_coaches_items" RENAME COLUMN "video_id" TO "tertiary_image_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "team" RENAME COLUMN "founder_tertiary_image_id" TO "founder_video_id";
  ALTER TABLE "team_coaches_items" RENAME COLUMN "tertiary_image_id" TO "video_id";`)
}
