function compute()
{
    var principal = document.getElementById("principal").value;
        principal.style.color="yellow";
    
    var pal = parseInt(principal);
    
    if ( pal > 0 )
    
    {
        
        
    var rate = document.getElementById("rate").value;
        rate.style.color="yellow";
        
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;
        interest.style.color="yellow";
    
    var year = new Date().getFullYear()+parseInt(years);
        year.style.color="yellow";

    document.getElementById("result").innerHTML= "If you deposit "+principal+
    ",\<br\> at an interest rate of "+rate+"%"+
    ",\<br\>You will receive an amount of "+interest +
    ",\<br\>in the year "+year+"\<br\>"
    
    }
    else
    {
        alert(" Please enter an amount greater than zero for Amount" );
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}  
