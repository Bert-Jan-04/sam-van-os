import * as migration_20260824_155045_baseline from './20260824_155045_baseline';
import * as migration_20260826_074934_private_fields_and_home_global from './20260826_074934_private_fields_and_home_global';
import * as migration_20260826_080310_seed_homepage_testimonials from './20260826_080310_seed_homepage_testimonials';
import * as migration_20260826_081932_add_results_stories_to_home from './20260826_081932_add_results_stories_to_home';
import * as migration_20260826_081950_move_results_stories_data_to_home from './20260826_081950_move_results_stories_data_to_home';
import * as migration_20260826_082012_remove_results_stories_from_homepage from './20260826_082012_remove_results_stories_from_homepage';

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
];
