
// A person should have three attributes:

// A name
// A originFloor: the floor they are in when they call the elevator
// A destinationFloor: the floor they intend to go to

class Person {
  constructor(name, originFloor, destinationFloor){
    this.name = name;
    this.originFloor = originFloor;
    this.destinationFloor = destinationFloor;
  }
}

module.exports = Person;



// Now, we need to think about what happens when a person ‘calls’ the 
// elevator. In the Elevator class, it's time to write the code for the
//  call method. This method should receive a person object and add it 
//  as a request into the elevator’s queue.

// Add the whole person object to the requests array. The elevator 
// will need all that information later.

// In later iterations, the elevator will process the list of requests 
//  it travels up and down. We will need a list of floors that the 
//  elevator should serve in the update method.