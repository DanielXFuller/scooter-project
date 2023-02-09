class User {
  // User code here

  //starting with basic constructor to set the attributes when the user is registered
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }


  //login function used to see if somone enters the correct password
  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
    } else {
      throw new Error('Incorrect password');
    }
  }


  //sets loggedIn boolean to false when the user logs out
  logout() {
    this.loggedIn = false;
  }
}

module.exports = User
