function leap(year) {
    year = document.getElementById("inputYear").value;
    var Result;
    
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
                Result="Leap Year";
            }else{
                Result="Not Leap Year";
            }
        }else{
            Result="Leap Year";
        }
    }else{
        Result="Not Leap Year";
    }

    if(year){
    document.getElementById("result").innerHTML=Result; 

    }else{
    document.getElementById("result").innerHTML="(Please Enter A Year First To Check Leap Year...)  ";
        
    }

}
