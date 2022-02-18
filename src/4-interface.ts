/*
 * @Author: Tianhao Feng
 * @Date: 2022-02-16 22:02:29
 * @LastEditTime: 2022-02-17 17:41:42
 * @FilePath: \typescript\typescript-learning\src\4-interface.ts
 * @Description: 
 */

console.log('********* 4-interface *********');

interface User {
  id: number;
  name: string;
}

interface Result {
  data: User[];
}

function render(result: Result) {
  result.data.forEach((item) => {
    console.log(item.id, item.name);
  })
}

const result = {
  data: [
    {id: 1, name: 'tianhao', dep: 'ems'},
    {id: 2, name: 'guojie'},
    {id: 3, name: 'yangqun'},
  ]
}

render(result);

render({
  data: [
    {id: 1, name: 'tianhao', dep: 'ems'},
    {id: 2, name: 'guojie'},
    {id: 3, name: 'yangqun'},
  ]
})

interface IArray {
	[index: number]: string
}

const arr: IArray = ['a', 'b'];
const arr1: string[] = ['a', 'b'];

interface IObject {
  [k:string]: string
  // y: number
  [i:number]: string
}

const user:IObject = {name: 'thfneg'};

interface Add{
	(x: number, y: number): number
}

// const Add: (x: number, y: number) => number

// type Add = (x: number, y: number) => number

const add: Add = (x, y) => { return x + y }

interface Component{
	(): void
	version: string
	render():void
}

let component: Component = (() => {}) as Component
component.version = '1.0'
component.render = () => {}

interface Animal {
  name: string
  leg: number
}

interface Ant extends Animal {
  walk(): void
}

const ant: Ant = {
  name: 'ant',
  leg: 4,
  walk() {
    console.log('Ant is walking')
  }
}

//Class类型接口
interface Team {
  // new (name: string): void
  name: string
  work(): void
}

class EMS implements Team {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  work(): void {
    throw new Error("Method not implemented.");
  } 
}

//实例化接口
interface CallMeWithNewToGetString {
  new (): string;
}

declare const Foo: CallMeWithNewToGetString;
const bar = new Foo(); // bar 被推断为 string 类型

//接口继承接口
interface DS extends Team{
  department: string
}

interface PaoMo {
  members: string[]
}

interface TH extends DS, PaoMo {}

const thfeng: TH = {
  department: 'ems',
  name: 'thfeng',
  work(){},
  members: ['thfeng', 'yangqun', 'dong', 'honghong']
}

//接口继承类
class Human {
  birth: string = '2021-02-17'
  protected age: number = 0
  private id: string = '123'

  getId() {
    return this.id;
  }
}

interface Man extends Human {
  sex: string
}

class Boy implements Man {
  id: string = '123'
  sex: string = 'male';
  birth: string = '2021-02-17';
  protected age: number = 0;
  getId(): string {
    throw new Error("Method not implemented.");
  }
}