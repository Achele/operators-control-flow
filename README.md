# operators-control-flow

A JavaScript practice questions and answer

### Task 1: List the symbols for each of the below JavaScript operators

- Arithmetic Operators - The symbols are:
  - +,
  - *,
  - /
  - -,
  - %

- Assignment Operators - used to assign values to variables. The symbols are:

  - =
  - +=
  - -=
  - *=
  - /=
  - %=

- Comparison Operators

  - ==
  - ===
  - !=
  - !==
  - >
  - <
  - >=
  - <=
  - ?

- Logical Operators

  - &&
  - ||
  - !

- Bitwise Operators -

### Task 2: For each JavaScript Operator, write 2 examples.

- Arithmetic Operators
  - Example 1: 
    let add = num1 + num2; // This adds the value assigned to num1 and num2, and assign the result to the variable add.

  - Example 2: 
    let y += 2 // This adds 2 to the value assigned to y and assigns the result to y. i.e y = y + 2

- Assignment Operators
  - Example 1: 
    let name = "Ojoachele" //This assigns the string Ojoachele to the variable name

  - Example 2: 
    let age = 10 //This assigns the number 10 to the variable age

- Comparison Operators
    - Example 1:
  ``` 
      let x = 5;
      let y = 10;
      
      let lessThan = x < y ? `${x} is less than ${y}` : `${x} is greater than ${y}`;
      console.log(lessThan);
  ```
  This returns 5 is less than 10.
  
     - Example 2:
  ```
  let age = 18
  
  let votable = (age < 18)? "Too young, can't vote" : "Old enough, eligible to vote"
  console.log(votable)
  
  ```
  This returns Old enough, eligible to vote because the age is 18
  
  - Logical Operators 
    - Example 1:
    ```
    let x = 10
    let y = 6
    
    console.log(x < 20 && y > 1);
    ```
    This evaluates to true because 10 is less than 20 and 6 is greater than 1
    
    - Example 2: 
    ```
    let x = 20
    let y = 20
    
    console.log(!(x==y))
    ```
    This returns false because x is equal to y
    
### Task 4: What is the result when the following program is executed?
```
for(let i = 0; i < 20; i +=7){
console.log(i)
}
```
The result is 
- 1
- 8
- 15
