// Named function with no parameters and no return type in TypeScript:
 /*function displayMessage(): void {
    console.log("Hello TypeScript");
 }
 displayMessage();

Named function with parameters and return type in TypeScript:
function addNumbers(a:number, b:number): number {
    return a + b;
}   
let result:number = addNumbers(5, 10);
console.log(result);
*/
/*Named function with rest  parameters in TypeScript:
Rest paramter dont restrict the number of arguments passed to the function.
 It allows us to pass a variable number of arguments as an array.


function addNumbers(...nums:number[])
{
    let i;
    let sum:number=0;
    for (i=0;i<nums.length;i++);{
    sum= sum + nums[i];

}
console.log("sum of number",sum);
}
addNumbers(1,2);
addNumbers(1,2,3);
addNumbers(1,2,3,4,5,6);
*/
//Named function with Rest paramter with different data types

/*function findelements(...element:(number|string)[]):number{
    return element.length
}
console.log(findelements(10,"Nick",2,"ResizeObserver",3,4,4));
//Named function with optional parameter
function OptionalParameter(id:number, name:string, emailid?:string){

    console.log("ID:",id);
    console.log("Name:",name);
    console.log("EmailId:",emailid)

}
//OptionalParameter(1234,"Scott","rajat.s@gmail.com")

OptionalParameter(1234,"Scott")
*/
//Named function with default paramter.

function defaultParameter(Price: number, rate: number = 0.50): void {
    let discount: number = Price * rate;
    console.log("Discount price:", discount);
}

defaultParameter(1000);