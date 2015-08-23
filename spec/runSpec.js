var Keyrotator = require('../index');

describe('Keyrotator', function () {

  var keys = [
    {
      key: 'rtfdgkjfdgkj',
      limit: 2
    },
    {
      key: 'hdkjfdsfgnkjdgf',
      limit: 3
    }
  ];

  var expected = [
    'rtfdgkjfdgkj',
    'rtfdgkjfdgkj',
    'hdkjfdsfgnkjdgf',
    'hdkjfdsfgnkjdgf',
    'hdkjfdsfgnkjdgf',
  ];


  it('validate good array peernames.json', function (done) {

    var keyrotator = new Keyrotator(keys);
    var array = [];

    for (var i = 0; i < keyrotator.getSize(); i++) {
      array.push(keyrotator.getKey());
    };        

    expect(array[0]).toBe(keys[0].key);
    expect(array[1]).toBe(keys[0].key);

    expect(array[2]).toBe(keys[1].key);

    expect(array).toEqual(expected);

    done();
  });

});