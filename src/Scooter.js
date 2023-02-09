class Scooter{
  // scooter code here
  //static serial number means its associated with all instances of the class not just one of them
  static nextSerial = 1;

  //constructor to set the variables to the default values
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  //rent method checks if the scooter has enough charge and isnt broken if so it is rented
  rent() {
    if (this.charge > 20 && !this.isBroken) {
      this.station = null;
      this.user = 'current user'
    } else if (this.charge <= 20) {
      throw new Error('scooter needs to charge');
    } else {
      throw new Error('scooter needs repair');
    }
  }

  //docks the scooter sets user to null and changes the station
  dock(station) {
    this.station = station;
    this.user = null;
  }

  //recharges the scooter in intervals of 1 second
  recharge() {
    let charge = this.charge;
    let interval = setInterval(() => {
      if (charge < 100) {
        charge++;
        console.log('Scooter charge: ${charge}%');
      } else {
        clearInterval(interval)
      }
    }, 1000); 
  }

  //repair function repairs the scooter in intervals of 5 seconds
  requestRepair() {
    let interval = setInterval(() => {
      console.log('Repair completed');
      clearInterval(interval);
      this.isBroken = false;
    }, 5000);
  }


}


module.exports = Scooter
