describe('Destructuring also works on strings', () => {
    it('destructure every character, just as if the string was an array', () => {
      let [a, b, c] = 'abc';
      
      // a,b,c need to be in array
      
      assert.deepEqual([a, b, c], ['a', 'b', 'c']);
    });
    it('missing characters are undefined', () => {
      const [a,b,c] = 'ab';
      assert.equal(c, void 0);
    });
    it('unicode character work too', () => {
      const [a, space, coffee] = 'a =';
    //  assert.equal(coffee, '\u{2615}');
    });
  });