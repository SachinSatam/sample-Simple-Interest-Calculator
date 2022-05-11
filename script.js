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
    var principal=parseInt(document.getElementById("principal").value);
    var gettext=parseInt(document.getElementById("select1").value);
    var finyear
    if(principal<=0 || !principal)
    {
        alert("ERROR :(  Enter a positive integer")
        principal.focus()
    }    
    amount1=(principal*output.innerHTML)/100  
    amount2=amount1*gettext;
    finyear=2020+gettext;
    document.getElementById("d").innerHTML=(`If you deposit <mark>${principal}</mark>`);
    document.getElementById("e").innerHTML=(`at an interest rate of <mark>${output.innerHTML}</mark>`);
    document.getElementById("f").innerHTML=(`You will receive an amount of <mark>${amount2}</mark>`);
    document.getElementById("g").innerHTML=(`in the year <mark>${finyear}</mark>`);
    
                                                          
}        