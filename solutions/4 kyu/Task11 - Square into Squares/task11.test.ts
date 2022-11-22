import { decompose } from './task11'
import chai,{assert} from "chai";

function tot(arr:number[], n:number) {
    let res = arr.reduce(function(sum, c) { return sum + c * c; }, 0);
    return res === n * n;
}
function is_sorted(arr:number[]) {
    if (arr.length < 2) return false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i+1]) {
            return false;
        }
    }
    return true;
}
function testing(n:number, exp:null|number[]) {
    let ans = decompose(n);
    let success = false;
    let sans = JSON.stringify(ans);
    let sexp = JSON.stringify(exp);
    let msg = ""
    if (sans != sexp && Array.isArray(ans)) {
      let st = is_sorted(ans);
      let t = tot(ans,n);
      msg = "Sorted: " + st + ", Total: " + t + " -> Correct"
      if (!st) msg += "; Not increasinly sorted"
      if (!t)  msg += "; Bad sum of squares"
      if(st&&t){
        assert.isTrue(true)
        return
      }
    }
    assert.deepEqual(ans,exp, msg)
}


describe("Fixed Tests", function() {
    it("Basic tests decompose", function() {
        testing(12, [1,2,3,7,9]);
        testing(50, [1,3,5,8,49]);
        testing(44, [2,3,5,7,43]);
        testing(625, [2,5,8,34,624]);
        testing(5, [3,4]);
        testing(7100, [2,3,5,119,7099]);
        testing(123456, [1,2,7,29,496,123455]);
        testing(1234567, [2,8,32,1571,1234566]);
        testing(7654321, [6, 10, 69, 3912, 7654320]);
        testing(7654322, [1, 4, 11, 69, 3912, 7654321]);
        testing(76, [1, 2, 5, 11, 75]);
        testing(2, null);
        testing(7, [2, 3, 6]);
        testing(5575, [ 1, 2, 3, 5, 6, 7, 105, 5574 ]); 
    });

    function randint(a:number, b:number) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    //...............
    function decomposeAuxKUR(nb:number, rac:number):null|number[] {
        if (nb == 0) return [];
        let i = rac;
        let l: null | number[] = null;
        while (i >= ~~Math.sqrt(nb / 2.0) + 1) {
            let diff = nb - i * i;
            let r = ~~Math.sqrt(diff);
            l = decomposeAuxKUR(diff, r);
            if (l != null) {
                l.push(i);
                return l;
            }
            i--;
        }
        return l;
    }
    function decomposeKUR(n:number):null|number[] {
        return decomposeAuxKUR(n * n, ~~Math.sqrt(n * n - 1));
    }
  
    it("Random tests", function() {
        for (let i = 0; i < 50; i++) {
            let n = randint(1000, 10000);
            let sol = decomposeKUR(n);
            testing(n, sol);
        }
    });
});
