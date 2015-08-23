# keyrotator

get next valid key from array of keys with limit requests.

For example, google developer key for Voice API have request limit = 50. You can use some keys for work your app.

## Usage

`````javascript

var Keyrotator = require('keyrotator');

var keys = [
  {
    key: 'google_developer_key_1',
    limit: 20
  },
  {
    key: 'google_developer_key_2',
    limit: 30
  }
];

var keyrotator = new Keyrotator(keys);
var workKey = keyrotator.getKey();

`````

## Install

> npm install keyrotator [--save]


## API

### getKey()

return key

### getSize()

return sum of keys' limits