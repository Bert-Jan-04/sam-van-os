import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "homepage_hero_member_avatars" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );

  CREATE TABLE "homepage_community_member_avatars" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );

  ALTER TABLE "homepage_hero_member_avatars" ADD CONSTRAINT "homepage_hero_member_avatars_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_hero_member_avatars" ADD CONSTRAINT "homepage_hero_member_avatars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_community_member_avatars" ADD CONSTRAINT "homepage_community_member_avatars_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_community_member_avatars" ADD CONSTRAINT "homepage_community_member_avatars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_hero_member_avatars_order_idx" ON "homepage_hero_member_avatars" USING btree ("_order");
  CREATE INDEX "homepage_hero_member_avatars_parent_id_idx" ON "homepage_hero_member_avatars" USING btree ("_parent_id");
  CREATE INDEX "homepage_hero_member_avatars_image_idx" ON "homepage_hero_member_avatars" USING btree ("image_id");
  CREATE INDEX "homepage_community_member_avatars_order_idx" ON "homepage_community_member_avatars" USING btree ("_order");
  CREATE INDEX "homepage_community_member_avatars_parent_id_idx" ON "homepage_community_member_avatars" USING btree ("_parent_id");
  CREATE INDEX "homepage_community_member_avatars_image_idx" ON "homepage_community_member_avatars" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "homepage_hero_member_avatars" CASCADE;
  DROP TABLE "homepage_community_member_avatars" CASCADE;`)
}
