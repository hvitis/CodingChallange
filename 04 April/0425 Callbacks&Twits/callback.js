function greeting(name) {
  console.log(`Hello ${name}, welcome to Scotch!`);
}

function introduction(firstName, lastName, callback) {
  const fullName = `${firstName} ${lastName}`;

  callback(fullName);
}

introduction("Chris", "Nwamba", greeting);
