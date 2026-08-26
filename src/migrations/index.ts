import * as migration_20260824_155045_baseline from './20260824_155045_baseline';
import * as migration_20260826_074934_private_fields_and_home_global from './20260826_074934_private_fields_and_home_global';

export const migrations = [
  {
    up: migration_20260824_155045_baseline.up,
    down: migration_20260824_155045_baseline.down,
    name: '20260824_155045_baseline',
  },
  {
    up: migration_20260826_074934_private_fields_and_home_global.up,
    down: migration_20260826_074934_private_fields_and_home_global.down,
    name: '20260826_074934_private_fields_and_home_global'
  },
];
