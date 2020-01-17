//Single Responsibility Principle 
//A class should have one, and only one, reason to change.
//Good


class UserAuth {
  constructor(user) {
    this.user;
  }

  verifyCredentials() {
    //...
  }
}


class UserSettingsGood {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {
    if {
      this.auth.verifyCredentials())
      //..
    }
}

}

