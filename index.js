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
let num = 70;
function pwr() {
  return Math.pow(2, 6);
}
console.log(`The number ${pwr()} is the power of 2 nearest to ${num}.`);
