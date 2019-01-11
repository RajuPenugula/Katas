// 66: object-literal - getter
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('An object literal can also contain getters', () => {
    it('just prefix the property with `get` (and make it a function)', function() {
      const obj = {
       get x() { return 'ax'; } // get goes before x()
      };
      assert.equal(obj.x, 'ax');
    });
    it('must have NO parameters', function() {
      const obj = {
       get x() { return 'ax'; } // take out param and put get before
      };
      assert.equal(obj.x, 'ax');
    });
    it('can be a computed property (an expression enclosed in `[]`)', function() {
      const keyName = 'x';
      const obj = {
        get [keyName]() { return 'ax'; }//[] around keyname
      };
      assert.equal(obj.x, 'ax');
    });
    it('can be removed using delete', function() {
      const obj = {
        get x() { return 'ax'; }
      };
      delete obj.x; //change x in y place
      assert.equal(obj.x, void 0);
    });