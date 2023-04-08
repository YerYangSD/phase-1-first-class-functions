function receivesAFunction(callBack) {
    return callBack();
}
receivesAFunction(function () {
    return "Calling the callback function";
})

/*function returnsANamedFunction() {
    return function namedFunction() {
        return "This function returns a named function"
    };
}
returnsANamedFunction()
*/
const returnsANamedFunction = () => {
    return function namedFunction(){
        return "This function returns a named function"
    }
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function () {
        return "This function returns an anonymous function"
    }
}
returnsANamedFunction
