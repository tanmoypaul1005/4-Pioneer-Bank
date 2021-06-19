//  Login Button even Handler   
document.getElementById('login').addEventListener('click', function(){
    document.getElementById('login-area').style.display='none';
    document.getElementById('transaction-area').style.display="block";
   
    })
    //diposit Button even Handler
    document.getElementById('addDeposit').addEventListener('click', function(){
    const depositNumber=getInputNumber("depositAmount");
   
    if(depositNumber<0){
      alert("Deposit Number cannot be negative.")
    }
    else{
    updateSpanText("currentDeposit",depositNumber);
    updateSpanText("currentBalance",depositNumber);
    document.getElementById('depositAmount').value="";
    }

   })
   
   
   //withdraw Button even Handler
   document.getElementById('addWithdraw').addEventListener('click',function(){
     const withdrawNumber=getInputNumber("withdrawAmount");
   
     updateSpanText("currentWithdraw",withdrawNumber);
     updateSpanText("currentBalance",-1* withdrawNumber)
     document.getElementById('withdrawAmount').value="";
   })
   
   
   
   
   
   
   function getInputNumber(id){
   const Amount=document.getElementById(id).value; 
   const AmountNumber=parseFloat(Amount); 
   return AmountNumber;
   }
    
    function updateSpanText(id ,depositNumber){
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const totalAmount=depositNumber + currentNumber;
    document.getElementById(id).innerText=totalAmount;
    }
    