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
  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      this.station = null;
      this.user = user;
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
  async recharge() {
    console.log('Starting charge');
    
    await new Promise(resolve => setTimeout(resolve, 1000)); // wait 1 seconds
    this.charge = 100

    console.log('Charge complete'); 
  }

  //repair function repairs the scooter in intervals of 5 seconds
  async requestRepair() {
    await new Promise(resolve => setTimeout(resolve, 5000)); // wait 5 seconds
    this.isBroken = false;
}


}


module.exports = Scooter
