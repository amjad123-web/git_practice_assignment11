function checkpalindrome(str)
{
 let bag = "";
 for(let i = str.length-1; i>=0; i--){
  bag+=str[i];
}
return bag;
}
let result = checkpalindrome("naman");
if(result===true){
console.log("Is palindrome");
}
else{
console.log("Not palindrome");
}