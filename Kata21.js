describe('spread with strings', () => {

    it('simply spread each char of a string', function() {
      const [a, b] = [...'ab'];
      assert.equal(a, 'a');
      assert.equal(b, 'b');
    });
  
    it('extracts each array item', function() {
      const [a,b] = [...'12'];
      assert.equal(a, 1);
      assert.equal(b, 2);
    });
    
    it('works anywhere inside an array (must not be last)', function() {
      const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
      assert.equal(letters.length, 6);
    });
    
    it('dont confuse with the rest operator', function() {
      const [...rest] = [...'12345'];
      assert.deepEqual(rest, [1, 2, 3, 4, 5]);
    });
    
    it('passed as function parameter', function() {
      const max = Math.max(...'12345');
      assert.deepEqual(max, 5);
    });
    
  });