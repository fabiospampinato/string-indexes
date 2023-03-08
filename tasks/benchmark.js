
/* IMPORT */

import benchmark from 'benchloop';
import indexes from '../dist/index.js';

/* MAIN */

benchmark.config ({
  iterations: 1_000_000
});

benchmark ({
  name: 'string-indexes',
  fn: () => {
    indexes ( 'xxxx__xxxx__xxxxx', 'xx' );
  }
});
