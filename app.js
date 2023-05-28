console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1: \n=========\n");
function printOdds(count){
    if (count <0){
        for (let i = 1; i >= count;  i--){
        if (i % 2 != 0){
            console.log(i)}
    
        }
    }else {
        for (let i = 1; i <= count;  i++){
        if (i % 2 != 0){
            console.log(i)}
        }
    }
} 
printOdds(-10) 
printOdds(10) 

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge (name, age){
    let oldEnoughMsg = `Congrats ${name}! You are old enough to drive!`
    let tooYoungMsg = `Sorry ${name}, you need to wait ${16 - age} years till you can drive.`;

    if (age < 16){
        console.log (tooYoungMsg);
    } else{
        console.log (oldEnoughMsg);
    }
}
checkAge("Zach", 13);
checkAge("Jack", 16);
checkAge("John", 25); 


//EXERCISE 3: QUADRANT
console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x,y){
   if (x>0 && y > 0){
    return "Quadrant 1";
   } else if (x < 0 && y > 0){
    return "Quadrant 2";
   }else if (x<0 && y < 0) {
    return "Quadrant 3";
   } else if (x>0 && y<0){
    return "Quadrant 4";
   }else if (x==0 && y != 0){
    return "X Axis";
   }else if (x != 0 && y==0){
    return "Y Axis";
   }else{
    return "Orgin";
   }

}
console.log(checkQuadrant(13,1))
console.log(checkQuadrant(-9,17))
console.log(checkQuadrant(43,-7))
console.log(checkQuadrant(-13,-15))
console.log(checkQuadrant(0,0))
console.log(checkQuadrant(0,1))
console.log(checkQuadrant(1,0))


//Exercise 4
console.log("EXERCISE 4:\n==========\n");

function isValidTriangle(x, y, z){
  return x + y > z && x+ z > y && z+y > x
} 

function checkTriangle (a, b,c ){

 let isValid = isValidTriangle(a,b,c);
 if (isValid){
 //What type of triangle?
 if (a== b&&b==c){
    return  `Equilateral`;
 }else if (a==b || b== c || a ==c){
 return `Isoscles`;
 }else {
    return `Scalene`;
 }
 }else {
    return `Not a valid triangle`;
 }
}
console.log(checkTriangle(2,2,2)); //eq
console.log(checkTriangle(2,3,4)); //scalene
console.log(checkTriangle(1,2,2)); // isoscles
console.log(checkTriangle(1,1,2));//invalid
//Exercise 5
console.log("EXERCISE 5:\n==========\n");
