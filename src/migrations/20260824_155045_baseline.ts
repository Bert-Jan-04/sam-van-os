import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_heading_level" AS ENUM('h1', 'h2', 'h3', 'h4', 'h5', 'h6');
  CREATE TYPE "public"."enum_pages_blocks_heading_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_image_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_text_image_image_position" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum_pages_blocks_results_columns" AS ENUM('3', '4');
  CREATE TYPE "public"."enum_pages_blocks_video_aspect_ratio" AS ENUM('16/9', '9/16', '1/1');
  CREATE TYPE "public"."enum_pages_blocks_cards_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_heading_level" AS ENUM('h1', 'h2', 'h3', 'h4', 'h5', 'h6');
  CREATE TYPE "public"."enum__pages_v_blocks_heading_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_image_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_text_image_image_position" AS ENUM('right', 'left');
  CREATE TYPE "public"."enum__pages_v_blocks_results_columns" AS ENUM('3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_video_aspect_ratio" AS ENUM('16/9', '9/16', '1/1');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_columns" AS ENUM('2', '3');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_styling_typography_heading_weight" AS ENUM('700', '800');
  CREATE TYPE "public"."enum_settings_social_media_platform" AS ENUM('instagram', 'facebook', 'linkedin', 'tiktok', 'youtube', 'other');
  CREATE TYPE "public"."enum_resultaten_quotes_variant" AS ENUM('outline', 'highlight', 'muted');
  CREATE TABLE "pages_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"image_id" integer,
  	"cta_label" varchar,
  	"cta_url" varchar,
  	"cta_helper_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"level" "enum_pages_blocks_heading_level" DEFAULT 'h2',
  	"alignment" "enum_pages_blocks_heading_alignment" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt_text" varchar,
  	"caption" varchar,
  	"alignment" "enum_pages_blocks_image_alignment" DEFAULT 'center',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum_pages_blocks_text_image_image_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_reviews_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"quote" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "pages_blocks_reviews" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_results_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"suffix" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_results" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"columns" "enum_pages_blocks_results_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"video_id" integer,
  	"caption" varchar,
  	"aspect_ratio" "enum_pages_blocks_video_aspect_ratio" DEFAULT '16/9',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subtext" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"columns" "enum_pages_blocks_cards_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"seo_og_image_id" integer,
  	"seo_canonical_u_r_l" varchar,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_pages_v_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"image_id" integer,
  	"cta_label" varchar,
  	"cta_url" varchar,
  	"cta_helper_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_heading" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"level" "enum__pages_v_blocks_heading_level" DEFAULT 'h2',
  	"alignment" "enum__pages_v_blocks_heading_alignment" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt_text" varchar,
  	"caption" varchar,
  	"alignment" "enum__pages_v_blocks_image_alignment" DEFAULT 'center',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"content" jsonb,
  	"image_id" integer,
  	"image_position" "enum__pages_v_blocks_text_image_image_position" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_reviews_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"quote" varchar,
  	"name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_reviews" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_results_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"suffix" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_results" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"columns" "enum__pages_v_blocks_results_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"video_id" integer,
  	"caption" varchar,
  	"aspect_ratio" "enum__pages_v_blocks_video_aspect_ratio" DEFAULT '16/9',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subtext" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"columns" "enum__pages_v_blocks_cards_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_seo_meta_title" varchar,
  	"version_seo_meta_description" varchar,
  	"version_seo_og_image_id" integer,
  	"version_seo_canonical_u_r_l" varchar,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"quote" varchar NOT NULL,
  	"image_id" integer,
  	"result" varchar,
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"media_id" integer,
  	"testimonials_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "styling" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"colors_page_background" varchar DEFAULT '#182642' NOT NULL,
  	"colors_card_background" varchar DEFAULT '#1a2740' NOT NULL,
  	"colors_light_card" varchar DEFAULT '#f4efe7' NOT NULL,
  	"colors_card_gradient_from" varchar DEFAULT '#1c2c4a' NOT NULL,
  	"colors_card_gradient_to" varchar DEFAULT '#10182c' NOT NULL,
  	"colors_standard_border" varchar DEFAULT '#2d3c56' NOT NULL,
  	"colors_thin_divider" varchar DEFAULT '#223350' NOT NULL,
  	"colors_bronze_border" varchar DEFAULT '#4a3d24' NOT NULL,
  	"colors_primary_text" varchar DEFAULT '#ffffff' NOT NULL,
  	"colors_muted_body_text" varchar DEFAULT '#b0a996' NOT NULL,
  	"colors_small_text" varchar DEFAULT '#9a9280' NOT NULL,
  	"colors_vague_labels" varchar DEFAULT '#6b6b6b' NOT NULL,
  	"colors_dark_text_on_ivory" varchar DEFAULT '#172332' NOT NULL,
  	"colors_navy_text_on_gold" varchar DEFAULT '#172335' NOT NULL,
  	"colors_primary_gold" varchar DEFAULT '#c8a464' NOT NULL,
  	"colors_gold_hover" varchar DEFAULT '#a9834a' NOT NULL,
  	"colors_light_gold" varchar DEFAULT '#e3c78f' NOT NULL,
  	"colors_light_gold_hover" varchar DEFAULT '#f0dbb0' NOT NULL,
  	"colors_star_rating" varchar DEFAULT '#fbbf24' NOT NULL,
  	"typography_heading_font_family" varchar DEFAULT 'Montserrat' NOT NULL,
  	"typography_heading_weights" varchar DEFAULT '700;800' NOT NULL,
  	"typography_heading_weight" "enum_styling_typography_heading_weight" DEFAULT '800' NOT NULL,
  	"typography_heading_letter_spacing" varchar DEFAULT '0.015em' NOT NULL,
  	"typography_wordmark_letter_spacing" varchar DEFAULT '0.14em' NOT NULL,
  	"typography_body_font_family" varchar DEFAULT 'Inter' NOT NULL,
  	"typography_body_weights" varchar DEFAULT '400;500;600;700' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "settings_social_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_settings_social_media_platform" NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "settings_footer_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar NOT NULL,
  	"link_url" varchar NOT NULL,
  	"link_new_tab" boolean DEFAULT false
  );
  
  CREATE TABLE "settings_footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "settings_footer_legal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar NOT NULL,
  	"link_url" varchar NOT NULL,
  	"link_new_tab" boolean DEFAULT false
  );
  
  CREATE TABLE "settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"company_name" varchar DEFAULT 'Sam van Os Coaching' NOT NULL,
  	"logo_id" integer,
  	"contact_email" varchar,
  	"contact_phone" varchar,
  	"contact_address_street" varchar,
  	"contact_address_postal_code" varchar,
  	"contact_address_city" varchar,
  	"contact_address_country" varchar,
  	"contact_legal_name" varchar,
  	"contact_kvk_number" varchar,
  	"contact_vat_number" varchar,
  	"footer_tagline" varchar,
  	"footer_copyright_text" varchar DEFAULT '© 2026 Sam van Os Coaching. Alle rechten voorbehouden.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar NOT NULL,
  	"link_url" varchar NOT NULL,
  	"link_new_tab" boolean DEFAULT false
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_cta" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "cta" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar DEFAULT '45 minuten, samen kijken of Rebuild bij je past.',
  	"button_label" varchar DEFAULT 'Plan een kennismaking',
  	"button_url" varchar DEFAULT '#kennismaking',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "seo" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"og_image_id" integer,
  	"canonical_u_r_l" varchar,
  	"no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "homepage_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"suffix" varchar,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_problem_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"highlight" boolean DEFAULT false
  );
  
  CREATE TABLE "homepage_pillars_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"image_id" integer,
  	"reversed" boolean DEFAULT false
  );
  
  CREATE TABLE "homepage_journey_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phase" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"highlight" varchar
  );
  
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
  
  CREATE TABLE "homepage_testimonials_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"quote" varchar NOT NULL,
  	"name" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_community_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "homepage_community_stars_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_id" integer
  );
  
  CREATE TABLE "homepage_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"bio" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_content_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_id" integer
  );
  
  CREATE TABLE "homepage_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
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
  	"results_heading" varchar DEFAULT 'Resultaten die voor zich spreken',
  	"stories_heading" varchar DEFAULT 'Drie verhalen',
  	"stories_subtext" varchar DEFAULT 'Verschillende startpunten, hetzelfde traject.',
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
  
  CREATE TABLE "team_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"suffix" varchar,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "team_coaches_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar DEFAULT 'Coach',
  	"name" varchar NOT NULL,
  	"paragraph1" varchar NOT NULL,
  	"paragraph2" varchar,
  	"specialisme" varchar,
  	"ervaring" varchar,
  	"instagram_handle" varchar,
  	"main_image_id" integer,
  	"secondary_image_id" integer,
  	"video_id" integer,
  	"reversed" boolean DEFAULT false
  );
  
  CREATE TABLE "team_values_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"highlight" boolean DEFAULT false
  );
  
  CREATE TABLE "team" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_eyebrow" varchar DEFAULT 'Het team',
  	"hero_heading" varchar DEFAULT 'De coaches achter Rebuild.',
  	"hero_intro" varchar DEFAULT 'Je krijgt geen wisselend aanspreekpunt en geen app die je data bekijkt. Je krijgt één vaste coach die zes maanden naast je loopt, gesteund door een team dat dezelfde aanpak deelt.',
  	"hero_image_id" integer,
  	"founder_eyebrow" varchar DEFAULT 'Oprichter',
  	"founder_name" varchar DEFAULT 'Sam van Os',
  	"founder_paragraph1" varchar DEFAULT 'Ik ben Sam van Os en ik help mensen om fitter, sterker en zelfverzekerder te worden op een manier die écht bij hun leven past. Geen streng dieet of eindeloze uren in de sportschool, maar een aanpak die je kunt volhouden én waar je plezier uit haalt.',
  	"founder_paragraph2" varchar DEFAULT 'Door mijn ervaring met coaching weet ik dat ieder lichaam en iedere situatie anders is. Daarom kijk ik niet alleen naar training en voeding, maar vooral naar jou als persoon.',
  	"founder_specialisme" varchar DEFAULT 'Gedrag, patronen en leefstijl',
  	"founder_ervaring" varchar,
  	"founder_instagram_handle" varchar DEFAULT '@samvanos',
  	"founder_main_image_id" integer,
  	"founder_secondary_image_id" integer,
  	"founder_video_id" integer,
  	"coaches_heading" varchar DEFAULT 'De coaches',
  	"coaches_subtext" varchar DEFAULT 'Ieder met een eigen achtergrond, allemaal met dezelfde manier van werken.',
  	"values_heading" varchar DEFAULT 'Waar we het met z''n allen over eens zijn.',
  	"values_subtext" varchar DEFAULT 'Verschillende coaches, één manier van werken. Dit is wat je bij ieder van ons terugziet.',
  	"closing_heading" varchar DEFAULT 'Benieuwd welke coach bij jou past?',
  	"closing_text" varchar DEFAULT 'In het kennismakingsgesprek kijken we naar je situatie en koppelen we je aan de coach die daar het beste bij aansluit.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "programma_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"suffix" varchar,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "programma_what_is_it_core_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"highlight" boolean DEFAULT false
  );
  
  CREATE TABLE "programma_why_not_working_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "programma_method_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"highlight" boolean DEFAULT false
  );
  
  CREATE TABLE "programma_for_you_do_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "programma_for_you_dont_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "programma_what_you_get_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "programma_timeline_phases" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "programma_community_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "programma_community_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "programma_results_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"result_text" varchar NOT NULL,
  	"quote_text" varchar NOT NULL
  );
  
  CREATE TABLE "programma_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "programma" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_eyebrow" varchar DEFAULT 'The Rebuild Program',
  	"hero_heading" varchar DEFAULT 'Je hoeft niet opnieuw te beginnen. Je moet jezelf opnieuw opbouwen.',
  	"hero_intro" varchar DEFAULT 'The Rebuild Program is een 26-weeks coachingtraject voor vrouwen die willen afvallen, maar vooral willen begrijpen waarom het steeds niet lukt om hun resultaat vast te houden.',
  	"hero_image_id" integer,
  	"what_is_it_heading" varchar DEFAULT 'Wat is The Rebuild Program?',
  	"what_is_it_paragraph1" varchar DEFAULT 'Rebuild draait niet om een tijdelijk voedings- of trainingsschema.',
  	"what_is_it_paragraph2" varchar DEFAULT 'Je lichaam verandert wanneer je gedrag verandert. Daarom kijken we niet alleen naar wat je eet of hoeveel je beweegt, maar vooral naar de patronen, overtuigingen en situaties die ervoor zorgen dat je steeds terugvalt.',
  	"what_is_it_core_label" varchar DEFAULT 'De kern',
  	"why_not_working_heading" varchar DEFAULT 'Waarom lukt het tot nu toe niet?',
  	"why_not_working_closing_statement" varchar DEFAULT 'Het probleem is waarschijnlijk niet dat je te weinig weet. Het probleem is dat je nog geen leefstijl hebt gebouwd die je kunt volhouden.',
  	"method_heading" varchar DEFAULT 'De Rebuild-methode',
  	"method_subtext" varchar DEFAULT 'Vier lagen die samen bepalen of verandering blijft staan. Een schema raakt alleen de eerste.',
  	"method_image_id" integer,
  	"method_closing_statement" varchar DEFAULT 'We veranderen niet alleen wat je doet. We werken aan de persoon die dat gedrag uiteindelijk zelfstandig kan volhouden.',
  	"for_you_heading" varchar DEFAULT 'Rebuild is voor jou als je klaar bent met steeds opnieuw beginnen.',
  	"for_you_subtext" varchar DEFAULT 'Je wilt afvallen en je beter voelen in je lichaam. Maar nog belangrijker: je wilt eindelijk vertrouwen krijgen in jezelf en leren hoe je consistent kunt blijven, ook wanneer het leven niet perfect loopt.',
  	"for_you_do_heading" varchar DEFAULT 'Wel Rebuild',
  	"for_you_dont_heading" varchar DEFAULT 'Niet Rebuild',
  	"what_you_get_heading" varchar DEFAULT 'Wat krijg je?',
  	"what_you_get_image_id" integer,
  	"timeline_heading" varchar DEFAULT 'Hoe ziet 26 weken eruit?',
  	"timeline_closing_statement" varchar DEFAULT 'Het doel is niet dat je 26 weken een plan volhoudt. Het doel is dat je na 26 weken weet hoe je zelfstandig verder kunt.',
  	"community_heading" varchar DEFAULT 'Je hoeft dit niet alleen te doen.',
  	"community_text" varchar DEFAULT 'In de Rebuild Community ontmoet je vrouwen die tegen dezelfde dingen aanlopen. Je deelt je wins, twijfels en moeilijke momenten, leert van elkaar en krijgt extra support buiten je persoonlijke coaching.',
  	"results_heading" varchar DEFAULT 'Je verandert niet alleen hoe je eruitziet. Je verandert hoe je leeft.',
  	"faq_heading" varchar DEFAULT 'Praktische vragen',
  	"closing_heading" varchar DEFAULT 'Klaar om te stoppen met opnieuw beginnen?',
  	"closing_text" varchar DEFAULT 'Tijdens een kennismaking kijken we waar je nu staat, waar je tegenaan loopt en of The Rebuild Program bij jou past.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "resultaten_hero_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "resultaten_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"suffix" varchar,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "resultaten_before_after_items_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "resultaten_before_after_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"before_image_id" integer,
  	"after_image_id" integer,
  	"name" varchar NOT NULL,
  	"quote" varchar NOT NULL
  );
  
  CREATE TABLE "resultaten_beyond_photos_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"before" varchar NOT NULL,
  	"after" varchar NOT NULL
  );
  
  CREATE TABLE "resultaten_stories_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow_label" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"where_started" varchar NOT NULL,
  	"what_changed" varchar NOT NULL,
  	"where_now" varchar NOT NULL,
  	"result_text" varchar,
  	"duration" varchar DEFAULT '26 weken',
  	"coach_name" varchar,
  	"main_image_id" integer,
  	"secondary_image_id" integer,
  	"tertiary_image_id" integer,
  	"reversed" boolean DEFAULT false
  );
  
  CREATE TABLE "resultaten_video_stories_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_id" integer,
  	"name" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "resultaten_quotes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar NOT NULL,
  	"attribution" varchar NOT NULL,
  	"variant" "enum_resultaten_quotes_variant" DEFAULT 'outline'
  );
  
  CREATE TABLE "resultaten_metrics_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "resultaten" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_eyebrow" varchar DEFAULT 'Resultaten',
  	"hero_heading" varchar DEFAULT 'Het bewijs zit in meer dan kilo''s.',
  	"hero_intro" varchar DEFAULT 'De weegschaal laat één cijfer zien. Wat je hieronder ziet is wat er daarnaast veranderde: gedrag, zelfvertrouwen, energie en de rust om niet meer elke maandag opnieuw te beginnen.',
  	"before_after_heading" varchar DEFAULT 'Voor en na, 26 weken ertussen',
  	"before_after_subtext" varchar DEFAULT 'Alle foto''s zijn met toestemming geplaatst. Geen filters, geen andere belichting, geen "dag 1 na een weekend".',
  	"beyond_photos_heading" varchar DEFAULT 'Wat er niet op de foto staat',
  	"beyond_photos_subtext" varchar DEFAULT 'Drie dingen die klanten na 26 weken het vaakst benoemen, en waar geen weegschaal voor bestaat.',
  	"stories_heading" varchar DEFAULT 'Klantverhalen',
  	"video_stories_heading" varchar DEFAULT 'In hun eigen woorden',
  	"video_stories_subtext" varchar DEFAULT 'Korte video''s, opgenomen aan het einde van hun traject.',
  	"metrics_heading" varchar DEFAULT 'Wat we meten',
  	"metrics_subtext" varchar DEFAULT 'Gewicht is één van de zes dingen die we bijhouden. De rest vertelt of de verandering blijft staan.',
  	"closing_heading" varchar DEFAULT 'Wil je weten wat er voor jou mogelijk is?',
  	"closing_text" varchar DEFAULT 'In een kennismaking kijken we naar je situatie en vertellen we eerlijk wat je in 26 weken kunt verwachten.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_blocks_header" ADD CONSTRAINT "pages_blocks_header_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_header" ADD CONSTRAINT "pages_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text" ADD CONSTRAINT "pages_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_heading" ADD CONSTRAINT "pages_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_image" ADD CONSTRAINT "pages_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_image" ADD CONSTRAINT "pages_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_reviews_items" ADD CONSTRAINT "pages_blocks_reviews_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_reviews"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_reviews" ADD CONSTRAINT "pages_blocks_reviews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_results_stats" ADD CONSTRAINT "pages_blocks_results_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_results"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_results" ADD CONSTRAINT "pages_blocks_results_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video" ADD CONSTRAINT "pages_blocks_video_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_video" ADD CONSTRAINT "pages_blocks_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_items" ADD CONSTRAINT "pages_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_items" ADD CONSTRAINT "pages_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards" ADD CONSTRAINT "pages_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_header" ADD CONSTRAINT "_pages_v_blocks_header_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_header" ADD CONSTRAINT "_pages_v_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text" ADD CONSTRAINT "_pages_v_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_heading" ADD CONSTRAINT "_pages_v_blocks_heading_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image" ADD CONSTRAINT "_pages_v_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image" ADD CONSTRAINT "_pages_v_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_image" ADD CONSTRAINT "_pages_v_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_image" ADD CONSTRAINT "_pages_v_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_reviews_items" ADD CONSTRAINT "_pages_v_blocks_reviews_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_reviews"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_reviews" ADD CONSTRAINT "_pages_v_blocks_reviews_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_results_stats" ADD CONSTRAINT "_pages_v_blocks_results_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_results"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_results" ADD CONSTRAINT "_pages_v_blocks_results_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video" ADD CONSTRAINT "_pages_v_blocks_video_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video" ADD CONSTRAINT "_pages_v_blocks_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_items" ADD CONSTRAINT "_pages_v_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq" ADD CONSTRAINT "_pages_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_items" ADD CONSTRAINT "_pages_v_blocks_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards" ADD CONSTRAINT "_pages_v_blocks_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_seo_og_image_id_media_id_fk" FOREIGN KEY ("version_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings_social_media" ADD CONSTRAINT "settings_social_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings_footer_columns_links" ADD CONSTRAINT "settings_footer_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings_footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings_footer_columns" ADD CONSTRAINT "settings_footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings_footer_legal_links" ADD CONSTRAINT "settings_footer_legal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings" ADD CONSTRAINT "settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "seo" ADD CONSTRAINT "seo_og_image_id_media_id_fk" FOREIGN KEY ("og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_stats" ADD CONSTRAINT "homepage_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_problem_cards" ADD CONSTRAINT "homepage_problem_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_pillars_items" ADD CONSTRAINT "homepage_pillars_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_pillars_items" ADD CONSTRAINT "homepage_pillars_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_journey_steps" ADD CONSTRAINT "homepage_journey_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_results_images" ADD CONSTRAINT "homepage_results_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_results_images" ADD CONSTRAINT "homepage_results_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_stories_items_photos" ADD CONSTRAINT "homepage_stories_items_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_stories_items_photos" ADD CONSTRAINT "homepage_stories_items_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_stories_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_stories_items" ADD CONSTRAINT "homepage_stories_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_testimonials_items" ADD CONSTRAINT "homepage_testimonials_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_community_photos" ADD CONSTRAINT "homepage_community_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_community_photos" ADD CONSTRAINT "homepage_community_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_community_stars_videos" ADD CONSTRAINT "homepage_community_stars_videos_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_community_stars_videos" ADD CONSTRAINT "homepage_community_stars_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_team_members" ADD CONSTRAINT "homepage_team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_team_members" ADD CONSTRAINT "homepage_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_content_videos" ADD CONSTRAINT "homepage_content_videos_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_content_videos" ADD CONSTRAINT "homepage_content_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_faq_items" ADD CONSTRAINT "homepage_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_journey_image_id_media_id_fk" FOREIGN KEY ("journey_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_about_sam_horizontal_image_id_media_id_fk" FOREIGN KEY ("about_sam_horizontal_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_about_sam_image1_id_media_id_fk" FOREIGN KEY ("about_sam_image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_about_sam_image2_id_media_id_fk" FOREIGN KEY ("about_sam_image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_about_sam_bottom_image_id_media_id_fk" FOREIGN KEY ("about_sam_bottom_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_team_group_image_id_media_id_fk" FOREIGN KEY ("team_group_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_stats" ADD CONSTRAINT "team_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team_coaches_items" ADD CONSTRAINT "team_coaches_items_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_coaches_items" ADD CONSTRAINT "team_coaches_items_secondary_image_id_media_id_fk" FOREIGN KEY ("secondary_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_coaches_items" ADD CONSTRAINT "team_coaches_items_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_coaches_items" ADD CONSTRAINT "team_coaches_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team_values_items" ADD CONSTRAINT "team_values_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team" ADD CONSTRAINT "team_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team" ADD CONSTRAINT "team_founder_main_image_id_media_id_fk" FOREIGN KEY ("founder_main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team" ADD CONSTRAINT "team_founder_secondary_image_id_media_id_fk" FOREIGN KEY ("founder_secondary_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team" ADD CONSTRAINT "team_founder_video_id_media_id_fk" FOREIGN KEY ("founder_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "programma_stats" ADD CONSTRAINT "programma_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programma_what_is_it_core_tags" ADD CONSTRAINT "programma_what_is_it_core_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programma_why_not_working_items" ADD CONSTRAINT "programma_why_not_working_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programma_method_items" ADD CONSTRAINT "programma_method_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programma_for_you_do_items" ADD CONSTRAINT "programma_for_you_do_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programma_for_you_dont_items" ADD CONSTRAINT "programma_for_you_dont_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programma_what_you_get_items" ADD CONSTRAINT "programma_what_you_get_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programma_timeline_phases" ADD CONSTRAINT "programma_timeline_phases_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programma_community_photos" ADD CONSTRAINT "programma_community_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "programma_community_photos" ADD CONSTRAINT "programma_community_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programma_community_tags" ADD CONSTRAINT "programma_community_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programma_results_items" ADD CONSTRAINT "programma_results_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "programma_results_items" ADD CONSTRAINT "programma_results_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programma_faq_items" ADD CONSTRAINT "programma_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."programma"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "programma" ADD CONSTRAINT "programma_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "programma" ADD CONSTRAINT "programma_method_image_id_media_id_fk" FOREIGN KEY ("method_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "programma" ADD CONSTRAINT "programma_what_you_get_image_id_media_id_fk" FOREIGN KEY ("what_you_get_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resultaten_hero_slides" ADD CONSTRAINT "resultaten_hero_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resultaten_hero_slides" ADD CONSTRAINT "resultaten_hero_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resultaten"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resultaten_stats" ADD CONSTRAINT "resultaten_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resultaten"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resultaten_before_after_items_tags" ADD CONSTRAINT "resultaten_before_after_items_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resultaten_before_after_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resultaten_before_after_items" ADD CONSTRAINT "resultaten_before_after_items_before_image_id_media_id_fk" FOREIGN KEY ("before_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resultaten_before_after_items" ADD CONSTRAINT "resultaten_before_after_items_after_image_id_media_id_fk" FOREIGN KEY ("after_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resultaten_before_after_items" ADD CONSTRAINT "resultaten_before_after_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resultaten"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resultaten_beyond_photos_items" ADD CONSTRAINT "resultaten_beyond_photos_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resultaten"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resultaten_stories_items" ADD CONSTRAINT "resultaten_stories_items_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resultaten_stories_items" ADD CONSTRAINT "resultaten_stories_items_secondary_image_id_media_id_fk" FOREIGN KEY ("secondary_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resultaten_stories_items" ADD CONSTRAINT "resultaten_stories_items_tertiary_image_id_media_id_fk" FOREIGN KEY ("tertiary_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resultaten_stories_items" ADD CONSTRAINT "resultaten_stories_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resultaten"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resultaten_video_stories_items" ADD CONSTRAINT "resultaten_video_stories_items_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resultaten_video_stories_items" ADD CONSTRAINT "resultaten_video_stories_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resultaten"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resultaten_quotes" ADD CONSTRAINT "resultaten_quotes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resultaten"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resultaten_metrics_items" ADD CONSTRAINT "resultaten_metrics_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resultaten"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_header_order_idx" ON "pages_blocks_header" USING btree ("_order");
  CREATE INDEX "pages_blocks_header_parent_id_idx" ON "pages_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_header_path_idx" ON "pages_blocks_header" USING btree ("_path");
  CREATE INDEX "pages_blocks_header_image_idx" ON "pages_blocks_header" USING btree ("image_id");
  CREATE INDEX "pages_blocks_text_order_idx" ON "pages_blocks_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_parent_id_idx" ON "pages_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_path_idx" ON "pages_blocks_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_heading_order_idx" ON "pages_blocks_heading" USING btree ("_order");
  CREATE INDEX "pages_blocks_heading_parent_id_idx" ON "pages_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_heading_path_idx" ON "pages_blocks_heading" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_order_idx" ON "pages_blocks_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_parent_id_idx" ON "pages_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_path_idx" ON "pages_blocks_image" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_image_idx" ON "pages_blocks_image" USING btree ("image_id");
  CREATE INDEX "pages_blocks_text_image_order_idx" ON "pages_blocks_text_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_image_parent_id_idx" ON "pages_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_image_path_idx" ON "pages_blocks_text_image" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_image_image_idx" ON "pages_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "pages_blocks_reviews_items_order_idx" ON "pages_blocks_reviews_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_reviews_items_parent_id_idx" ON "pages_blocks_reviews_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_reviews_order_idx" ON "pages_blocks_reviews" USING btree ("_order");
  CREATE INDEX "pages_blocks_reviews_parent_id_idx" ON "pages_blocks_reviews" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_reviews_path_idx" ON "pages_blocks_reviews" USING btree ("_path");
  CREATE INDEX "pages_blocks_results_stats_order_idx" ON "pages_blocks_results_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_results_stats_parent_id_idx" ON "pages_blocks_results_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_results_order_idx" ON "pages_blocks_results" USING btree ("_order");
  CREATE INDEX "pages_blocks_results_parent_id_idx" ON "pages_blocks_results" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_results_path_idx" ON "pages_blocks_results" USING btree ("_path");
  CREATE INDEX "pages_blocks_video_order_idx" ON "pages_blocks_video" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_parent_id_idx" ON "pages_blocks_video" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_path_idx" ON "pages_blocks_video" USING btree ("_path");
  CREATE INDEX "pages_blocks_video_video_idx" ON "pages_blocks_video" USING btree ("video_id");
  CREATE INDEX "pages_blocks_faq_items_order_idx" ON "pages_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_items_parent_id_idx" ON "pages_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_cards_items_order_idx" ON "pages_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_items_parent_id_idx" ON "pages_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_order_idx" ON "pages_blocks_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_parent_id_idx" ON "pages_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_path_idx" ON "pages_blocks_cards" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_seo_seo_og_image_idx" ON "pages" USING btree ("seo_og_image_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "_pages_v_blocks_header_order_idx" ON "_pages_v_blocks_header" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_header_parent_id_idx" ON "_pages_v_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_header_path_idx" ON "_pages_v_blocks_header" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_header_image_idx" ON "_pages_v_blocks_header" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_text_order_idx" ON "_pages_v_blocks_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_parent_id_idx" ON "_pages_v_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_text_path_idx" ON "_pages_v_blocks_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_heading_order_idx" ON "_pages_v_blocks_heading" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_heading_parent_id_idx" ON "_pages_v_blocks_heading" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_heading_path_idx" ON "_pages_v_blocks_heading" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_order_idx" ON "_pages_v_blocks_image" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_parent_id_idx" ON "_pages_v_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_path_idx" ON "_pages_v_blocks_image" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_image_idx" ON "_pages_v_blocks_image" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_text_image_order_idx" ON "_pages_v_blocks_text_image" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_image_parent_id_idx" ON "_pages_v_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_text_image_path_idx" ON "_pages_v_blocks_text_image" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_text_image_image_idx" ON "_pages_v_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_reviews_items_order_idx" ON "_pages_v_blocks_reviews_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_reviews_items_parent_id_idx" ON "_pages_v_blocks_reviews_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_reviews_order_idx" ON "_pages_v_blocks_reviews" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_reviews_parent_id_idx" ON "_pages_v_blocks_reviews" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_reviews_path_idx" ON "_pages_v_blocks_reviews" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_results_stats_order_idx" ON "_pages_v_blocks_results_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_results_stats_parent_id_idx" ON "_pages_v_blocks_results_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_results_order_idx" ON "_pages_v_blocks_results" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_results_parent_id_idx" ON "_pages_v_blocks_results" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_results_path_idx" ON "_pages_v_blocks_results" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_video_order_idx" ON "_pages_v_blocks_video" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_video_parent_id_idx" ON "_pages_v_blocks_video" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_video_path_idx" ON "_pages_v_blocks_video" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_video_video_idx" ON "_pages_v_blocks_video" USING btree ("video_id");
  CREATE INDEX "_pages_v_blocks_faq_items_order_idx" ON "_pages_v_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_items_parent_id_idx" ON "_pages_v_blocks_faq_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_order_idx" ON "_pages_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_parent_id_idx" ON "_pages_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_path_idx" ON "_pages_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cards_items_order_idx" ON "_pages_v_blocks_cards_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_items_parent_id_idx" ON "_pages_v_blocks_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_order_idx" ON "_pages_v_blocks_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_parent_id_idx" ON "_pages_v_blocks_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_path_idx" ON "_pages_v_blocks_cards" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_seo_version_seo_og_image_idx" ON "_pages_v" USING btree ("version_seo_og_image_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "testimonials_image_idx" ON "testimonials" USING btree ("image_id");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "settings_social_media_order_idx" ON "settings_social_media" USING btree ("_order");
  CREATE INDEX "settings_social_media_parent_id_idx" ON "settings_social_media" USING btree ("_parent_id");
  CREATE INDEX "settings_footer_columns_links_order_idx" ON "settings_footer_columns_links" USING btree ("_order");
  CREATE INDEX "settings_footer_columns_links_parent_id_idx" ON "settings_footer_columns_links" USING btree ("_parent_id");
  CREATE INDEX "settings_footer_columns_order_idx" ON "settings_footer_columns" USING btree ("_order");
  CREATE INDEX "settings_footer_columns_parent_id_idx" ON "settings_footer_columns" USING btree ("_parent_id");
  CREATE INDEX "settings_footer_legal_links_order_idx" ON "settings_footer_legal_links" USING btree ("_order");
  CREATE INDEX "settings_footer_legal_links_parent_id_idx" ON "settings_footer_legal_links" USING btree ("_parent_id");
  CREATE INDEX "settings_logo_idx" ON "settings" USING btree ("logo_id");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX "seo_og_image_idx" ON "seo" USING btree ("og_image_id");
  CREATE INDEX "homepage_stats_order_idx" ON "homepage_stats" USING btree ("_order");
  CREATE INDEX "homepage_stats_parent_id_idx" ON "homepage_stats" USING btree ("_parent_id");
  CREATE INDEX "homepage_problem_cards_order_idx" ON "homepage_problem_cards" USING btree ("_order");
  CREATE INDEX "homepage_problem_cards_parent_id_idx" ON "homepage_problem_cards" USING btree ("_parent_id");
  CREATE INDEX "homepage_pillars_items_order_idx" ON "homepage_pillars_items" USING btree ("_order");
  CREATE INDEX "homepage_pillars_items_parent_id_idx" ON "homepage_pillars_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_pillars_items_image_idx" ON "homepage_pillars_items" USING btree ("image_id");
  CREATE INDEX "homepage_journey_steps_order_idx" ON "homepage_journey_steps" USING btree ("_order");
  CREATE INDEX "homepage_journey_steps_parent_id_idx" ON "homepage_journey_steps" USING btree ("_parent_id");
  CREATE INDEX "homepage_results_images_order_idx" ON "homepage_results_images" USING btree ("_order");
  CREATE INDEX "homepage_results_images_parent_id_idx" ON "homepage_results_images" USING btree ("_parent_id");
  CREATE INDEX "homepage_results_images_image_idx" ON "homepage_results_images" USING btree ("image_id");
  CREATE INDEX "homepage_stories_items_photos_order_idx" ON "homepage_stories_items_photos" USING btree ("_order");
  CREATE INDEX "homepage_stories_items_photos_parent_id_idx" ON "homepage_stories_items_photos" USING btree ("_parent_id");
  CREATE INDEX "homepage_stories_items_photos_image_idx" ON "homepage_stories_items_photos" USING btree ("image_id");
  CREATE INDEX "homepage_stories_items_order_idx" ON "homepage_stories_items" USING btree ("_order");
  CREATE INDEX "homepage_stories_items_parent_id_idx" ON "homepage_stories_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_testimonials_items_order_idx" ON "homepage_testimonials_items" USING btree ("_order");
  CREATE INDEX "homepage_testimonials_items_parent_id_idx" ON "homepage_testimonials_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_community_photos_order_idx" ON "homepage_community_photos" USING btree ("_order");
  CREATE INDEX "homepage_community_photos_parent_id_idx" ON "homepage_community_photos" USING btree ("_parent_id");
  CREATE INDEX "homepage_community_photos_image_idx" ON "homepage_community_photos" USING btree ("image_id");
  CREATE INDEX "homepage_community_stars_videos_order_idx" ON "homepage_community_stars_videos" USING btree ("_order");
  CREATE INDEX "homepage_community_stars_videos_parent_id_idx" ON "homepage_community_stars_videos" USING btree ("_parent_id");
  CREATE INDEX "homepage_community_stars_videos_video_idx" ON "homepage_community_stars_videos" USING btree ("video_id");
  CREATE INDEX "homepage_team_members_order_idx" ON "homepage_team_members" USING btree ("_order");
  CREATE INDEX "homepage_team_members_parent_id_idx" ON "homepage_team_members" USING btree ("_parent_id");
  CREATE INDEX "homepage_team_members_image_idx" ON "homepage_team_members" USING btree ("image_id");
  CREATE INDEX "homepage_content_videos_order_idx" ON "homepage_content_videos" USING btree ("_order");
  CREATE INDEX "homepage_content_videos_parent_id_idx" ON "homepage_content_videos" USING btree ("_parent_id");
  CREATE INDEX "homepage_content_videos_video_idx" ON "homepage_content_videos" USING btree ("video_id");
  CREATE INDEX "homepage_faq_items_order_idx" ON "homepage_faq_items" USING btree ("_order");
  CREATE INDEX "homepage_faq_items_parent_id_idx" ON "homepage_faq_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_hero_hero_image_idx" ON "homepage" USING btree ("hero_image_id");
  CREATE INDEX "homepage_journey_journey_image_idx" ON "homepage" USING btree ("journey_image_id");
  CREATE INDEX "homepage_about_sam_about_sam_horizontal_image_idx" ON "homepage" USING btree ("about_sam_horizontal_image_id");
  CREATE INDEX "homepage_about_sam_about_sam_image1_idx" ON "homepage" USING btree ("about_sam_image1_id");
  CREATE INDEX "homepage_about_sam_about_sam_image2_idx" ON "homepage" USING btree ("about_sam_image2_id");
  CREATE INDEX "homepage_about_sam_about_sam_bottom_image_idx" ON "homepage" USING btree ("about_sam_bottom_image_id");
  CREATE INDEX "homepage_team_team_group_image_idx" ON "homepage" USING btree ("team_group_image_id");
  CREATE INDEX "team_stats_order_idx" ON "team_stats" USING btree ("_order");
  CREATE INDEX "team_stats_parent_id_idx" ON "team_stats" USING btree ("_parent_id");
  CREATE INDEX "team_coaches_items_order_idx" ON "team_coaches_items" USING btree ("_order");
  CREATE INDEX "team_coaches_items_parent_id_idx" ON "team_coaches_items" USING btree ("_parent_id");
  CREATE INDEX "team_coaches_items_main_image_idx" ON "team_coaches_items" USING btree ("main_image_id");
  CREATE INDEX "team_coaches_items_secondary_image_idx" ON "team_coaches_items" USING btree ("secondary_image_id");
  CREATE INDEX "team_coaches_items_video_idx" ON "team_coaches_items" USING btree ("video_id");
  CREATE INDEX "team_values_items_order_idx" ON "team_values_items" USING btree ("_order");
  CREATE INDEX "team_values_items_parent_id_idx" ON "team_values_items" USING btree ("_parent_id");
  CREATE INDEX "team_hero_hero_image_idx" ON "team" USING btree ("hero_image_id");
  CREATE INDEX "team_founder_founder_main_image_idx" ON "team" USING btree ("founder_main_image_id");
  CREATE INDEX "team_founder_founder_secondary_image_idx" ON "team" USING btree ("founder_secondary_image_id");
  CREATE INDEX "team_founder_founder_video_idx" ON "team" USING btree ("founder_video_id");
  CREATE INDEX "programma_stats_order_idx" ON "programma_stats" USING btree ("_order");
  CREATE INDEX "programma_stats_parent_id_idx" ON "programma_stats" USING btree ("_parent_id");
  CREATE INDEX "programma_what_is_it_core_tags_order_idx" ON "programma_what_is_it_core_tags" USING btree ("_order");
  CREATE INDEX "programma_what_is_it_core_tags_parent_id_idx" ON "programma_what_is_it_core_tags" USING btree ("_parent_id");
  CREATE INDEX "programma_why_not_working_items_order_idx" ON "programma_why_not_working_items" USING btree ("_order");
  CREATE INDEX "programma_why_not_working_items_parent_id_idx" ON "programma_why_not_working_items" USING btree ("_parent_id");
  CREATE INDEX "programma_method_items_order_idx" ON "programma_method_items" USING btree ("_order");
  CREATE INDEX "programma_method_items_parent_id_idx" ON "programma_method_items" USING btree ("_parent_id");
  CREATE INDEX "programma_for_you_do_items_order_idx" ON "programma_for_you_do_items" USING btree ("_order");
  CREATE INDEX "programma_for_you_do_items_parent_id_idx" ON "programma_for_you_do_items" USING btree ("_parent_id");
  CREATE INDEX "programma_for_you_dont_items_order_idx" ON "programma_for_you_dont_items" USING btree ("_order");
  CREATE INDEX "programma_for_you_dont_items_parent_id_idx" ON "programma_for_you_dont_items" USING btree ("_parent_id");
  CREATE INDEX "programma_what_you_get_items_order_idx" ON "programma_what_you_get_items" USING btree ("_order");
  CREATE INDEX "programma_what_you_get_items_parent_id_idx" ON "programma_what_you_get_items" USING btree ("_parent_id");
  CREATE INDEX "programma_timeline_phases_order_idx" ON "programma_timeline_phases" USING btree ("_order");
  CREATE INDEX "programma_timeline_phases_parent_id_idx" ON "programma_timeline_phases" USING btree ("_parent_id");
  CREATE INDEX "programma_community_photos_order_idx" ON "programma_community_photos" USING btree ("_order");
  CREATE INDEX "programma_community_photos_parent_id_idx" ON "programma_community_photos" USING btree ("_parent_id");
  CREATE INDEX "programma_community_photos_image_idx" ON "programma_community_photos" USING btree ("image_id");
  CREATE INDEX "programma_community_tags_order_idx" ON "programma_community_tags" USING btree ("_order");
  CREATE INDEX "programma_community_tags_parent_id_idx" ON "programma_community_tags" USING btree ("_parent_id");
  CREATE INDEX "programma_results_items_order_idx" ON "programma_results_items" USING btree ("_order");
  CREATE INDEX "programma_results_items_parent_id_idx" ON "programma_results_items" USING btree ("_parent_id");
  CREATE INDEX "programma_results_items_image_idx" ON "programma_results_items" USING btree ("image_id");
  CREATE INDEX "programma_faq_items_order_idx" ON "programma_faq_items" USING btree ("_order");
  CREATE INDEX "programma_faq_items_parent_id_idx" ON "programma_faq_items" USING btree ("_parent_id");
  CREATE INDEX "programma_hero_hero_image_idx" ON "programma" USING btree ("hero_image_id");
  CREATE INDEX "programma_method_method_image_idx" ON "programma" USING btree ("method_image_id");
  CREATE INDEX "programma_what_you_get_what_you_get_image_idx" ON "programma" USING btree ("what_you_get_image_id");
  CREATE INDEX "resultaten_hero_slides_order_idx" ON "resultaten_hero_slides" USING btree ("_order");
  CREATE INDEX "resultaten_hero_slides_parent_id_idx" ON "resultaten_hero_slides" USING btree ("_parent_id");
  CREATE INDEX "resultaten_hero_slides_image_idx" ON "resultaten_hero_slides" USING btree ("image_id");
  CREATE INDEX "resultaten_stats_order_idx" ON "resultaten_stats" USING btree ("_order");
  CREATE INDEX "resultaten_stats_parent_id_idx" ON "resultaten_stats" USING btree ("_parent_id");
  CREATE INDEX "resultaten_before_after_items_tags_order_idx" ON "resultaten_before_after_items_tags" USING btree ("_order");
  CREATE INDEX "resultaten_before_after_items_tags_parent_id_idx" ON "resultaten_before_after_items_tags" USING btree ("_parent_id");
  CREATE INDEX "resultaten_before_after_items_order_idx" ON "resultaten_before_after_items" USING btree ("_order");
  CREATE INDEX "resultaten_before_after_items_parent_id_idx" ON "resultaten_before_after_items" USING btree ("_parent_id");
  CREATE INDEX "resultaten_before_after_items_before_image_idx" ON "resultaten_before_after_items" USING btree ("before_image_id");
  CREATE INDEX "resultaten_before_after_items_after_image_idx" ON "resultaten_before_after_items" USING btree ("after_image_id");
  CREATE INDEX "resultaten_beyond_photos_items_order_idx" ON "resultaten_beyond_photos_items" USING btree ("_order");
  CREATE INDEX "resultaten_beyond_photos_items_parent_id_idx" ON "resultaten_beyond_photos_items" USING btree ("_parent_id");
  CREATE INDEX "resultaten_stories_items_order_idx" ON "resultaten_stories_items" USING btree ("_order");
  CREATE INDEX "resultaten_stories_items_parent_id_idx" ON "resultaten_stories_items" USING btree ("_parent_id");
  CREATE INDEX "resultaten_stories_items_main_image_idx" ON "resultaten_stories_items" USING btree ("main_image_id");
  CREATE INDEX "resultaten_stories_items_secondary_image_idx" ON "resultaten_stories_items" USING btree ("secondary_image_id");
  CREATE INDEX "resultaten_stories_items_tertiary_image_idx" ON "resultaten_stories_items" USING btree ("tertiary_image_id");
  CREATE INDEX "resultaten_video_stories_items_order_idx" ON "resultaten_video_stories_items" USING btree ("_order");
  CREATE INDEX "resultaten_video_stories_items_parent_id_idx" ON "resultaten_video_stories_items" USING btree ("_parent_id");
  CREATE INDEX "resultaten_video_stories_items_video_idx" ON "resultaten_video_stories_items" USING btree ("video_id");
  CREATE INDEX "resultaten_quotes_order_idx" ON "resultaten_quotes" USING btree ("_order");
  CREATE INDEX "resultaten_quotes_parent_id_idx" ON "resultaten_quotes" USING btree ("_parent_id");
  CREATE INDEX "resultaten_metrics_items_order_idx" ON "resultaten_metrics_items" USING btree ("_order");
  CREATE INDEX "resultaten_metrics_items_parent_id_idx" ON "resultaten_metrics_items" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_header" CASCADE;
  DROP TABLE "pages_blocks_text" CASCADE;
  DROP TABLE "pages_blocks_heading" CASCADE;
  DROP TABLE "pages_blocks_image" CASCADE;
  DROP TABLE "pages_blocks_text_image" CASCADE;
  DROP TABLE "pages_blocks_reviews_items" CASCADE;
  DROP TABLE "pages_blocks_reviews" CASCADE;
  DROP TABLE "pages_blocks_results_stats" CASCADE;
  DROP TABLE "pages_blocks_results" CASCADE;
  DROP TABLE "pages_blocks_video" CASCADE;
  DROP TABLE "pages_blocks_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_cards_items" CASCADE;
  DROP TABLE "pages_blocks_cards" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "_pages_v_blocks_header" CASCADE;
  DROP TABLE "_pages_v_blocks_text" CASCADE;
  DROP TABLE "_pages_v_blocks_heading" CASCADE;
  DROP TABLE "_pages_v_blocks_image" CASCADE;
  DROP TABLE "_pages_v_blocks_text_image" CASCADE;
  DROP TABLE "_pages_v_blocks_reviews_items" CASCADE;
  DROP TABLE "_pages_v_blocks_reviews" CASCADE;
  DROP TABLE "_pages_v_blocks_results_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_results" CASCADE;
  DROP TABLE "_pages_v_blocks_video" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_items" CASCADE;
  DROP TABLE "_pages_v_blocks_faq" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_items" CASCADE;
  DROP TABLE "_pages_v_blocks_cards" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "styling" CASCADE;
  DROP TABLE "settings_social_media" CASCADE;
  DROP TABLE "settings_footer_columns_links" CASCADE;
  DROP TABLE "settings_footer_columns" CASCADE;
  DROP TABLE "settings_footer_legal_links" CASCADE;
  DROP TABLE "settings" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "cta" CASCADE;
  DROP TABLE "seo" CASCADE;
  DROP TABLE "homepage_stats" CASCADE;
  DROP TABLE "homepage_problem_cards" CASCADE;
  DROP TABLE "homepage_pillars_items" CASCADE;
  DROP TABLE "homepage_journey_steps" CASCADE;
  DROP TABLE "homepage_results_images" CASCADE;
  DROP TABLE "homepage_stories_items_photos" CASCADE;
  DROP TABLE "homepage_stories_items" CASCADE;
  DROP TABLE "homepage_testimonials_items" CASCADE;
  DROP TABLE "homepage_community_photos" CASCADE;
  DROP TABLE "homepage_community_stars_videos" CASCADE;
  DROP TABLE "homepage_team_members" CASCADE;
  DROP TABLE "homepage_content_videos" CASCADE;
  DROP TABLE "homepage_faq_items" CASCADE;
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "team_stats" CASCADE;
  DROP TABLE "team_coaches_items" CASCADE;
  DROP TABLE "team_values_items" CASCADE;
  DROP TABLE "team" CASCADE;
  DROP TABLE "programma_stats" CASCADE;
  DROP TABLE "programma_what_is_it_core_tags" CASCADE;
  DROP TABLE "programma_why_not_working_items" CASCADE;
  DROP TABLE "programma_method_items" CASCADE;
  DROP TABLE "programma_for_you_do_items" CASCADE;
  DROP TABLE "programma_for_you_dont_items" CASCADE;
  DROP TABLE "programma_what_you_get_items" CASCADE;
  DROP TABLE "programma_timeline_phases" CASCADE;
  DROP TABLE "programma_community_photos" CASCADE;
  DROP TABLE "programma_community_tags" CASCADE;
  DROP TABLE "programma_results_items" CASCADE;
  DROP TABLE "programma_faq_items" CASCADE;
  DROP TABLE "programma" CASCADE;
  DROP TABLE "resultaten_hero_slides" CASCADE;
  DROP TABLE "resultaten_stats" CASCADE;
  DROP TABLE "resultaten_before_after_items_tags" CASCADE;
  DROP TABLE "resultaten_before_after_items" CASCADE;
  DROP TABLE "resultaten_beyond_photos_items" CASCADE;
  DROP TABLE "resultaten_stories_items" CASCADE;
  DROP TABLE "resultaten_video_stories_items" CASCADE;
  DROP TABLE "resultaten_quotes" CASCADE;
  DROP TABLE "resultaten_metrics_items" CASCADE;
  DROP TABLE "resultaten" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_heading_level";
  DROP TYPE "public"."enum_pages_blocks_heading_alignment";
  DROP TYPE "public"."enum_pages_blocks_image_alignment";
  DROP TYPE "public"."enum_pages_blocks_text_image_image_position";
  DROP TYPE "public"."enum_pages_blocks_results_columns";
  DROP TYPE "public"."enum_pages_blocks_video_aspect_ratio";
  DROP TYPE "public"."enum_pages_blocks_cards_columns";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_heading_level";
  DROP TYPE "public"."enum__pages_v_blocks_heading_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_image_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_text_image_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_results_columns";
  DROP TYPE "public"."enum__pages_v_blocks_video_aspect_ratio";
  DROP TYPE "public"."enum__pages_v_blocks_cards_columns";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_styling_typography_heading_weight";
  DROP TYPE "public"."enum_settings_social_media_platform";
  DROP TYPE "public"."enum_resultaten_quotes_variant";`)
}
