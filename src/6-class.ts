/*
 * @Author: Tianhao Feng
 * @Date: 2022-02-16 23:36:25
 * @LastEditTime: 2022-02-18 10:54:46
 * @FilePath: \typescript\typescript-learning\src\6-class.ts
 * @Description: 
 */
console.log('********* 6-class *********');

class A {
  constructor(bar: string) {
    this.bar = bar;
  }
  bar: string
  foo() {
    return this.bar
  }
}
console.log(A.prototype);
const a: A = new A('a');
console.log(a);

class B extends A {
  constructor(bar: string, num: number) {
    super(bar);
    this.bar = bar;
    this.num = num;
  }

  num: number
}

//成员修饰符
class Demo {
  static project = 'ts'
  host = '127.0.0.1'
  private url = 'https://127.0.0.1:8080'
  protected port = 8080
  readonly protocol = 'https'

  getUrl() {
    return this.url
  }
}
console.log(Demo.project)
const demo = new Demo()
console.log(demo.host, demo.protocol)
console.log(demo.getUrl())

//抽象类
abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void
}
class Horse extends Animal {
  constructor(public name: string) {
    super()
    this.name = name
  }
  sleep(): void {
    console.log('horse sleep')
  }
  run() {
    console.log('run')
  }
}
let horse = new Horse('pony')
horse.eat()
horse.sleep()

class Donkey extends Animal {
  constructor(public name: string) {
    super()
    this.name = name
  }
  sleep(): void {
    console.log('donkey sleep')
  }
}
let donkey = new Donkey('lv')

let animals: Animal[] = [horse, donkey]
animals.forEach(animal => animal.sleep())

//this
class Baby {
  constructor(public name: string) {
    this.name = name
  }
  eat() {
    console.log(this.name, 'eat')
    return this
  }
}

class MyDaughter extends Baby {
  constructor(name: string) {
    super(name)
  }
  cry() {
    console.log(this.name, 'cry')
    return this
  }
}

const myDaughter = new MyDaughter('Xinghan')
myDaughter.cry().eat().cry().eat()