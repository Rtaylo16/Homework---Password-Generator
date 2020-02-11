Password Generator****

https://rtaylo16.github.io/Homework---Password-Generator/

Created Password Generator that does the following
* Upon button click prompts guide the user through criteria
* Prompt has user input password length 
* Confirm has user choose Uppercase
* Confirm has user choose Lowercase
* Confirm has user choose Numbers
* Confirm has user choose Special characters

How I did it*****

Through the use of query selector i  targeted the generate button
Through writePassword function i created a function:
* Made sure the length of password did not exceed 128 chars.
* Used alerts prompts and confirms to ask the user for the password criteria 
* Through the use of if and else statements i validated the user's password criteria 

Used a for loop to tie in the arrays created in the previous function
Used Math.floor(math.random) to generate random password based on the arrays entered.
Returned randomized password for the user