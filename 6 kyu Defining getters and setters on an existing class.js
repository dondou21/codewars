Object.defineProperty(Person.prototype , 'name', {
  get: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  set: function(fullName) {
    let [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
});
