/*
 * @Author: Tianhao Feng
 * @Date: 2022-02-16 22:56:30
 * @LastEditTime: 2022-02-18 11:07:06
 * @FilePath: \typescript\typescript-learning\src\3-advanceTypes.ts
 * @Description: advance types
 */
console.log('********* 3-advance types *********');

const bar1: number|string = 1;
const bar1: number|string = 'a';

interface Bus {
  run(): void
}

interface Car {
  stop(): void
}

const vehicle: Bus & Car = {
  run(){},
  stop(){}
};

// 对象联合类型
interface IDog {
  run(): void
  eat(): void
}

interface IBird {
  fly(): void
  eat(): void
}

class Dog implements IDog {
  run(): void {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
}

class Bird implements IBird {
  fly(): void {
    throw new Error("Method not implemented.");
  }
  eat(): void {
    throw new Error("Method not implemented.");
  }
}

function getPet(pet: Bird | Dog) {
  pet.eat();
  pet.fly(); //类型“Dog | Bird”上不存在属性“fly”。类型“Dog”上不存在属性“fly”。
  pet.run(); //类型“Dog | Bird”上不存在属性“run”。类型“Bird”上不存在属性“run”。
}

//类型保护区块
interface IDog2 {
  type: 'dog'
  run(): void
  eat(): void
}

interface IBird2 {
  type: 'bird'
  fly(): void
  eat(): void
}

function getPet2(pet: IBird2 | IDog2) {
  switch(pet.type) {
    case 'dog':
      pet.run();
      break;
    case 'bird':
      pet.fly();
      break;
  }
}

//隐患
//当新加入一个类型，必须保证在getPet中有相应的实现
interface IFish2 {
	type: 'fish'
	swim(): void
}

function getPet3(pet: IBird2 | IDog2 | IFish2) {
  switch(pet.type) {
    case 'dog':
      return pet.run();
    case 'bird':
      return pet.fly();
    default:
      return ((e: never) => { throw new Error(e)})(pet);
  }
}