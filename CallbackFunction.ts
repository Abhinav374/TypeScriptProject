  function sum(a:number,b:number,callback:(result:number)=>void)
  {
    let result=a+b;
    callback(result)
  }

//callback function
function displayResult(result:number):void
{
    console.log(result)
}
sum(10,20,displayResult)