// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

  var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string 
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  
  var numArray = cardNumber.toString().split("")
  var firstSix = parseInt(numArray[0] + numArray[1] + numArray[2] + numArray[3] + numArray[4] + numArray[5]) 
  var firstThree = parseInt(numArray[0] + numArray[1] + numArray[2])
  var firstFour = parseInt(numArray[0] + numArray[1] + numArray[2] + numArray[3])
  var firstFour = parseInt(numArray[0] + numArray[1] + numArray[2] + numArray[4])



  if(numArray.length === 14 && numArray[0] === "3"){
  	if(numArray[1] === "8" || numArray[1] === "9"){
  	  	return "Diner's Club"
  	  }
  }else if(numArray.length === 15 && numArray[0] === "3"){
  	if(numArray[1] === "7" || numArray[1] === "4"){
  	  	return "American Express"
  	  }
  //4903, 4905, 4911, 4936
  }else if(numArray[0] === "4" && firstFour !== 4903 && firstFour !== 4905 && firstFour !== 4911 && firstFour !== 4936){
  }else if(numArray[0] === "4"){
  	if(numArray.length === 13 || numArray.length === 16 || numArray.length === 19){
  		return "Visa"
  	}
  }else if(parseInt(numArray[0] + numArray[1]) >= 51 && parseInt(numArray[0] + numArray[1]) <= 55){
  	if(numArray.length === 16){
  		return "MasterCard"
  	}
  }else if(firstFour === 6011){
  	if(numArray.length === 16 || numArray.length === 19){
  		return "Discover"
  	}
  }else if(parseInt(numArray[0] + numArray[1] + numArray[2]) >= 644 && parseInt(numArray[0] + numArray[1] + numArray[2]) <= 649){
  	if(numArray.length === 16 || numArray.length === 19){
  		return "Discover"
  	}
  }else if(numArray[0] + numArray[1] === "65" && firstFour !== 6579){
    if(numArray.length === 16 || numArray.length === 19){
      return "Discover"
    }
  }else if(parseInt(numArray[0] + numArray[1] + numArray[2]) >= 644 && parseInt(numArray[0] + numArray[1] + numArray[2]) <= 649 || numArray[0] + numArray[1] === "65"){
  	if(numArray.length === 16 || numArray.length === 19){
  		return "Discover"
  	}
  }else if(numArray[0] + numArray[1] + numArray[2] + numArray[3] === '5018' || numArray[0] + numArray[1] + numArray[2] + numArray[3] === '5020' || numArray[0] + numArray[1] + numArray[2] + numArray[3] === '5038' || numArray[0] + numArray[1] + numArray[2] + numArray[3] === '6304'){
  	if(numArray.length >= 12 && numArray.length <= 19){
  		return 'Maestro'
  	}
  }else if(firstSix >= 622126 && firstSix <= 622925){
   	if(numArray.length >= 16 && numArray.length <= 19){
  		return 'China UnionPay'
  	}
  }else if(firstThree >= 624 && firstThree <= 626){
  	if(numArray.length >= 16 && numArray.length <= 19){
  		return 'China UnionPay'
  	}
  }else if(firstFour >= 6282 && firstFour <= 6288){
  	if(numArray.length >= 16 && numArray.length <= 19){
  		return 'China UnionPay'
  	}
  }else if(firstFour === 4903 || firstFour === 4905 || firstFour === 4911 || firstFour === 4936 || firstFour === 6333 || firstFour === 6759){
  	if(numArray.length === 16 || numArray.length === 18 || numArray.length === 19){
  		return 'Switch'
  	}
  }else if(firstSix === 564182 || firstSix === 633110){
  	if(numArray.length === 16 || numArray.length === 18 || numArray.length === 19){
  		return 'Switch'
  	}
  }else{
  	return "Not a recognizable card number."
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};



