//Ans 1
function arrowsquare(num) {

   let squarevalue = num*num;

    return squarevalue;

}
     let result = arrowsquare(5);
      console.log(result);
      

      //ANS4

     function calculatertax(){
        return function (income){
            let taxAmount = 0;
            if(income<10000){
                taxAmount= income*0.1 ;
                // 10% tax for lower then 10000
            } else if(10000<income<=30000){
                taxAmount = 10000*0.1 + (income-10000)*0.2;
                // 10% for 10000 AND 20% for b/w 10000 and 30000
            } else if (30000<income){
                taxAmount = 10000*0.1 + 20000*0.2 + (income-30000)*0.3;
                // 10% for 10000 AND 20% for b/w 10000 and 30000 AND 30% for above 30000
            }
            return taxAmount;
        };
     }

     console.log('Tax for 7000$ income',calculatertaxAmount(7000) );
     console.log('Tax for 26000$ income',calculatertaxAmount(26000) );
     console.log('Tax for 78000$ income',calculatertaxAmount(78000) );

      