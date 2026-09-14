import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "sam_chapters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"text" varchar NOT NULL
  );

  CREATE TABLE "sam" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_eyebrow" varchar DEFAULT 'Oprichter',
  	"hero_heading" varchar DEFAULT 'Niet perfect. Wel consistent.',
  	"hero_intro" varchar DEFAULT 'Van een ongeluk op mijn zeventiende tot de oprichter van The Rebuild Program. Dit is het verhaal achter Van Os Coaching, en de reden waarom we het zo aanpakken als we doen.',
  	"hero_image_id" integer,
  	"quote_text" varchar DEFAULT 'Voor mij is dát de definitie van zelfvertrouwen: letterlijk vertrouwen hebben in jezelf.',
  	"quote_attribution" varchar DEFAULT 'Sam van Os',
  	"closing_heading" varchar DEFAULT 'Klaar om je eigen fundament te bouwen?',
  	"closing_text" varchar DEFAULT 'In een kennismakingsgesprek kijken we samen naar jouw situatie en of Rebuild bij je past.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone,
  	"private" boolean DEFAULT false,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"seo_og_image_id" integer,
  	"seo_canonical_u_r_l" varchar,
  	"seo_no_index" boolean DEFAULT false
  );

  ALTER TABLE "sam_chapters" ADD CONSTRAINT "sam_chapters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."sam"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sam" ADD CONSTRAINT "sam_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "sam" ADD CONSTRAINT "sam_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;

  CREATE INDEX "sam_chapters_order_idx" ON "sam_chapters" USING btree ("_order");
  CREATE INDEX "sam_chapters_parent_id_idx" ON "sam_chapters" USING btree ("_parent_id");
  CREATE INDEX "sam_hero_hero_image_idx" ON "sam" USING btree ("hero_image_id");
  CREATE INDEX "sam_seo_seo_og_image_idx" ON "sam" USING btree ("seo_og_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "sam_chapters" CASCADE;
  DROP TABLE "sam" CASCADE;`)
}
