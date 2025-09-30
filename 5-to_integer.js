const arg = prompt('Enter a Value: ');
const num = parseInt(arg);

if(!isNaN(num)){
    console.log("My number: " + num);
    
}else{
    console.log("Not a Number");
    
}