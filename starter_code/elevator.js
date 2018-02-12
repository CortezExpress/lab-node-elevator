class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "";
    this.intervalId;
    this.waitingList = [];
    this.passenger = [];
  }

  start() { 
  this.intervalId = setInterval(() =>{
    this.update();
  } 1000);
  }

  stop() { 
    clearInterval(this.intervalId);
  }
  update() {
    this.log();
 

 
    
    if (this.floor > this.requests[0]){
      this.floorUp();
    }else{
      this.floorDown();
    }
   }
  _passengersEnter(person) {
    if (this.waitingList.includes(this.floor)){
      this.passenger.push(person);
      for(var i = this.waitingList.length - 1; i >= 0; i--) {
    if(this.waitingList[i] === this.floor) {
       this.waitingList.splice(i, 1);
    }
    if (this.requests[i] === this.floor) {
      this.requests.splice(i,1);
    }
}
}
   }
  _passengersLeave() { 
    if (this.passenger.includes(this.floor)) {
      for(var i = this.passenger.length - 1; i >= 0; i--) {
        if(this.passenger[i] === this.floor) {
           this.passenger.splice(i, 1);
        }
    }
  }



  floorUp() {
    if (this.floor < this.MAXFLOOR){
      console.log("hi")
      this.direction = 'up';
      this.floor++;
    }
   }
  floorDown() {
    if (this.floor > 0){
      this.direction = 'down';
      this.floor--;
    }
   }

  //  In the Elevator class, it's time to write the code for the
//  call method. This method should receive a person object and add it 
//  as a request into the elevator’s queue.
  call(person) {
    this.waitingList.push(this.person)
    this.requests.push(person.originFloor);
   }
  log() {
    console.log(this.direction);
    console.log(`Direction: ${this.direction} | Floor:${this.floor}`);
   }
}

module.exports = Elevator;
