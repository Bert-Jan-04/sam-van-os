import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "home_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"suffix" varchar,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "home_problem_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"highlight" boolean DEFAULT false
  );
  
  CREATE TABLE "home_pillars_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"image_id" integer,
  	"reversed" boolean DEFAULT false
  );
  
  CREATE TABLE "home_journey_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phase" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"highlight" varchar
  );
  
  CREATE TABLE "home_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"quote" varchar NOT NULL
  );
  
  CREATE TABLE "home_community_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "home_community_stars_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_id" integer
  );
  
  CREATE TABLE "home_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"bio" varchar NOT NULL
  );
  
  CREATE TABLE "home_content_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_id" integer
  );
  
  CREATE TABLE "home_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"private" boolean DEFAULT true,
  	"hero_rating_value" varchar DEFAULT '5,0',
  	"hero_rating_label" varchar DEFAULT 'uit 35 Google reviews',
  	"hero_heading" varchar DEFAULT 'Niet weer opnieuw beginnen, jezelf opnieuw opbouwen.',
  	"hero_intro" varchar DEFAULT 'The Rebuild Program is zes maanden persoonlijke coaching voor vrouwen die willen afvallen. We werken aan voeding en training, maar vooral aan de patronen eronder, want dáár loop je elke keer op vast.',
  	"hero_image_id" integer,
  	"hero_member_badge_text" varchar DEFAULT '100+ leden',
  	"problem_heading" varchar DEFAULT 'Misschien herken je dit',
  	"problem_intro1" varchar DEFAULT 'Je bent al tig keer opnieuw begonnen. Je weet wat je moet doen, maar het volhouden lukt niet.',
  	"problem_intro2" varchar DEFAULT 'Niet omdat je te weinig discipline hebt, maar omdat je nooit hebt geleerd hoe je een leefstijl bouwt die écht bij je past.',
  	"philosophy_heading" varchar DEFAULT 'Waarom elk plan tot nu toe stopte.',
  	"philosophy_paragraph1" varchar DEFAULT 'De meeste aanpakken beginnen bij het plan: zoveel calorieën, zoveel trainingen, dit schema, die regels. En dat werkt, zolang je gemotiveerd bent, rust hebt en alles meezit.',
  	"philosophy_paragraph2" varchar DEFAULT 'Maar echte verandering begint pas als je werkt aan wie je bent.',
  	"pillars_heading" varchar DEFAULT 'Hoe Rebuild anders werkt.',
  	"pillars_subtext" varchar DEFAULT 'Geen schema met een motiverend berichtje erbij. Vier lagen die samen bepalen of verandering blijft staan.',
  	"journey_eyebrow" varchar DEFAULT 'Het traject',
  	"journey_heading" varchar DEFAULT 'Zes maanden. Eén coach. Een heel nieuw fundament.',
  	"journey_intro" varchar DEFAULT 'The Rebuild Program is geen cursus die je doorklikt. Het is een traject met een begin, een midden en een einde, en een coach die de hele weg naast je loopt.',
  	"journey_image_id" integer,
  	"testimonials_heading" varchar DEFAULT 'Niet onze woorden, maar die van hen',
  	"community_heading" varchar DEFAULT 'Word onderdeel van de community',
  	"community_subtext" varchar DEFAULT 'Trainen doe je niet alleen. Events, meetups en overwinningen vieren we samen.',
  	"community_member_count_text" varchar DEFAULT '100+',
  	"community_member_count_label" varchar DEFAULT 'LEDEN TRAINEN SAMEN',
  	"community_stars_heading" varchar DEFAULT 'Rebuild sterren',
  	"community_stars_subtext" varchar DEFAULT 'Rebuild klanten die met hun verhaal ontzettend veel mensen op social media inspireren.',
  	"about_sam_heading" varchar DEFAULT 'Ontmoet Sam',
  	"about_sam_paragraph1" varchar DEFAULT 'Ik ben Sam van Os en ik help mensen om fitter, sterker en zelfverzekerder te worden op een manier die écht bij hun leven past. Geen streng dieet of eindeloze uren in de sportschool, maar een aanpak die je kunt volhouden én waar je plezier uit haalt.',
  	"about_sam_paragraph2" varchar DEFAULT 'Door mijn ervaring met coaching weet ik dat ieder lichaam en iedere situatie anders is. Daarom kijk ik niet alleen naar training en voeding, maar vooral naar jou als persoon. Samen werken we aan resultaat dat niet alleen zichtbaar is, maar waar je je ook goed bij voelt.',
  	"about_sam_closing_line" varchar DEFAULT 'Klaar om samen aan de slag te gaan?',
  	"about_sam_horizontal_image_id" integer,
  	"about_sam_image1_id" integer,
  	"about_sam_image2_id" integer,
  	"about_sam_bottom_image_id" integer,
  	"team_heading" varchar DEFAULT 'Ontmoet het Rebuild team',
  	"team_subtext" varchar DEFAULT 'De coaches die naast je staan tijdens je traject.',
  	"team_group_image_id" integer,
  	"content_heading" varchar DEFAULT 'Bekijk mijn content',
  	"faq_heading" varchar DEFAULT 'Veelgestelde vragen',
  	"faq_subtext" varchar DEFAULT 'Staat je vraag er niet bij? Stel hem in het kennismakingsgesprek.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "homepage_testimonials_items" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "pages" ADD COLUMN "private" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_private" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD COLUMN "private" boolean DEFAULT false;
  ALTER TABLE "team" ADD COLUMN "private" boolean DEFAULT false;
  ALTER TABLE "programma" ADD COLUMN "private" boolean DEFAULT false;
  ALTER TABLE "resultaten" ADD COLUMN "private" boolean DEFAULT false;
  ALTER TABLE "home_stats" ADD CONSTRAINT "home_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_problem_cards" ADD CONSTRAINT "home_problem_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_pillars_items" ADD CONSTRAINT "home_pillars_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_pillars_items" ADD CONSTRAINT "home_pillars_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_journey_steps" ADD CONSTRAINT "home_journey_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_testimonials_items" ADD CONSTRAINT "home_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_community_photos" ADD CONSTRAINT "home_community_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_community_photos" ADD CONSTRAINT "home_community_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_community_stars_videos" ADD CONSTRAINT "home_community_stars_videos_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_community_stars_videos" ADD CONSTRAINT "home_community_stars_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_team_members" ADD CONSTRAINT "home_team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_team_members" ADD CONSTRAINT "home_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_content_videos" ADD CONSTRAINT "home_content_videos_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_content_videos" ADD CONSTRAINT "home_content_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_faq_items" ADD CONSTRAINT "home_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_journey_image_id_media_id_fk" FOREIGN KEY ("journey_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_about_sam_horizontal_image_id_media_id_fk" FOREIGN KEY ("about_sam_horizontal_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_about_sam_image1_id_media_id_fk" FOREIGN KEY ("about_sam_image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_about_sam_image2_id_media_id_fk" FOREIGN KEY ("about_sam_image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_about_sam_bottom_image_id_media_id_fk" FOREIGN KEY ("about_sam_bottom_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_team_group_image_id_media_id_fk" FOREIGN KEY ("team_group_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "home_stats_order_idx" ON "home_stats" USING btree ("_order");
  CREATE INDEX "home_stats_parent_id_idx" ON "home_stats" USING btree ("_parent_id");
  CREATE INDEX "home_problem_cards_order_idx" ON "home_problem_cards" USING btree ("_order");
  CREATE INDEX "home_problem_cards_parent_id_idx" ON "home_problem_cards" USING btree ("_parent_id");
  CREATE INDEX "home_pillars_items_order_idx" ON "home_pillars_items" USING btree ("_order");
  CREATE INDEX "home_pillars_items_parent_id_idx" ON "home_pillars_items" USING btree ("_parent_id");
  CREATE INDEX "home_pillars_items_image_idx" ON "home_pillars_items" USING btree ("image_id");
  CREATE INDEX "home_journey_steps_order_idx" ON "home_journey_steps" USING btree ("_order");
  CREATE INDEX "home_journey_steps_parent_id_idx" ON "home_journey_steps" USING btree ("_parent_id");
  CREATE INDEX "home_testimonials_items_order_idx" ON "home_testimonials_items" USING btree ("_order");
  CREATE INDEX "home_testimonials_items_parent_id_idx" ON "home_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "home_community_photos_order_idx" ON "home_community_photos" USING btree ("_order");
  CREATE INDEX "home_community_photos_parent_id_idx" ON "home_community_photos" USING btree ("_parent_id");
  CREATE INDEX "home_community_photos_image_idx" ON "home_community_photos" USING btree ("image_id");
  CREATE INDEX "home_community_stars_videos_order_idx" ON "home_community_stars_videos" USING btree ("_order");
  CREATE INDEX "home_community_stars_videos_parent_id_idx" ON "home_community_stars_videos" USING btree ("_parent_id");
  CREATE INDEX "home_community_stars_videos_video_idx" ON "home_community_stars_videos" USING btree ("video_id");
  CREATE INDEX "home_team_members_order_idx" ON "home_team_members" USING btree ("_order");
  CREATE INDEX "home_team_members_parent_id_idx" ON "home_team_members" USING btree ("_parent_id");
  CREATE INDEX "home_team_members_image_idx" ON "home_team_members" USING btree ("image_id");
  CREATE INDEX "home_content_videos_order_idx" ON "home_content_videos" USING btree ("_order");
  CREATE INDEX "home_content_videos_parent_id_idx" ON "home_content_videos" USING btree ("_parent_id");
  CREATE INDEX "home_content_videos_video_idx" ON "home_content_videos" USING btree ("video_id");
  CREATE INDEX "home_faq_items_order_idx" ON "home_faq_items" USING btree ("_order");
  CREATE INDEX "home_faq_items_parent_id_idx" ON "home_faq_items" USING btree ("_parent_id");
  CREATE INDEX "home_hero_hero_image_idx" ON "home" USING btree ("hero_image_id");
  CREATE INDEX "home_journey_journey_image_idx" ON "home" USING btree ("journey_image_id");
  CREATE INDEX "home_about_sam_about_sam_horizontal_image_idx" ON "home" USING btree ("about_sam_horizontal_image_id");
  CREATE INDEX "home_about_sam_about_sam_image1_idx" ON "home" USING btree ("about_sam_image1_id");
  CREATE INDEX "home_about_sam_about_sam_image2_idx" ON "home" USING btree ("about_sam_image2_id");
  CREATE INDEX "home_about_sam_about_sam_bottom_image_idx" ON "home" USING btree ("about_sam_bottom_image_id");
  CREATE INDEX "home_team_team_group_image_idx" ON "home" USING btree ("team_group_image_id");
  ALTER TABLE "homepage_testimonials_items" DROP COLUMN "name";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_problem_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_pillars_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_journey_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_testimonials_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_community_photos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_community_stars_videos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_team_members" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_content_videos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_faq_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "home_stats" CASCADE;
  DROP TABLE "home_problem_cards" CASCADE;
  DROP TABLE "home_pillars_items" CASCADE;
  DROP TABLE "home_journey_steps" CASCADE;
  DROP TABLE "home_testimonials_items" CASCADE;
  DROP TABLE "home_community_photos" CASCADE;
  DROP TABLE "home_community_stars_videos" CASCADE;
  DROP TABLE "home_team_members" CASCADE;
  DROP TABLE "home_content_videos" CASCADE;
  DROP TABLE "home_faq_items" CASCADE;
  DROP TABLE "home" CASCADE;
  ALTER TABLE "homepage_testimonials_items" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "homepage_testimonials_items" ADD COLUMN "name" varchar NOT NULL;
  ALTER TABLE "pages" DROP COLUMN "private";
  ALTER TABLE "_pages_v" DROP COLUMN "version_private";
  ALTER TABLE "homepage" DROP COLUMN "private";
  ALTER TABLE "team" DROP COLUMN "private";
  ALTER TABLE "programma" DROP COLUMN "private";
  ALTER TABLE "resultaten" DROP COLUMN "private";`)
}
