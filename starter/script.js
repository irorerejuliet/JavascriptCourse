// let juliet = 'Beautiful';
// console.log(40 + 8 + 23);
// console.log('JUliet');
// console.log(23);

// let firstName = "Annable";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name convention
// let juliet_matilda = "jM"
// let $function = 27;

// let person = "Juliet";
// let pI = 3.1415;


// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 = 'pogrammer';
// let job2 = 'teacher';

// console.log(myFirstJob)




// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// let iMustLearnJavascript = true;
// console.log(iMustLearnJavascript);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Anne');

// javascriptIsFun = 'YES!'
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);


///These are math operator
// const now = 2037;
// const ageJuliet = now - 1998;
// const ageSarah = now - 2018;
// console.log(ageJuliet, ageSarah);

// console.log(ageJuliet * 2, ageJuliet / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 

// const firstName = 'Juliet';
// const  lastName = 'Irorere';
// console.log(firstName + ' ' + lastName);

//These are assignment operators
// let x = 10 + 5; //15
// x += 10; // is the same thimg as x = x + 10 = 25
// x *= 4; //is the same thing as x = x * 4 = 100
// x++;  // x = x + 1
// console.log(x);



// comparison operator
// console.log(ageJuliet > ageSarah);  // <, >, >=, <=,
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >=18;

// console.log(now - 1998 > now - 2018);

// template litrals
// const firstName = 'JUliet';
// const job = 'Developer';
// const birthYear = 1998;
// const year = 2037;

// const juliet = "I'm" + ' ' + firstName + ', a' + ' ' + (year - birthYear) + 'year old' + ' ' + job + '!';
// console.log(juliet);

// const julietNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
// console.log(julietNew);

// const firstName = "Annable";
// const job = "Banker";
// const address = "her office is close to the cafe";
// const birthYear = 1996;
// const year = 2025;

// const AnnableNew = `This is ${firstName}, a ${job}, ${address} and she is ${year - birthYear} years old!` 
// console.log(AnnableNew);

// if statement
// const age = 15;
// if (age >= 18) {
//     console.log('Sarah can start driving license');
// }else{
//     const yearsLeft = 18 -age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :`);
    
// }


// const birthYear = 1991;

// let century
// if(birthYear <=2000){
//      century =20;
// }else {
//      century = 21
// }
// console.log(century)

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear) + 18)

// console.log(Number('Jonas'));

// console.log(String(23));

// // type coercion
// console.log('I  am' + 23  + "years old");
// console.log('23' - '10' - 3 );
// console.log('23' / '2');
 

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Juliet'));
// console.log(Boolean({}));

// const money = 0;
// if(money){
//     console.log("Don't spend it all"); 
// }else {
//     console.log('You should get a job');
// }

// let height = 123;
// if(height){
//     console.log('YAY! Height is defined');
// } else{
//     console.log('Height is UNDEFINED');
// }



// const age = 18;
// if (age ===18) console.log('You just become an adult : D(Strict)');
// if (age === 18) console.log("You just become an adult : D (loose)");


// const favorite = prompt("What your favorite number?");
// console.log(favorite);
// console.log(typeof favorite);

// Boolean logic
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B
// console.log(hasDriversLicense && hasDriversLicense);
// console.log(hasDriversLicense || hasDriversLicense);
// console.log(!hasDriversLicense);


// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision){
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drve...');
    
// }

// const isTired = false // c 
// console.log(hasDriversLicense && hasGoodVision && isTired);


// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drve...");
// }

// switch statement
// const day = 'monday';

switch(day){
  case 'monday':
    console.log('Plan course structire');
    console.log('Go to codng meetuo');
    break;
  case 'tuesday':
    console.log('Prepare theaory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'Friday':
      console.log('Record videos');
      break;
  case 'Saturday':
  case 'Sunday':
          console.log('Enjoy the weekend  :D');
          break;
          default:
            console.log('Not a valid day!');                
}

const age = 23;
// age >= 18  ? console.log('i like to drink wine') : console.log('i like to drink water');

//  const drink =  age >= 18 ? 'wine' : 'water';
//   console.log(drink);
  
//   let drink2;
//   if(age >= 18){
//     drink2 = 'wine';
//   }else{
//     drink2 = 'water';
//   }
//   console.log(drink2);
  
//  console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);
 