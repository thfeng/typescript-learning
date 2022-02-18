/*
 * @Author: Tianhao Feng
 * @Date: 2022-02-16 22:45:02
 * @LastEditTime: 2022-02-17 17:33:35
 * @FilePath: \typescript\typescript-learning\src\5-function.ts
 * @Description: 
 */

interface Add1{
	(x: number, y: number): number
}
const add1: Add = (x, y) => { return x + y }

add1(1, 2)
add1(1, 2, 3)

function add2(x: number, y?: number) {
  return y ? x + y : x;
}

function add3(x: number, y = 0, z: number, n = 1) {
  return x + y + z + n;
}

add3(1, undefined, 2)

function add4(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}

add3(1, 2, 3, 4)


function add5(...rest: number[]): number;
function add5(...rest: string[]): string;
function add5(...rest: any[]): any {
  const first = rest[0];
  if (typeof first === 'string') {
    return rest.join(' ');
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur);
  }
}

console.log(add5('a', 'b', 'c'))
console.log(add5(1, 2, 3, 4))