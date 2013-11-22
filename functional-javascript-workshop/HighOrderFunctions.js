/**
 * Created with IntelliJ IDEA.
 * User: amc@blueribbon-ti.com
 * Date: 21/11/13
 * Time: 06:48 PM
 */

var functionToCall = process.argv[2]
var timesToCallFunction = process.argv[3]

function callFunctions(theFunction, loops){
    for (var i = 0; i < loops ; i++){
        theFunction(arguments)
    }
}

module.exports = callFunctions