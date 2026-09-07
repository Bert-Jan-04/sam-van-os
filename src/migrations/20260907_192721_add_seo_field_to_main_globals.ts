import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "homepage" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "homepage" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "homepage" ADD COLUMN "seo_canonical_u_r_l" varchar;
  ALTER TABLE "homepage" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "homepage_seo_seo_og_image_idx" ON "homepage" USING btree ("seo_og_image_id");

  ALTER TABLE "programma" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "programma" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "programma" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "programma" ADD COLUMN "seo_canonical_u_r_l" varchar;
  ALTER TABLE "programma" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "programma" ADD CONSTRAINT "programma_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "programma_seo_seo_og_image_idx" ON "programma" USING btree ("seo_og_image_id");

  ALTER TABLE "team" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "team" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "team" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "team" ADD COLUMN "seo_canonical_u_r_l" varchar;
  ALTER TABLE "team" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "team" ADD CONSTRAINT "team_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "team_seo_seo_og_image_idx" ON "team" USING btree ("seo_og_image_id");

  ALTER TABLE "resultaten" ADD COLUMN "seo_meta_title" varchar;
  ALTER TABLE "resultaten" ADD COLUMN "seo_meta_description" varchar;
  ALTER TABLE "resultaten" ADD COLUMN "seo_og_image_id" integer;
  ALTER TABLE "resultaten" ADD COLUMN "seo_canonical_u_r_l" varchar;
  ALTER TABLE "resultaten" ADD COLUMN "seo_no_index" boolean DEFAULT false;
  ALTER TABLE "resultaten" ADD CONSTRAINT "resultaten_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "resultaten_seo_seo_og_image_idx" ON "resultaten" USING btree ("seo_og_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage" DROP COLUMN "seo_meta_title";
  ALTER TABLE "homepage" DROP COLUMN "seo_meta_description";
  ALTER TABLE "homepage" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "homepage" DROP COLUMN "seo_canonical_u_r_l";
  ALTER TABLE "homepage" DROP COLUMN "seo_no_index";

  ALTER TABLE "programma" DROP COLUMN "seo_meta_title";
  ALTER TABLE "programma" DROP COLUMN "seo_meta_description";
  ALTER TABLE "programma" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "programma" DROP COLUMN "seo_canonical_u_r_l";
  ALTER TABLE "programma" DROP COLUMN "seo_no_index";

  ALTER TABLE "team" DROP COLUMN "seo_meta_title";
  ALTER TABLE "team" DROP COLUMN "seo_meta_description";
  ALTER TABLE "team" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "team" DROP COLUMN "seo_canonical_u_r_l";
  ALTER TABLE "team" DROP COLUMN "seo_no_index";

  ALTER TABLE "resultaten" DROP COLUMN "seo_meta_title";
  ALTER TABLE "resultaten" DROP COLUMN "seo_meta_description";
  ALTER TABLE "resultaten" DROP COLUMN "seo_og_image_id";
  ALTER TABLE "resultaten" DROP COLUMN "seo_canonical_u_r_l";
  ALTER TABLE "resultaten" DROP COLUMN "seo_no_index";`)
}
