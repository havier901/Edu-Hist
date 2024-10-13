function createPhoneNumber(numbers){
  
    // Creat phonenumber string, add parentheses
    let phonenumber = "(";

    // Add digits 1-3
    for (let i = 0; i <= 2; i++){
      
       phonenumber += numbers[i];
    }

    // Add parentheses, space
    phonenumber += ") ";

    // Add digits 4-6
    for (let i = 3; i <= 5; i++){
        
        phonenumber += numbers[i];
    }

    // Add dash
    phonenumber += "-";

    // Add digits 7-10
    for (let i = 6; i <= 9; i++){

        phonenumber += numbers[i];
    }

    // Return phonenumber string
    return phonenumber;
  }

  /* // Top/Fav solution
  function createPhoneNumber(numbers){

    // Create a string variable with your intended format, using x as pattern for numbers[]
    var format = "(xxx) xxx-xxxx";
    
    // Use .replace method to change each x to numbers[i]
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  } */