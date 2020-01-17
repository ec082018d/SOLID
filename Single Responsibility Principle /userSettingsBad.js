//Single Responsibility Principle 
//Bad

class UserSettingsBad {
  constructor(user) {
    this.user = user;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      //..
    }
  }

  verifyCredentials() {
    //..
  }
}