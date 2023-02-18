let calcValue = document.getElementById('calcValue')
function showValue(num){
    calcValue.value +=num
    
};
function Clear(){
    calcValue.value ="";
};

function dele(){

    calcValue.value=calcValue.value.slice(0,-1)
};
function calc(){
  
try{
    calcValue.value=eval(calcValue.value)
}catch(err){

    calcValue.value='0'
}

}