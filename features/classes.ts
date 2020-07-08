class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  // child class, inherits Vehicle through "extends"
  drive(): void {
    console.log("vroom");
  }
}

const car = new Car();
car.honk();
car.drive();

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
