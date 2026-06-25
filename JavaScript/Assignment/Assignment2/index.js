// Q1. s
function findGrades(M) {
  let grade;

  switch (true) {
    case (M <= 10):
      grade = "E";
      break;
    case (M <= 20):
      grade = "D";
      break;
    case (M <= 30):
      grade = "C";
      break;
    case (M <= 40):
      grade = "B";
      break;
    case (M <= 50):
      grade = "A";
      break;
    default:
      grade = "Invalid";
  }

  return grade;
}

console.log("Grade (35):", findGrades(35));


// Q2. 
function getValue(C) {
  switch (C) {
    case 'P':
    case 'p':
      return "PrepBytes";

    case 'Z':
    case 'z':
      return "Zenith";

    case 'E':
    case 'e':
      return "Expert Coder";

    case 'D':
    case 'd':
      return "Data Structure";

    default:
      return "Invalid";
  }
}

console.log("Get Value (E):", getValue('E'));


// Q3. 
function Max_out_of_three(A, B, C) {
  if (A === B && B === C) {
    return -1;
  }
  return Math.max(A, B, C);
}

console.log("Max of Three (2,5,4):", Max_out_of_three(2, 5, 4));


// Q4. 
function findSndSmallest(X, Y, Z) {
  let arr = [X, Y, Z];
  arr.sort((a, b) => a - b);
  return arr[1];
}

console.log("Second Smallest (2,9,23):", findSndSmallest(2, 9, 23));


// Q5. 
function Triangle_Check(A, B, C) {
  if (A < 90 && B < 90 && C < 90) {
    return "acute";
  } else {
    return "obtuse";
  }
}

console.log("Triangle (60,100,20):", Triangle_Check(60, 100, 20));


// OPTIONAL: 
let output = "";

output += "Grade (35): " + findGrades(35) + "\n";
output += "Get Value (E): " + getValue('E') + "\n";
output += "Max of Three: " + Max_out_of_three(2, 5, 4) + "\n";
output += "Second Smallest: " + findSndSmallest(2, 9, 23) + "\n";
output += "Triangle Check: " + Triangle_Check(60, 100, 20) + "\n";

document.getElementById("output").innerText = output;