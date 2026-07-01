//=====forEach(),map(),filter(),reduce(),some(),every()=========
//1.Execute a function once for each array Element.
//It takes function as a paramter.
//Syntax-array.forEach(function(currentValue,Index,Array))


let fruit:string[]=['apple', 'banana','orange', 'mango','kiwi'];

console.log("printing for loop] along with index using for loop...");

for (let i in fruit)
{
    console.log(i,fruit[i]);
    
}

fruit.forEach(function(element,index){
    console.log(`${index}`, `${element}`);

})