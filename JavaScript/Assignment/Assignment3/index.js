// Q1 Count Characters
function countCharacters(S) {
    let A = 0;
    let D = 0;

    for(let ch of S){
        if(ch === "A") A++;
        if(ch === "D") D++;
    }

    return [A,D];
}


// Q2 Count Heads
function CountHead(S){

    let count = {};

    for(let ch of S){
        count[ch] = (count[ch] || 0) + 1;
    }

    let result = "";

    Object.keys(count).sort().forEach(ch=>{
        if(count[ch] > 1){
            result += ch + count[ch];
        }
    });

    return result;
}


// Q3 Count Vowels
function Count_Vowel(S){

    let vowels = "aeiouAEIOU";
    let count = 0;

    for(let ch of S){
        if(vowels.includes(ch)){
            count++;
        }
    }

    return count;
}


// Q4 Concatenate Strings
function Concatenate_Strings(S1,S2){

    return S1 + S2;
}


// Q5 Find Length without length()
function findLength(S){

    let count = 0;

    for(let ch of S){
        count++;
    }

    return count;
}


// Q6 Find Winner
function Game_Winner(S){

    let A = 0;
    let D = 0;

    for(let ch of S){

        if(ch==="A")
            A++;

        else if(ch==="D")
            D++;
    }


    if(A>D)
        return "Aditya";

    else if(D>A)
        return "Danish";

    else
        return "Draw";
}


// Q7 Join Strings
function joinStrings(S,P){

    return S+P;

}


// Q8 Palindrome Check
function Plain_Check(S){

    let reverse = "";

    for(let i=S.length-1;i>=0;i--){
        reverse += S[i];
    }


    if(reverse === S)
        return "True";

    return "False";
}



// Q9 Reverse String
function Reverse_String(S){

    let ans="";

    for(let i=S.length-1;i>=0;i--){
        ans += S[i];
    }

    return ans;
}



// Q10 Match Strings
function String_Match(S1,S2){

    if(S1===S2)
        return "YES";

    return "NO";
}



// Q11 Replace String
function Replace(S){

    return S.replace("You","Prepbytes");
}



// Q12 Split String
function Split_the_String(S){

    return S.split(" ");
}



// Q13 Count Vowels and Consonants

function Count_Vowels(S){

    let vowels="aeiouAEIOU";
    let count=0;


    for(let ch of S){

        if(vowels.includes(ch))
            count++;
    }

    return count;
}


function Count_Consonants(S){

    let vowels="aeiouAEIOU";
    let count=0;


    for(let ch of S){

        if(/[a-zA-Z]/.test(ch) && !vowels.includes(ch))
        {
            count++;
        }
    }

    return count;
}



// OUTPUT DISPLAY

let result = `

<h2>Q1 Count Characters</h2>
${countCharacters("AbaDd")}

<h2>Q2 Count Heads</h2>
${CountHead("prepbytes")}

<h2>Q3 Count Vowels</h2>
${Count_Vowel("Prepbytes")}

<h2>Q4 Concatenate Strings</h2>
${Concatenate_Strings("Prep","bytes")}

<h2>Q5 Find Length</h2>
${findLength("CeDqe")}

<h2>Q6 Game Winner</h2>
${Game_Winner("ADDAAADDDDD")}

<h2>Q7 Join Strings</h2>
${joinStrings("PrepBytes","Technologies")}

<h2>Q8 Palindrome Check</h2>
${Plain_Check("naman")}

<h2>Q9 Reverse String</h2>
${Reverse_String("I am utkarsh raj")}

<h2>Q10 Match Strings</h2>
${String_Match("Prepbytes","Prepbytes")}

<h2>Q11 Replace String</h2>
${Replace("Hi, I am You. You")}

<h2>Q12 Split String</h2>
${Split_the_String("I am utkarsh raj")}

<h2>Q13 Vowels and Consonants</h2>
${Count_Vowels("Prepbytes")} 
${Count_Consonants("Prepbytes")}

`;



document.getElementById("output").innerHTML=result;