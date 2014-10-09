// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('Car', function(){
  var car1;
  beforeEach(function(){
    // create a new myCar object each time
    car1 = new Car("Civic", "Honda", "1999", "red");
    });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){
      expect(car1.year).to.equal("1999");
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(car1.state).to.equal("off");
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(car1.previous_owners).to.eql([]);
    });
  });

  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){
      expect(car1.current_owner).to.equal("manufacturer");
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(car1.passengers).to.eql([]);
    });
  });

  describe('#sale', function(){

    it('should move currentOwner to previousOwners array', function(){
      var oldOwner = car1.current_owner;
      car1.sale("Ryan");
      expect(car1.previous_owners).to.include(oldOwner);
    });

    it('should update currentOwner with the new owner', function(){
      car1.sale("Ryan");
      expect(car1.current_owner).to.equal("Ryan");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      car1.paint("blue");
      expect(car1.color).to.equal("blue");
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      car1.start();
      expect(car1.state).to.equal("on");
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      car1.start();
      car1.off();
      expect(car1.state).to.equal("off");
    });
  });

  describe("#driveTo", function() {
    it("should print out the destination were going to", function(){
      car1.start();
      car1.driveTo("San Diego");
      expect(car1.state).to.equal("on");
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
      car1.off();
      car1.park();
      expect(car1.state).to.equal("off");
    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      car1.start();
      car1.pick_up("Ryan");
      expect(car1.passengers).to.include("Ryan");
    });

    it('should not modify the passengers array if car is off', function(){
      car1.off();
      car1.pick_up("Ryan");
      expect(car1.passengers).to.eql([]);
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      car1.start();
      car1.pick_up("Ryan");
      car1.dropOff("Ryan");
      expect(car1.passengers).to.eql([]);
    });

    it('should leave passenger in the passengers array if car is off', function(){
      car1.start();
      car1.pick_up("Ryan");
      car1.off();
      car1.dropOff("Ryan");
      expect(car1.passengers).to.include("Ryan");

    });
  });

});


