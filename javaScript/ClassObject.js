
class Dada{
    constructor() {
        console.log("Mehal")
    }
}
class Papa extends Dada{

   
    constructor() {
        super();
        console.log("Samraajya")
    }

}

class Child extends Papa{
    constructor() {
        super();
        console.log("Village")
    }

}
// let d = new Dada();
// console.log("\n");
// let p = new Papa();
// console.log("\n");
// let c = new Child();
// console.log("\n");


// console.log(c);


//-----------------------

// let obj = {
//     "a": 1,
//     "b": 2
// }

// console.log(obj);

// let human = {
//     "gen": "male"
// }
// let robo = {
//     "type": "S2"
// }

// robo.__proto__ = human; // set protoType

// console
// 1) robo
// 2) robo.gen
// 3) obj.name



class Animal {
    constructor(name){
        console.log('Object is Created....');
        // console.log(name);
        this.name = name;
    }
    Human() {
        console.log('Inshan hu me ');
        
    }
    Ai() {
        console.log('Robot Hu me ');
    }
}

class Tiger extends Animal{

    fun(a=5){
        super.Ai();
        console.log("Printing the a variable: ", a);
        
    }


}

// let obj = new Animal("Chinmay");

// let oj = new Tiger();

// oj.fun();

// console.log(oj);

// console.log(obj);

// obj.Human();
// obj.Ai();

// console
// 1) obj.AI()
// 2) obj.Human()
// 3) b instanceof breakfast



class food {

    eats() {
        console.log("We are eating food");
        
    }
}

class breakfast{

    eats() {
        console.log("bukh nahi lag rahi hai");
        
    }

}

let f = new food();
//  f = new food();
let b = new breakfast();

console.log(f.eats())
console.log(b.eats())

