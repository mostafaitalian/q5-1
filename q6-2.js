




function getMissingNumber(arrayOfIntegers){
    var correctArray = []
    for(let i=1; i<=45; i++){
        correctArray.push(i)
    }
    // console.log(correctArray, arrayOfIntegers)
    for(let item of arrayOfIntegers){
        // console.log(item)
        if(!(item in correctArray)){
            // console.log(item)
            return item;
        }
    }
}

let arrayOfIntegers1 = [
    1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
   12, 13, 14, 76, 16, 17, 18, 19, 20, 21, 22,
   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
   34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
   45
 ]


let arrayOfIntegers2 = [
    1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
   12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
   34, 35, 36, 37, 38, 39, 55, 41, 42, 43, 44,
   45
 ]

 let arrayOfIntegers3 = [
    1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
   12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
   34, 46, 36, 37, 38, 39, 40, 41, 42, 43, 44,
   45
 ]


 console.log(getMissingNumber(arrayOfIntegers1))
 console.log(getMissingNumber(arrayOfIntegers2))
 console.log(getMissingNumber(arrayOfIntegers3))