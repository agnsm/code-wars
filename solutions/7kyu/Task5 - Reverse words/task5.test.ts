import { assert } from 'chai';

import { reverseWords } from './task5';

describe("Sample Test Cases", function(){
  it("Should return a reversed string", function() {
    assert.equal(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.equal(reverseWords('apple'), 'elppa');
    assert.equal(reverseWords('a b c d'), 'a b c d');
    assert.equal(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});
describe("Random Test Cases", function(){
  it("Should work for random tests too", function() {
    for(var i = 0; i < 20; i++){
      const testStr = makeStr();
      assert.equal(reverseWords(testStr), example(testStr));
    }
  });
});
function example(str: string): string {
  return str
    .split(' ')
    .map(
      (w: string): string =>
        w
          .split('')
          .reverse()
          .join(''),
    )
    .join(' ');
}
function makeWord(min: number, max: number) {
  var array: string[] = [];
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var length = Math.ceil((Math.random() * max) + min)

  for(let i=0; i < length; i++ ) {
      array.push(possible[(Math.floor(Math.random() * possible.length))]);
  }

  return array.join("");
}
function makeStr() {
  const arrLen = Math.floor(Math.random() * 9) + 2;
  const testArr: string[] = [];
  for (let j = 0; j < arrLen; j++) {
      testArr.push(makeWord(5, 10));
  }
  return testArr.join(" ");
}
