function reverseMyString(inputString){
    var inputArrString = inputString.split("");
    var reverseArrString = inputArrString.reverse();
    var reverseInputString= reverseArrString.join("")
    return reverseInputString
}

function checkNotpalindromeReverse(userInput){
    // get number of characters
    // let x = "mostafa"

    let inputlength = userInput.length
    if( inputlength % 2 === 0 ){
        // number of iteration inputlength/2
        let iterValue = inputlength/2
        for(let i=0; i<iterValue;  i++ ){
            // console.log(userInput[i], userInput[inputlength-1-i])

            if(userInput[i] !== userInput[inputlength-1-i])
            {

            return reverseMyString(userInput)}

            
        }
     
        return `this word is palindrome ${userInput}`
        
    }
    else{
        let iterValue = (inputlength-1)/2
        for(let i=0; i<iterValue;  i++ ){
            if(userInput[i] !== userInput[inputlength-1-i])
            return reverseMyString(userInput)

        }
        
        return `this word is palindrome ${userInput}`
        
    }
}


console.log(reverseMyString("mostafa"))
console.log(checkNotpalindromeReverse("mostafa"))
console.log(checkNotpalindromeReverse("adam"))
console.log(checkNotpalindromeReverse("madam"))
console.log(checkNotpalindromeReverse("ma11am"))
console.log(checkNotpalindromeReverse("maam"))
console.log(checkNotpalindromeReverse("ma23am"))
console.log(checkNotpalindromeReverse("massam"))