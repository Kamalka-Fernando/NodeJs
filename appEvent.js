const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log('The tutorial event has occured!!!');
    console.log(num1+num2);
});
eventEmitter.on('app',()=>{
    console.log('Hello chalani!!!');
});
eventEmitter.emit('tutorial',1,4);
eventEmitter.emit('app');

class Person extends EventEmitter{
    constructor(name){
  
        super();
        this._name = name;

    }
    get name(){
        return this._name;
    }
}

let padro = new Person('Chalanika');
let mahe = new Person('Maheshavee');

padro.on('name',()=>{
    console.log('My name is '+ padro.name);
});

mahe.on('name',()=>{
    console.log('My name is '+ mahe.name);
});

padro.emit('name');
mahe.emit('name');