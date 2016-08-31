for(i=1; i < 101; i++){
  if(i%3 === 0 && i%5 !== 0){
    print ("Fizz");
  } else if(i%3 !== 0 && i%5 === 0){
    print ("Buzz");
  } else if(i%3 === 0 && i%5 === 0){
    print ("FizzBuzz");
  } else{
    print (i);
  }

}