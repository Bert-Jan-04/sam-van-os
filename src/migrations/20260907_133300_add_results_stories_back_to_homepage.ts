import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "homepage_results_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );

  CREATE TABLE "homepage_stories_items_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );

  CREATE TABLE "homepage_stories_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow_label" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"name" varchar NOT NULL
  );

  ALTER TABLE "homepage" ADD COLUMN "results_heading" varchar DEFAULT 'Resultaten die voor zich spreken';
  ALTER TABLE "homepage" ADD COLUMN "stories_heading" varchar DEFAULT 'Drie verhalen';
  ALTER TABLE "homepage" ADD COLUMN "stories_subtext" varchar DEFAULT 'Verschillende startpunten, hetzelfde traject.';
  ALTER TABLE "homepage_results_images" ADD CONSTRAINT "homepage_results_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_results_images" ADD CONSTRAINT "homepage_results_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_stories_items_photos" ADD CONSTRAINT "homepage_stories_items_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_stories_items_photos" ADD CONSTRAINT "homepage_stories_items_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_stories_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_stories_items" ADD CONSTRAINT "homepage_stories_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "homepage_results_images_order_idx" ON "homepage_results_images" USING btree ("_order");
  CREATE INDEX "homepage_results_images_parent_id_idx" ON "homepage_results_images" USING btree ("_parent_id");
  CREATE INDEX "homepage_results_images_image_idx" ON "homepage_results_images" USING btree ("image_id");
  CREATE INDEX "homepage_stories_items_photos_order_idx" ON "homepage_stories_items_photos" USING btree ("_order");
  CREATE INDEX "homepage_stories_items_photos_parent_id_idx" ON "homepage_stories_items_photos" USING btree ("_parent_id");
  CREATE INDEX "homepage_stories_items_photos_image_idx" ON "homepage_stories_items_photos" USING btree ("image_id");
  CREATE INDEX "homepage_stories_items_order_idx" ON "homepage_stories_items" USING btree ("_order");
  CREATE INDEX "homepage_stories_items_parent_id_idx" ON "homepage_stories_items" USING btree ("_parent_id");`)

  // The content lived on the "home" concept global — copy it over so the real
  // homepage shows the same results/stories instead of starting from defaults.
  // "home" was removed in a later migration (see
  // 20260907_143347_remove_home_concept_global) and "stories" was later
  // dropped from "homepage" too (see
  // 20260907_150657_remove_stories_from_homepage), so this call is cast to
  // keep this historical migration compiling without changing its
  // already-applied behavior.
  const home = await (payload.findGlobal as any)({ slug: 'home', req })

  await (payload.updateGlobal as any)({
    slug: 'homepage',
    data: {
      results: home.results,
      stories: home.stories,
    },
    req,
  })
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "homepage_results_images" CASCADE;
  DROP TABLE "homepage_stories_items_photos" CASCADE;
  DROP TABLE "homepage_stories_items" CASCADE;
  ALTER TABLE "homepage" DROP COLUMN "results_heading";
  ALTER TABLE "homepage" DROP COLUMN "stories_heading";
  ALTER TABLE "homepage" DROP COLUMN "stories_subtext";`)
}
