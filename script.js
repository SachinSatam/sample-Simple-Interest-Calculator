function varrange()
{
    var rangeinput=document.getElementById("rate");
    var output=document.getElementById("value");

    output.innerHTML=rangeinput.value;
    rangeinput.oninput=function()
    {
        output.innerHTML=this.value;
    }
}
function compute()
{
    var rangeinput=document.getElementById("rate");
    var output=document.getElementById("value");
    var amount1
    var amount2
    var princ=parseInt(document.getElementById("principal").value);
    var gettext=parseInt(document.getElementById("select1").value);
    var finyear
    amount1=(princ*output.innerHTML)/100  
    amount2=amount1*gettext;
    finyear=2020+gettext;
    document.getElementById("d").innerHTML=(`If you deposit ${princ}`);
    document.getElementById("e").innerHTML=(`at an interest rate of ${output.innerHTML}`);
    document.getElementById("f").innerHTML=(`You will receive an amount of ${amount2}`);
    document.getElementById("g").innerHTML=(`in the year ${finyear}`);
    
                                                          
}        