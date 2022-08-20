const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function  titleCased(){

  //Debug:printArray(newTutorials)

  const newTutorials =tutorials.map(capitalizeFirstWord)
  console.log(newTutorials)
return newTutorials;
}




function capitalizeFirstWord(statement){

    let newStatement = statement.split( ` `);
  //Debug :console.log(`old statement was : "${statement}"`)
  //Debug :console.log(`new statement is : "${newStatement}"`)

    for (var i = 0; i < newStatement.length; i++) {

        newStatement[i] = newStatement[i].charAt(0).toUpperCase() + newStatement[i].substring(1);

//Debu: Console.log(`New statement after capilization is ${newStatement[i]}`);
    }

//Debug :console.log(`New statement after title case `+newStatement.join(` `))
    return newStatement.join(' ');
 }




/*Debug:
const printArray=(myArray)=>{

for(let elem of myArray){

  console.log(elem);
}
}



console.log(capitalizeFirstWord(`Alex is Awesome`))
titleCased();
*/