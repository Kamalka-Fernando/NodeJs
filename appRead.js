const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,
                         output : process.stdout });

let num1 = Math.floor((Math.random()*10)+ 1);
let num2 = Math.floor((Math.random()*10)+ 1);
let ans = num1 + num2;

rl.question(`What is the sum of ${num1}+ ${num2}? \n`,(userInput)=>{
    if(userInput.trim() == ans){
        rl.close();
    }else{
        rl.setPrompt('Invalid entry.Pease try again...\n');
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim() == ans){
                rl.close();
            }else{
                rl.setPrompt('Invalid response.Pease try again...\n');
                rl.prompt();
            }
        });
    }
});

rl.on('close',()=>{
    console.log('Correct!!!');
});
