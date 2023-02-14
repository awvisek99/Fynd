//var:global scope
//requirement:import the module
//module:alert
//npm install alert
var alert=require('alert');
function init() //function1-outer/parent
{//initialization
    var name = 'crome'; // name is a local variable created by init
    function displayName() { //displayName() is the inner function, a closure
        //execution:output
        alert(name);
        //use variable declared in the parent function, body of child function
    }
    //declaring a function doesnt call it
    //so we are calling it explicityly here
    displayName(); //inner/closure/child function

}
init();
//displayName(); -- outer function call will not achieve the puspose of closure
//purpose of closure is to
//call multiple inner functions by just one outer function call