import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "programma" DROP COLUMN "reviews_heading";
  ALTER TABLE "programma" DROP COLUMN "reviews_text";
  ALTER TABLE "programma" DROP COLUMN "reviews_cta_label";
  ALTER TABLE "programma" DROP COLUMN "reviews_cta_url";
  ALTER TABLE "programma" ADD COLUMN "participant_videos_heading" varchar DEFAULT 'Deelnemer Rebuild programma';

  CREATE TABLE "programma_participant_videos_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_id" integer
  );

  ALTER TABLE "programma_participant_videos_videos" ADD CONSTRAINT "programma_participant_videos_videos_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "programma_participant_videos_videos" ADD CONSTRAINT "programma_participant_videos_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "programma_participant_videos_videos_order_idx" ON "programma_participant_videos_videos" USING btree ("_order");
  CREATE INDEX "programma_participant_videos_videos_parent_id_idx" ON "programma_participant_videos_videos" USING btree ("_parent_id");
  CREATE INDEX "programma_participant_videos_videos_video_idx" ON "programma_participant_videos_videos" USING btree ("video_id");`)

  await payload.updateGlobal({
    slug: 'programma',
    data: {
      participantVideos: {
        heading: 'Deelnemer Rebuild programma',
        videos: [{}, {}, {}],
      },
    },
    req,
  })
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "programma_participant_videos_videos" CASCADE;
  ALTER TABLE "programma" DROP COLUMN "participant_videos_heading";
  ALTER TABLE "programma" ADD COLUMN "reviews_heading" varchar DEFAULT 'Reviews & testimonials';
  ALTER TABLE "programma" ADD COLUMN "reviews_text" varchar DEFAULT 'Geen loze beloftes, maar echte verhalen van vrouwen die de stap al hebben gezet. Bekijk hun ervaringen, transformaties en resultaten en ontdek wat Rebuild voor hen heeft veranderd.';
  ALTER TABLE "programma" ADD COLUMN "reviews_cta_label" varchar DEFAULT 'Bekijk resultaten';
  ALTER TABLE "programma" ADD COLUMN "reviews_cta_url" varchar DEFAULT '/resultaten';`)
}
