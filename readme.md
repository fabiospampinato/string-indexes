# String Indexes

Retrieves all indexes, in non-overlapping ranges, of a substring in a string.

## Install

```sh
npm install string-indexes
```

## Usage

```ts
import getIndexes from 'string-indexes';

// Let's retrieve all the indexes for "xx"

getIndexes ( 'xxxx__xxxx__xxxxx', 'xx' ); // => [0, 2, 6, 8, 12, 14]
```

## License

MIT © Fabio Spampinato
