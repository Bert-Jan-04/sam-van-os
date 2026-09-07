import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "programma_what_you_get_items" DROP COLUMN "title";
  ALTER TABLE "programma" ADD COLUMN "reviews_heading" varchar DEFAULT 'Reviews & testimonials';
  ALTER TABLE "programma" ADD COLUMN "reviews_text" varchar DEFAULT 'Geen loze beloftes, maar echte verhalen van vrouwen die de stap al hebben gezet. Bekijk hun ervaringen, transformaties en resultaten en ontdek wat Rebuild voor hen heeft veranderd.';
  ALTER TABLE "programma" ADD COLUMN "reviews_cta_label" varchar DEFAULT 'Bekijk resultaten';
  ALTER TABLE "programma" ADD COLUMN "reviews_cta_url" varchar DEFAULT '/resultaten';
  ALTER TABLE "programma" ADD COLUMN "comparison_heading" varchar DEFAULT 'Rebuild vs. Rebuild Together';

  CREATE TABLE "programma_comparison_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL
  );

  ALTER TABLE "programma_comparison_items" ADD CONSTRAINT "programma_comparison_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "programma_comparison_items_order_idx" ON "programma_comparison_items" USING btree ("_order");
  CREATE INDEX "programma_comparison_items_parent_id_idx" ON "programma_comparison_items" USING btree ("_parent_id");`)

  await payload.updateGlobal({
    slug: 'programma',
    data: {
      whatIsIt: {
        paragraph1:
          'The Rebuild Program is een 6-maanden online coachingtraject voor vrouwen die hun leefstijl écht willen veranderen. We werken aan voeding, training, mindset en gewoontes, zodat je niet alleen resultaat behaalt, maar leert hoe je dit ook kunt volhouden.',
        paragraph2: null,
      },
      whyNotWorking: {
        closingStatement:
          'Steeds opnieuw beginnen, streng diëten en alles perfect willen doen werkt misschien even, maar niet op de lange termijn. Rebuild draait daarom niet om perfectie, maar om consistentie. We helpen je begrijpen waarom je steeds terugvalt en bouwen samen aan gewoontes die wél blijven.',
      },
      forYou: {
        heading: 'Voor vrouwen die klaar zijn met steeds opnieuw beginnen.',
        subtext:
          'Je wilt afvallen, sterker worden en lekkerder in je vel zitten, maar vooral een leefstijl creëren die je kunt volhouden.',
      },
      whatYouGet: {
        heading: 'Wat krijg je precies?',
        items: [
          { text: 'Persoonlijke coaching en begeleiding' },
          { text: 'Wekelijkse check-ins met je coach' },
          { text: 'Een persoonlijk plan voor voeding, training en mindset' },
          { text: '7 dagen per week WhatsApp-support' },
          { text: 'Toegang tot de Rebuild community met 130+ vrouwen' },
          { text: 'Coaching-app met trainingsschema en voedingtracker' },
          { text: 'Online leeromgeving' },
          { text: 'Toegang tot alle live Rebuild-events' },
        ],
      },
      timeline: {
        heading: 'Hoe ziet 6 maanden Rebuild eruit?',
        closingStatement:
          'Je start met een uitgebreide voorbereiding en een persoonlijke kickoff met je coach. Vervolgens werk je 6 maanden lang aan jouw doelen met een persoonlijk plan, wekelijkse check-ins en continue begeleiding. We sturen bij waar nodig en bouwen stap voor stap aan een leefstijl die ook na Rebuild blijft werken.',
      },
      reviews: {
        heading: 'Reviews & testimonials',
        text: 'Geen loze beloftes, maar echte verhalen van vrouwen die de stap al hebben gezet. Bekijk hun ervaringen, transformaties en resultaten en ontdek wat Rebuild voor hen heeft veranderd.',
        ctaLabel: 'Bekijk resultaten',
        ctaUrl: '/resultaten',
      },
      comparison: {
        heading: 'Rebuild vs. Rebuild Together',
        items: [
          {
            title: 'Rebuild',
            text: 'Persoonlijke 1-op-1 coaching gedurende 6 maanden.',
          },
          {
            title: 'Rebuild Together',
            text: 'Duurt ook 6 maanden, maar je wordt begeleid in een kleine groep van 6 vrouwen. Je krijgt dezelfde basis van het traject, maar door de groepsvorm ontstaat er een extra laag van samenwerking en verbinding.',
          },
        ],
      },
    },
    req,
  })
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "programma_comparison_items" CASCADE;
  ALTER TABLE "programma" DROP COLUMN "reviews_heading";
  ALTER TABLE "programma" DROP COLUMN "reviews_text";
  ALTER TABLE "programma" DROP COLUMN "reviews_cta_label";
  ALTER TABLE "programma" DROP COLUMN "reviews_cta_url";
  ALTER TABLE "programma" DROP COLUMN "comparison_heading";
  ALTER TABLE "programma_what_you_get_items" ADD COLUMN "title" varchar;`)
}
