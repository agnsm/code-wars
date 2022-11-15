import { assert } from 'chai';
import { number } from './task4';

describe("number", function() {
  it("works for some examples", ()=> {
    assert.equal(number([[10, 0], [3, 5], [5, 8]]), 5, "didn't work for [[10, 0], [3, 5], [5, 8]]")
    assert.equal(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17, "didn't work for [[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]")
    assert.equal(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]), 21, "didn't work for [[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]")
    assert.equal(number([[0,0]]),0)
  })

  it("works for random numbers", ()=> {
    [...Array(100)].forEach((e)=> {
      const randint = (a:number,b:number) => Math.floor((Math.random() * b) + a)
      let n = randint(0,100)
      let arr: [number, number][] = [[n,0]];
      for(let i = 0; i < randint(0,100);i++){
        let x = randint(0,100);
        let y = randint(0,n);
        arr.push([x,y]);
        n += x - y;
      }
      assert.equal(number(arr),n)
    })
  })
})
