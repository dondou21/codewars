function validPhoneNumber(phoneNumber){
  let checker1 = phoneNumber.split('-');
  let checker2 = phoneNumber.split(' ');
  let checker3 = phoneNumber.split('');
  return (checker1.length === 2 && checker2.length === 2) && checker3.length === 14;
}
