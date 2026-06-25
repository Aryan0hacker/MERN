// Q1. 
function AddTwoNumbers(A, B) {
    return A + B;
}

// Q2. 
function Is_Valid(A, B) {
    return (A < 10 && A > B);
}

// Q3. 
function Check(A, B) {
    return (
        (A % 10 === 0 && B % 10 === 0) ||
        (A % 10 !== 0 && B % 10 !== 0) ||
        (A % 10 === 0 || B % 10 === 0)
    );
}

// Q4. 
function First_Digit(N) {
    return Math.floor(N / 1000);
}

// Q5. 
function Last_Digit(N) {
    return N % 10;
}

// Q6. 
function Find_the_remainder(A, B) {
    return B % A;
}

// Q7. 
function Multiply_two_number(A, B) {
    return A * B;
}

// Q8. 
function Sum(A, B, C) {
    return A + B + C;
}

function Average(A, B, C) {
    return (A + B + C) / 3;
}



console.log("Q1:", AddTwoNumbers(2, 5));
console.log("Q2:", Is_Valid(5, 3));
console.log("Q3:", Check(12, 20));
console.log("Q4:", First_Digit(4567));
console.log("Q5:", Last_Digit(4567));
console.log("Q6:", Find_the_remainder(2, 9));
console.log("Q7:", Multiply_two_number(2, 5));
console.log("Q8:", Sum(50, 20, 100), Average(50, 20, 100));