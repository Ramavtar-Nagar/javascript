// constructer function

function Vehicle(name, color, wheels) {
    this.name = name;
    this.color = color
    this.wheels = wheels;

    this.getDetails = function () {
        console.log(`
        The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels.
        `)
    };
}

// we can also extract this getdetails fn and make it a prototypal property 
Vehicle.prototype.getDetails = function () {
    console.log(`
    The ${this.name} is ${this.color} in color.
    It has ${this.wheels} wheels.
    `)
};

// const car = new Vehicle('Car', 'blue', 4);
// car.getDetails();



// classes in js...

// 2.=> class expressions
// const Vehicle = class
// {
//     // like this


     
// }


// 1.=> class declaration
class VehicleCl{

    // public properties
    name;
    color;
    wheels;
    // private properties
    #regNumber

    // constructor function
    constructor(name, color, wheels, number){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number;
    }
    
    // methods
    // public method
    getDetails(){
        console.log(`
        The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels.
        Registration number is: ${this.#getNumber(this.#regNumber)}
        `)
    }
    // private method
    #getNumber(number){
        return number;
    }
}

const veh1 = new VehicleCl("BMW - Car", "blue", 4, 9496);
// console.log(veh1);
// veh1.getDetails();
// console.log(veh1.hasOwnProperty("name"));

veh1.name = "car";
// // veh1.getDetails();
// not accessible as it is a privete field -->
// console.log(veh1.#regNumber);

// inheritance
class Car extends VehicleCl {
    constructor(color, brand, purpose){
        super('car', color, 4);
        this.brand = brand;
        this.purpose = purpose;
    }
}

const car1 = new Car(
    'red',
    'audi',
    'luxury travel'
);

// // car1.getDetails();
// console.log(car1.__proto__);

// inheritance in constructor function
function Truck(color, brand, seats){
    Vehicle.call(this, 'truck', 'Black', '22');
    this.brand = brand;
    this.seats = seats;
}

Truck.prototype = Object.create(Vehicle.prototype);

const truck1 = new Truck('tata', 6);
// // truck1.getDetails();
// console.log(truck1.wheels);
// console.log(truck1);
// console.log(truck1.__proto__);


// getter and setter

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(newDiameter){
        if(newDiameter >= 0){
            this.radius = newDiameter/2;
        }else{
            console.log("Invalid Input");
        }
    }
}


const circle1 = new Circle(5)
console.log(circle1.radius);
console.log(circle1.diameter);
circle1.diameter = 69;
console.log(circle1.radius)