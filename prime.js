function prime(num)
  {
    
    let c = 0;
    for(let i = 0; i < num; i++){
      if(num%i==1){
        c++;
      }
    }
    if(c==0){
      console.log("isprime")
    }
    else{
      console.log("notprime");
    }
  }
prime(34);