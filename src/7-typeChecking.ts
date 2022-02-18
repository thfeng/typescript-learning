/*
 * @Author: Tianhao Feng
 * @Date: 2022-02-16 23:53:44
 * @LastEditTime: 2022-02-18 10:26:44
 * @FilePath: \typescript\typescript-learning\src\7-typeChecking.ts
 * @Description: 
 */
console.log('********* 7-type checking *********');
//接口兼容性
interface X1 {
  a: any
  b: any
}
interface Y1 {
  a: any
  b: any
  c: any
}
let x:X1 = {a:1,b:2}
let y:Y1 = {a:1,b:2,c:3}
x = y
// y = x

//函数兼容性
//1.参数个数与类型
type Handler = (a:number, b:number) => void
function hof(handler: Handler) {
  return handler
}
const handler1 = (a:number) => {}
hof(handler1)
const handler2 = (a:number, b:number, c:number) => {}
// hof(handler2)
const handler3 = (a:string, b:string) => {}
// hof(handler3)

//2.有可选参数和剩余参数
let func1 = (p1:number, p2:number) => {}
let func2 = (p1?:number, p2?:number) => {}
let func3 = (p1:number, ...rest:number[]) => {}
//func1兼容func2和func3
func1 = func2
func1 = func3
//func2不兼容func1和func3
// func2 = func1
// func2 = func3 //参数“p1”和“p1” 的类型不兼容。不能将类型“number | undefined”分配给类型“number”。不能将类型“undefined”分配给类型“number”
//func3兼容func1和func2
func3 = func1
func3 = func2

//3.返回值类型
let abc = () => ({id: 1});
let xyz = () => ({id: 1, name: 'xyz'})
abc = xyz
// xyz = abc

//类兼容性
class ABC {
  constructor(private q:number) {}
  id: number = 1
}
class XYZ {
  static s = 1
  constructor(private q:number) {}
  id: number = 1
}
let $abc = new ABC(1)
let $xyz  = new XYZ(1)
// $abc = $xyz
// $xyz = $abc

class AABBCC extends ABC {}
let $aabbcc = new AABBCC(1)
$abc = $aabbcc
$aabbcc = $abc

//泛型兼容性
//泛型接口
interface Type<T> {
  value: T
}
let t1:Type<number> = { value: 1 }
let t2:Type<string> = { value: '1' }
// t1 = t2
// t2 = t1

//泛型函数
let log1 = function <T>(x: T): T {
  console.log(x)
  return x
}
let log2 = function <U>(y: U): U {
  console.log(y)
  return y
}
log1 = log2
log2 = log1

//枚举兼容性
enum Fruit {
  Apple,
  Orange,
  Banana
}
const fruit: Fruit.Apple = 1;
const fruit2: number = Fruit.Banana;

enum Color {
  Red,
  Blue
}
// const color: Color.Red = Fruit.Apple;

// enum Color2 {
//   White = '#fff',
//   Black = '#000'
// }
// const color1: Color2.Black = '#000';

//类型保护区块
class X {
  x: string = 'x'
}

class Y {
  y: number = 1
}

function xy (z: X | Y) {
  if (z instanceof X) {
    console.log(z.x);
  }
  if (z instanceof Y) {
    console.log(z.y);
  }
}

function xy2 (z: X | Y) {
  if ('x' in z) {
    console.log(z.x);
  }
  if ('y' in z) {
    console.log(z.y);
  }
}

function isX(x: any):x is X {
  return x.x !== undefined;
}

function xy3 (z: X | Y) {
  if (isX(z)) {
    console.log(z.x);
  }
}