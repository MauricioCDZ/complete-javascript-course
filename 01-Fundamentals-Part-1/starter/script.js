/*
let js = 'Amazing';
if (js === 'Amazing') alert ('Javascript is amazing');
console.log(40+12-1);
console.log('mauricio');
console.log(43)
*/
//let firstName = "mauro";

// console.log(firstName)

// console.log(typeof firstName);

// const dateBirth = 1999;
// dateBirth = 2000; error 

//const now  = 2022;
//const ageDann = now - 1999;
//const ageLau = now - 1992;

//console.log(ageDann, ageLau);


let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let bmiMark = markMass / (markHeight**2)
let bmiJohn = johnMass / (johnHeight**2)

console.log(bmiMark > bmiJohn)

markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

bmiMark = markMass / (markHeight**2)
bmiJohn = johnMass / (johnHeight**2)

console.log(bmiMark > bmiJohn)
if (bmiMark > bmiJohn){
    console.log(`Mark's bmi ${bmiMark} is higher than John's bmi ${bmiJohn}`)
}else{
    console.log(`John's bmi ${bmiJohn} is higher than Mark's bmi ${bmiMark}`)
}


const mauricio = `I'm ${markHeight}`;

console.log(mauricio)

const age = 9;

if (age >= 18){
    console.log(`You can drive now`)
}else{
    console.log(`You cannot drive now,\n\ you have to wait ${18-age} years yet`)
}



// const inputYear = '1999';
// console.log(Number(inputYear)+1);

// console.log(String(2344))

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('ddd'));
// console.log(Boolean(''));

//const favorite = Number(prompt("Whats your favorite number?"));
//console.log(favorite);

// const hasDriverLicense = true;
// const hasGoodVision = true;
// console.log(hasDriverLicense && hasGoodVision); //and
// console.log(hasDriverLicense || hasGoodVision); //or
// console.log(!hasGoodVision)

//const averageDolphins = (96+108+89)/3
//const averageKoalas = (88+91+110)/3

const averageDolphins = (97+112+101)/3
const averageKoalas = (109+95+123)/3

if (averageDolphins > averageKoalas && averageDolphins >= 100){
    console.log(`Dolphines are the winners with (${averageDolphins}) average`);
}else if (averageKoalas > averageKoalas && averageKoalas >= 100){
    console.log(`Koalas are the winners with (${averageKoalas}) average`);
}else{
    if (averageKoalas === averageDolphins && averageDolphins >= 100 && averageKoalas >=100){
        console.log(`Draw`);
    }
    else{
        console.log(`No winners`);
    }
    
}



const day = 'monday';

switch (day){
    case 'monday':
        console.log('es lunesss');
        break;
    case 'tuesday':
        console.log('time study');
        break;
    case 'wednesday':
        console.log('go to practice sport');
        break;
    case 'thursday':
    case 'friday':
        console.log('go to the bank :D')
        break;
    case 'sunday':
        console.log('poooool');
        break;
    default:
        console.log('not a valid day!')

} 
//CONDICION TERNARIA
const age = 23;

age >= 18 ? console.log(`I'm an adult`) : console.log('Im a child');

const drink = age >= 18 ? 'adult':'child';
console.log(drink)

console.log(`I like to drink ${age >= 18 ? 'beer':'water'}`);
 


const bill = 275;
const tip =  bill >=50 && bill <=300 ? bill*0.15 : bill*0.2;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill+tip}`);