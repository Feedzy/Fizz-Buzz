/*for (let i = 1; i < 100; i++) 
{
    for (let a = 1; a < 100; a++) 
    {
        if (i%a == 0 ) 
        {
            console.log("Fizz");
        }
        if(i%a ==i)
        {
            console.log("Fizz Buzz")  ;      
        }
        else
        {
            console.log("Buzz")
        }
    }
}*/
for (let i = 1; i < 100; i++) 
{
 
    if (i%3 == 0 && i%5 != 0) 
    {
        console.log( i,"Fizz");
    }
    else if(i%5==0 && i%3!=0)
    {
        console.log("Buzz")
    }
    else
    {
        console.log(i,"Fizz Buzz");
    }
}

