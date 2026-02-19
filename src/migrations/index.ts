import * as migration_20260214_135919 from './20260214_135919';
import * as migration_20260219_161936 from './20260219_161936';

export const migrations = [
  {
    up: migration_20260214_135919.up,
    down: migration_20260214_135919.down,
    name: '20260214_135919',
  },
  {
    up: migration_20260219_161936.up,
    down: migration_20260219_161936.down,
    name: '20260219_161936'
  },
];
