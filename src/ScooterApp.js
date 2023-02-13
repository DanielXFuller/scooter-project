const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = {
      "station1": [],
      "station2": [],
      "station3": []
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("Already registered");
    }
    if (age < 18) {
      throw new Error("Too young to register");
    }
    this.registeredUsers[username] = new User(username, password, age);
    console.log(`User ${username} has been registered`);
    return this.registeredUsers[username];
  }

  loginUser(username, password) {
    let user = this.registeredUsers[username];
    if (!user) {
      throw new Error("Username or password is incorrect");
    }
    if (!user.login(password)) {
      throw new Error("Username or password is incorrect");
    } else {
      console.log(`User ${username} has been logged in`);
      return user;
    }
  }
  

  logoutUser(username) {
    if (!this.registeredUsers[username]) {
      throw new Error("No such user is logged in");
    }
    const user = this.registeredUsers[username];
    user.logout();
    console.log(`User ${username} is logged out`);
  }

  createScooter(station) {
    if (!this.stations[station]) {
      throw new Error("No such station");
    }
    const scooter = new Scooter();
    this.stations[station].push(scooter);
    scooter.station = station;
    console.log("Created new scooter");
    return scooter;
  }

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error("No such station");
    }
    if (scooter.station === station) {
      throw new Error("Scooter already at station");
    }
    if (scooter.user) {
      throw new Error("Scooter is rented");
    }
    this.stations[station].push(scooter);
    scooter.dock(station);
    console.log("Scooter is docked");
  }

  rentScooter(scooter, user) {
    if (!this.stations[scooter.station]) {
      throw new Error("No such station");
    }
    if (scooter.user != null) {
      throw new Error("Scooter is already rented");
    }
    if (!this.registeredUsers[user.username]) {
      throw new Error("User is not registered");
    }
    const station = this.stations[scooter.station];
    station.splice(station.indexOf(scooter), 1);
    scooter.rent(user);
    console.log("Scooter is rented");
  }

  print() {
    console.log("List of registered users:");
    for (const username in this.registeredUsers) {
      console.log(`- ${username}`);
    } 
  }
}
module.exports = ScooterApp
