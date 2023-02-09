class Scooter{
  // scooter code here
  static nextSerial = 1;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

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

  dock(station) {
    this.station = station;
    this.user = null;
  }

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


}


module.exports = Scooter
