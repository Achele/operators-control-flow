// QUESTION 3
const scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
const socialScience = "Accounting, Commerce, Marketing, Geography";
const artSubjects = "Government, Economics, Literature, History";
const generalSubjects = "English, Mathematics";
let classGroup = "Art";

if (classGroup == "Art") {
  console.log(
    `You will be taking the following subjects: ${artSubjects}, ${generalSubjects}`
  );
} else if (classGroup == "Science") {
  console.log(
    `You will be taking the following subjects: ${scienceSubjects}, ${generalSubjects}`
  );
} else if (classGroup == "Social science") {
  console.log(
    `You will be taking the following subjects: ${socialScience}, ${generalSubjects}`
  );
} else {
  console.log(`You will be taking the following subjects: ${generalSubjects}`);
}

// QUESTION 5
// PSUEDO CODE
/* initialize num and use a for loop to iterate through it, 
- find the power of 2 nearest to num
- check if power2 is less than num
-  the resulting ans is stored to pwr
*/
let num;
let pwr;

function powerOfTwo(num) {
  for (let i = 0; i < num; i++) {
    let power2 = 2 ** i;
    if (power2 < num || num - power2 > power2 * 2 - num) {
      pwr = power2;
    }
  }
  console.log(`The number ${pwr} is the power of 2 nearest to ${num}`);
}

console.log(powerOfTwo(40));
