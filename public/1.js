const btn=document.getElementsByTagName('button');
const input=document.getElementsByTagName('input')[0];
const para=document.getElementById('para');

btn[0].addEventListener('click',some);

function some()
{
    var value=input.value;
    var value1=value.split(',')[0];
    
    fetch(`/api?location=${value}`).then(result=>
    {
        
        return result.json();
    }).then(data=>
        {
            para.innerHTML=`<b>Currently Temperature in ${value1} is ${data.temp} Celsius  and Humidity is ${data.humidity}.Today Weather is ${data.text}.The Winds flows with a Speed ${data.windspeed} kmph in a Direction ${data.winddirection} -------${data.state},${data.country}</b>`;
            input.value='';
    

        }).catch(err=>
            {
                console.log("please provide valid Location");
            });
    
}





