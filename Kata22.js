
describe('Class creation', () => {
    it('is as simple as `class XXX {}`', function() {
      class TestClass{};
      const instance = new TestClass();
      assert.equal(typeof instance, 'object');
    });
    it('a class is block scoped', () => {
      {class Inside {}}
      {class Inside {}}
      assert.equal(typeof Inside, 'undefined');
    });
    it('the `constructor` is a special method', function() {
      class User {
        constructor(id) {
          this.id = 42;
        }
      }
      const user = new User(42);
      assert.equal(user.id, 42);
    });
    it('defining a method by writing it inside the class body', function() {
      class User {
        writesTests() {
                  return 23 == 42
              }
      }
      const notATester = new User();
      assert.equal(notATester.writesTests(), false);
    });
    it('multiple methods need no commas (opposed to object notation)', function() {
      class User {
                    constructor() { this.everWroteATest = false; }
              wroteATest() { this.everWroteATest = true; }
              isLazy() { return !this.everWroteATest  }
      }
      const tester = new User();
      assert.equal(tester.isLazy(), true);
      tester.wroteATest();
      assert.equal(tester.isLazy(), false);
    });
    it('anonymous class', () => {
      const classType = typeof class{
        constructor(){ this.someAttribute = 42; }
              someMethod(foo) { return foo ; }
  
      };
      assert.equal(classType, 'function');