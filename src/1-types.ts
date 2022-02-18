/*
 * @Author: Tianhao Feng
 * @Date: 2022-02-16 12:01:07
 * @LastEditTime: 2022-02-18 11:07:08
 * @FilePath: \typescript\typescript-learning\src\1-types.ts
 * @Description: 
 */
console.log('********* 1-types *********');

const anExampleVariable:string = "Hello World"
console.log(anExampleVariable)
// console.log(anExampleVariable instanceof String)

const t: [number, string] = [8, 'eight'];
t.push('abc');
// console.log(t[2]);

const error = () => {
    throw new Error('error');
}

const foo = () => {
	while(true) {}
}