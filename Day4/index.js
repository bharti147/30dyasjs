// Activity1 - For Loop
// Task1 - program to prrint numbers from 1 to 10 using for loop

function onetoten(){
for(let i=1;i<=10;i++){
    console.log(i)
}
}
// onetoten()

// Task2 - program to prrint multiplication table of 5 using for loop

function table5(){
    for(let i=1;i<=10;i++){
        console.log(5*i)
    }
    }
//  table5()


// Activity2 - While Loop
// Task3 - calculate the sum of numbers from 1 to 10 using while loop

function sumonetoten(){
    let i = 1;
    let sum = 0;
    while(i<=10){
       
       sum = sum+i;
       i++;
    }
    console.log(sum)
    }
//  sumonetoten()

// Task4 - print numbers from 10 to 1 using while loop
function tentoone(){
    let i = 10;
    
    while(i>0){
        console.log(i)  
       i--;
    } 
    }
    // tentoone()


// Activity3 - Do...While Loop
// Task5 - print numbers from 1 to 5 using do...while loop

function onetofive(){
    let i = 1;
    
    do{
        console.log(i)
        i++;
    }
    while(i<=5)

    }
  //onetofive()

// Task6 - factorial of a number using do while loop
function factorial(n){
    let i=n;
    let ans=1;
    do{
        ans*=i;
        i--;
    }
    while(i>0)
   return ans;
    }
// console.log(factorial(6))

    
// Activity4 - NESTED LOOPS
// Task7 - print a pattern using nested for loop
function onetofivepattern(){
    for(let i=1;i<=5;i++){
        let pattern = '';
        for(let j=1;j<=i;j++){
        pattern+="*";
        }
        console.log(pattern)
    }
    }
    // onetofivepattern()



// Activity5 - LOOP CONTROL STATEMENTS
// Task8 - print numbers from 1 to 10, but skip the number 5 using the 'continue' statement

function onetotenskip5(){
    for(let i=1;i<=10;i++){
    if(i==5)
        continue;
    console.log(i)
    }
    
    }
    // onetotenskip5()


// Task9 - print numbers from 1 to 10, but stop at 7 using the 'break' statement

function onetotenstop7(){
    for(let i=1;i<=10;i++){
    if(i==7)
        break;
    console.log(i)
    }
    
    }
    // onetotenstop7()