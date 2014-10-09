function Car(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.state = "off";
  this.previous_owners = [];
  this.current_owner = "manufacturer";
  this.passengers = [];
}

Car.prototype.sale = function(newOwner){
  if (this.previous_owners.indexOf(this.current_owner) === -1) {
      this.previous_owners.push(this.current_owner);
  }
  this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = newColor;
};

Car.prototype.start = function() {
  if(this.state === "off") {
    this.state = "on";
  }
};

Car.prototype.off = function() {
  if(this.state === "on") {
    this.state = "off";
  }
};

Car.prototype.driveTo = function (destination) {
  if(this.state === "on") {
    console.log("Driving to " + destination);
  }else {
    console.log("Your car isn't on dummy");
  }
};

Car.prototype.park = function () {
  if(this.state === "off") {
    console.log("parked!!");
  }else {
    console.log("Your car is on dummy");
  }
};

Car.prototype.pick_up = function(name) {
  if(this.state === "on") {
    console.log("Driving to pick up " + name );
    this.passengers.push(name);
  }else {
    console.log("Your car is off dummy");
  }
};

Car.prototype.dropOff = function(name) {
  if(this.state === "on" && this.passengers.indexOf(name) > -1 ) {
    var index = this.passengers.indexOf(name);
    this.passengers.splice(index, 1);
  }else {
    console.log("Your car is off dummy");
  }
};
module.exports=Car;