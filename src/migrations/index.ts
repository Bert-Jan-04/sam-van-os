import * as migration_20260824_155045_baseline from './20260824_155045_baseline';
import * as migration_20260826_074934_private_fields_and_home_global from './20260826_074934_private_fields_and_home_global';
import * as migration_20260826_080310_seed_homepage_testimonials from './20260826_080310_seed_homepage_testimonials';
import * as migration_20260826_081932_add_results_stories_to_home from './20260826_081932_add_results_stories_to_home';
import * as migration_20260826_081950_move_results_stories_data_to_home from './20260826_081950_move_results_stories_data_to_home';
import * as migration_20260826_082012_remove_results_stories_from_homepage from './20260826_082012_remove_results_stories_from_homepage';
import * as migration_20260907_133300_add_results_stories_back_to_homepage from './20260907_133300_add_results_stories_back_to_homepage';
import * as migration_20260907_143347_remove_home_concept_global from './20260907_143347_remove_home_concept_global';
import * as migration_20260907_144110_update_programma_content from './20260907_144110_update_programma_content';
import * as migration_20260907_150657_remove_stories_from_homepage from './20260907_150657_remove_stories_from_homepage';

export const migrations = [
  {
    up: migration_20260824_155045_baseline.up,
    down: migration_20260824_155045_baseline.down,
    name: '20260824_155045_baseline',
  },
  {
    up: migration_20260826_074934_private_fields_and_home_global.up,
    down: migration_20260826_074934_private_fields_and_home_global.down,
    name: '20260826_074934_private_fields_and_home_global',
  },
  {
    up: migration_20260826_080310_seed_homepage_testimonials.up,
    down: migration_20260826_080310_seed_homepage_testimonials.down,
    name: '20260826_080310_seed_homepage_testimonials',
  },
  {
    up: migration_20260826_081932_add_results_stories_to_home.up,
    down: migration_20260826_081932_add_results_stories_to_home.down,
    name: '20260826_081932_add_results_stories_to_home',
  },
  {
    up: migration_20260826_081950_move_results_stories_data_to_home.up,
    down: migration_20260826_081950_move_results_stories_data_to_home.down,
    name: '20260826_081950_move_results_stories_data_to_home',
  },
  {
    up: migration_20260826_082012_remove_results_stories_from_homepage.up,
    down: migration_20260826_082012_remove_results_stories_from_homepage.down,
    name: '20260826_082012_remove_results_stories_from_homepage'
  },
  {
    up: migration_20260907_133300_add_results_stories_back_to_homepage.up,
    down: migration_20260907_133300_add_results_stories_back_to_homepage.down,
    name: '20260907_133300_add_results_stories_back_to_homepage'
  },
  {
    up: migration_20260907_143347_remove_home_concept_global.up,
    down: migration_20260907_143347_remove_home_concept_global.down,
    name: '20260907_143347_remove_home_concept_global'
  },
  {
    up: migration_20260907_144110_update_programma_content.up,
    down: migration_20260907_144110_update_programma_content.down,
    name: '20260907_144110_update_programma_content'
  },
  {
    up: migration_20260907_150657_remove_stories_from_homepage.up,
    down: migration_20260907_150657_remove_stories_from_homepage.down,
    name: '20260907_150657_remove_stories_from_homepage'
  },
];
