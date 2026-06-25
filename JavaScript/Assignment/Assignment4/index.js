// Q1 Find Product

function Find_Prod(arr){

    let product = 1;

    for(let i=0;i<arr.length;i++){
        product *= arr[i];
    }

    return product;
}



// Q2 Find Sum

function Find_Sum(arr){

    let sum = 0;

    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }

    return sum;
}



// Q3 Count Occurrences

function findCount(arr,K){

    let count = 0;

    for(let i=0;i<arr.length;i++){

        if(arr[i] === K)
            count++;
    }

    return count;
}



// Q4 Even Odd

function findEvenOdd(arr){

    let even = 0;
    let odd = 0;


    for(let num of arr){

        if(num % 2 === 0)
            even += num;

        else
            odd += num;
    }


    return [even,odd];
}



// Q5 Find Number Present or Not

function Find_Num(arr,M){

    if(arr.includes(M))
        return "YES";

    return "NO";
}



// Q6 Higher Age

function highAge(arr){

    let result = [];

    for(let age of arr){

        if(age >= 18)
            result.push(age);
    }


    return result;
}



// Q7 Increment Array Elements

function Inc_Arr(arr){

    let result=[];

    for(let num of arr){

        result.push(num+1);
    }


    return result;
}



// Q8 Pass or Fail

function isAllPass(arr){

    for(let marks of arr){

        if(marks < 32)
            return "NO";
    }


    return "YES";
}



// Q9 Unique Color Shirt

function uniqueColor(arr){

    let count={};


    for(let color of arr){

        count[color]=(count[color] || 0)+1;

    }


    let unique=0;


    for(let key in count){

        if(count[key]===1)
            unique++;

    }


    return unique;
}



// Q10 Min and Max

function Min_Max(arr){

    let min = arr[0];
    let max = arr[0];


    for(let num of arr){

        if(num < min)
            min=num;


        if(num > max)
            max=num;
    }


    return [min,max];
}




// OUTPUT DISPLAY


let output = `


<h2>Q1 Find Product</h2>
${Find_Prod([1,2,3,4,5])}



<h2>Q2 Find Sum</h2>
${Find_Sum([1,2,3,4,5])}



<h2>Q3 Count Occurrences</h2>
${findCount([3,3,1,2],3)}



<h2>Q4 Even Odd Sum</h2>
${findEvenOdd([1,2,3,4,5,6,7])}



<h2>Q5 Find Number</h2>
${Find_Num([1,2,3,4,5],2)}



<h2>Q6 Higher Age</h2>
${highAge([11,23,3,45,72,68])}



<h2>Q7 Increment Array</h2>
${Inc_Arr([1,2,3,4,5])}



<h2>Q8 Pass or Fail</h2>
${isAllPass([13,89,45,98,67,45,54])}



<h2>Q9 Unique Color Shirt</h2>
${uniqueColor([3,2,4,1,2,3])}



<h2>Q10 Min and Max</h2>
${Min_Max([33,11,44,66,22,77])}



`;



document.getElementById("output").innerHTML = output;