function isValidFirstName(firstName) {
  return firstName != null && /^[A-Za-z]+$/.test(firstName) && firstName.length <= 30;
}

function isValidLastName(lastName) {
  return lastName != null && /^[A-Za-z]+$/.test(lastName) && lastName.length <= 50;
}

function isValidDOB(dob) {
  return /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/.test(dob);
}

module.exports = {
  isValidFirstName,
  isValidLastName,
  isValidDOB,
};