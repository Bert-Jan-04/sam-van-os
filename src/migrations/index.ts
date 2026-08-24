import * as migration_20260824_155045_baseline from './20260824_155045_baseline';

export const migrations = [
  {
    up: migration_20260824_155045_baseline.up,
    down: migration_20260824_155045_baseline.down,
    name: '20260824_155045_baseline'
  },
];
