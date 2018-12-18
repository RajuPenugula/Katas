// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!

describe('`let` restricts the scope of the variable to the current block', () => {

    describe('`let` vs. `var`', () => {
  
      it('`var` works as usual', () => {
        if (true) {
          var varX = true;
        }
        assert.equal(varX, true);
      });
  // changed let to var to unrestrict the scope. To make sure varX is available outside the scope.  
      it('`let` restricts scope to inside the block', () => {
        if (true) {
          let letX = true;
        }
        assert.throws(() => console.log(letX));
      });
  // changed var to let to restrict scope of letX  
    });
  
    describe('`let` usage', () => {
      
      it('`let` use in `for` loops', () => {
        let obj = {x: 1};
  //  used let to restrict scope of the key variale to inside the for loop     
        for (let key in obj) {}
        assert.throws(() => console.log(key));
      });
     
     
      it('create artifical scope, using curly braces', () => {
        {
          let letX = true;
        }
        assert.throws(() => console.log(letX));
      });
  //The curly braces to create articicial scope are already there. Just change var to let.    
    });
    
  });