currentDate = new Date();
currentYear = currentDate.getFullYear();
userName = prompt('What is your name?');
lastName = prompt('What is your last name?');
editUserName = `${userName[0].toUpperCase()}${userName.slice(1, userName.length)}`;
editLastName = `${lastName[0].toUpperCase()}${lastName.slice(1, lastName.length)}`;
birthYear = prompt('Write your year of birth.');
age = currentYear - birthYear;

alert(`Hi! ${editLastName} ${editUserName}, your ${age} years old!`);
fiveDigitRequest = prompt('Enter a five-digit number.');
spaceSeparatedValue = fiveDigitRequest.replaceAll('', ' ');
alert(`You entered a number - ${spaceSeparatedValue}`);