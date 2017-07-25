/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    //throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it("has a prefix of 51 and a length of 16", function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it("has a prefix of 52 and a length of 16", function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it("has a prefix of 53 and a length of 16", function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
    detectNetwork('5412345678901234').should.equal("MasterCard");
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal("MasterCard");
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Implement these tests (and others) and make them pass!

  var should = chai.should();

  it('has a prefix of 6011 and a length of 16',function() {
    detectNetwork('6011123456789123').should.equal("Discover");
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011123456789123456').should.equal("Discover");
  });


  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(prefix.toString() + '4567890123456').should.equal('Discover');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(prefix.toString() + '4567890123456789').should.equal('Discover');
      });

    })(prefix)
  }  

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511123456789123').should.equal("Discover");
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511123456789123456').should.equal("Discover");
  });


  for (var prefix = 644; prefix <= 649; prefix++) {
  (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix.toString() + '1123456789123').should.equal("Discover");
      });


      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix.toString() + '1123456789123456').should.equal("Discover");
      });
    
      })(prefix)
    }
    });           


describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  
    var should = chai.should();
    var lengthArray = ['1','10','100','1000','10000','100000','1000000','10000000']

  
  for (var i = 0; i < lengthArray.length; i++) {

  (function(i) {
      console.log('50181234567' + lengthArray[i], ('50181234567' + lengthArray[i]).length)
      it('has a prefix of 5018 and a length of ' + ('50181234567' + lengthArray[i]).length, function() {
        detectNetwork('50181234567' + lengthArray[i]).should.equal("Maestro");
      });

      it('has a prefix of 5020 and a length of ' + ('50201234567' + lengthArray[i]).length, function() {
        detectNetwork('50201234567' + lengthArray[i]).should.equal("Maestro");
      });

      it('has a prefix of 5038 and a length of ' + ('50381234567' + lengthArray[i]).length, function() {
        detectNetwork('50381234567' + lengthArray[i]).should.equal("Maestro");
      });

      it('has a prefix of 6304 and a length of ' + ('63041234567' + lengthArray[i]).length, function() {
        detectNetwork('63041234567' + lengthArray[i]).should.equal("Maestro");
      });
    
    })(i);
  }  
});   


describe('China UnionPay', function(){
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  var should = chai.should();

  for(var prefix = 622126; prefix <= 622925; prefix++){
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(prefix.toString() + '7890123456').should.equal("China UnionPay");
      });

      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        detectNetwork(prefix.toString() + '78901234567').should.equal("China UnionPay");
      });

      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        detectNetwork(prefix.toString() + '789012345678').should.equal("China UnionPay");
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(prefix.toString() + '7890123456789').should.equal("China UnionPay");
      });

    })(prefix);
  }

  for(var prefixA = 624; prefixA <= 626; prefixA++){
    (function(prefixA) {
      it('has a prefix of ' + prefixA + ' and a length of 16', function(){
        detectNetwork(prefixA.toString() + '4567890123456').should.equal("China UnionPay");
      });

      it('has a prefix of ' + prefixA + ' and a length of 17', function(){
        detectNetwork(prefixA.toString() + '45678901234567').should.equal("China UnionPay");
      });

      it('has a prefix of ' + prefixA + ' and a length of 18', function(){
        detectNetwork(prefixA.toString() + '456789012345678').should.equal("China UnionPay");
      });

      it('has a prefix of ' + prefixA + ' and a length of 19', function(){
        detectNetwork(prefixA.toString() + '4567890123456789').should.equal("China UnionPay");
      });

    })(prefixA);
  }

  for(var prefixB = 6282; prefixB <= 6288; prefixB++){
    (function(prefixB) {
      it('has a prefix of ' + prefixB + ' and a length of 16', function(){
        detectNetwork(prefixB.toString() + '567890123456').should.equal("China UnionPay");
      });

      it('has a prefix of ' + prefixB + ' and a length of 17', function(){
        detectNetwork(prefixB.toString() + '5678901234567').should.equal("China UnionPay");
      });

      it('has a prefix of ' + prefixB + ' and a length of 18', function(){
        detectNetwork(prefixB.toString() + '56789012345678').should.equal("China UnionPay");
      });

      it('has a prefix of ' + prefixB + ' and a length of 19', function(){
        detectNetwork(prefixB.toString() + '567890123456789').should.equal("China UnionPay");
      });

    })(prefixB);
  }

});


//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19
describe('Switch', function(){

  var should = chai.should();
//4903
    it('has a prefix of 4903 and a length of 16', function(){
      detectNetwork('4903567890123456').should.equal("Switch");
    });

    it('has a prefix of 4903 and a length of 18', function(){
      detectNetwork('490356789012345678').should.equal("Switch");
    });

    it('has a prefix of 4903 and a length of 19', function(){
      detectNetwork('4903567890123456789').should.equal("Switch");
    });
//4905
    it('has a prefix of 4905 and a length of 16', function(){
      detectNetwork('4905567890123456').should.equal("Switch");
    });

    it('has a prefix of 4905 and a length of 18', function(){
      detectNetwork('490556789012345678').should.equal("Switch");
    });

    it('has a prefix of 4905 and a length of 19', function(){
      detectNetwork('4905567890123456789').should.equal("Switch");
    });
//4911
    it('has a prefix of 4911 and a length of 16', function(){
      detectNetwork('4911567890123456').should.equal("Switch");
    });

    it('has a prefix of 4911 and a length of 18', function(){
      detectNetwork('491156789012345678').should.equal("Switch");
    });

    it('has a prefix of 4911 and a length of 19', function(){
      detectNetwork('4911567890123456789').should.equal("Switch");
    });
//4936
    it('has a prefix of 4936 and a length of 16', function(){
      detectNetwork('4936567890123456').should.equal("Switch");
    });

    it('has a prefix of 4936 and a length of 18', function(){
      detectNetwork('493656789012345678').should.equal("Switch");
    });

    it('has a prefix of 4936 and a length of 19', function(){
      detectNetwork('4936567890123456789').should.equal("Switch");
    });

//564182

    it('has a prefix of 564182 and a length of 16', function(){
      detectNetwork('5641827890123456').should.equal("Switch");
    });

    it('has a prefix of 564182 and a length of 18', function(){
      detectNetwork('564182789012345678').should.equal("Switch");
    });

    it('has a prefix of 564182 and a length of 19', function(){
      detectNetwork('5641827890123456789').should.equal("Switch");
    });

//633110

    it('has a prefix of 633110 and a length of 16', function(){
      detectNetwork('6331107890123456').should.equal("Switch");
    });

    it('has a prefix of 633110 and a length of 18', function(){
      detectNetwork('633110789012345678').should.equal("Switch");
    });

    it('has a prefix of 633110 and a length of 19', function(){
      detectNetwork('6331107890123456789').should.equal("Switch");
    });

//6333

    it('has a prefix of 6333 and a length of 16', function(){
      detectNetwork('6333827890123456').should.equal("Switch");
    });

    it('has a prefix of 6333 and a length of 18', function(){
      detectNetwork('633310789012345678').should.equal("Switch");
    });

    it('has a prefix of 6333 and a length of 19', function(){
      detectNetwork('6333107890123456789').should.equal("Switch");
    });

//6759

    it('has a prefix of 6759 and a length of 16', function(){
      detectNetwork('6759982789012346').should.equal("Switch");
    });

    it('has a prefix of 6759 and a length of 18', function(){
      detectNetwork('675910789012345678').should.equal("Switch");
    });

    it('has a prefix of 6759 and a length of 19', function(){
      detectNetwork('6759107890123456789').should.equal("Switch");
    });

});




