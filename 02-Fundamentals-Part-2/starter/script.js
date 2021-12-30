'use strict';
/*

let ableToDrive = false;
const passTest = true;

if (passTest) ableToDrive = true;
if (ableToDrive) console.log('aa');


// function declaration
function createGraph(nodes,edges){
    const graph = `Your graph has ${nodes} nodes and ${edges} edges.`;  
    return graph;
}

console.log(createGraph(1,1));

// function expression

const calcAge = function (birthyear){
    return 2021-birthyear;
}

const age2 = calcAge(1999);
console.log(age2);

// arrow function
const calcAge3 = birthyear => 2037-birthyear;
console.log(calcAge3(1989))


const yearsForRetirement = (birthyear,first_name) => {
    const age = 2021-birthyear;
    const ageRetirement = 65-age;

    return `${first_name} retires in ${ageRetirement} years.`;
} 


console.log(yearsForRetirement(1999,'maauro'));



//Coding Challenge 

const calcAverage = (score1,score2,score3) => {
    //console.log((score1+score2+score3)/3);
    return (score1+score2+score3)/3;
}


function checkWinner(avrg1,avrg2){
    if (avrg1 >= avrg2*2){
        console.log(`The winner is ${avrg1} Dolphin team.`);

    }else if (avrg2 >= avrg1*2){
        console.log(`The winner is ${avrg2} Koala team.`);
    }
    else{
        console.log('No winner.');
    }
}

checkWinner(calcAverage(44,23,71),calcAverage(65,54,49));
checkWinner(calcAverage(85,54,41),calcAverage(23,34,27));


//arrays

const years = [1945,2567,35767,555];

console.log(years)

const names = new Array('adsdf','fdfdfdff',1);
console.log(names);
console.log(names.length)

years.push(90);
console.log(years);
years.unshift(0); //push element start of array
console.log(years);
years.pop();
console.log(years);

//delete star element of array
years.shift();
console.log(years.indexOf(2567));
//true or false if the element whether in array
years.includes(1945);


const mauricio = {
    age:14,
    height:1.75,
    firstName:'mauri',
    lastName:'diaz',
    friends:['juan','lau','jose']                                                                                                                                                                                                                                                                              
}
console.log(mauricio.age,mauricio['height']);

const interestedIn = prompt("What do you want to knot about me? age,Firstname, lastname?");

console.log(mauricio[interestedIn]);

console.log(`${mauricio.firstName} has ${mauricio.friends.length} and his bestfriend 
is called ${mauricio.friends[0]} `);



const mauricio = {
    birthYear:1999,
    height:1.75,
    firstName:'mauri',
    lastName:'diaz',
    friends:['juan','lau','jose'],
    hasDriverLicense:false,
    //calcAge: function(birthyear){
    //    return 2021-birthyear;
    //}

    //calcAge: function(){
    //    return 2021-this.birthYear;
    //}
    calcAge: function(){
        this.age = 2021-this.birthYear;
        return this.age;
    }
}

//console.log(calcAge.calcAge(1999));
//console.log(mauricio['calcAge'](1999));
//console.log(mauricio.calcAge());

console.log(`${mauricio.firstName} is a ${mauricio.calcAge()}, and he has
 ${mauricio.hasDriverLicense ? 'a':'no'} driver license.`)

 
//Coding challenge #3   

const Mark = {
    mass:78,
    height:1.69,
    firstName:'mark',
    lastName:'miller',
    calcBMI: function(){
        this.BMI = this.mass/(this.height**2);
        return this.BMI;
    }
}


const John = {
    mass:92,
    height:1.95,
    firstName:'John',
    lastName:'Smith',
    calcBMI: function(){
        this.BMI = this.mass/(this.height**2);
        return this.BMI;
    }
}

if (John.calcBMI() > Mark.calcBMI()){
    console.log(`${John.firstName} ${John.lastName} BMI (${John.BMI}) is higher than
    ${Mark.firstName} ${Mark.lastName} BMI (${Mark.BMI}) `)
}else{
    console.log(`${Mark.firstName} ${Mark.lastName} BMI (${Mark.BMI}) is higher than
    ${John.firstName} ${John.lastName} BMI (${John.BMI}) `)
}


for (let x=1;x<=10;x++){
    console.log(`Repetition number ${x}.`)
}
*/

const years = [1945,2567,'asa',35767,555];
const type_years = [];

//for (let i=0;i<years.length;i++){
//    console.log(years[i],typeof years[i]);
//    type_years.push(typeof years[i]);
//}

//continue and break

for (let i=0;i<years.length;i++){
    if (typeof years[i] === 'string') break;
    //console.log(years[i],typeof years[i]);
    type_years.push(typeof years[i]);
}

let x = 0;
while(x <=10){
    console.log("sdsd");
    x++; 

}