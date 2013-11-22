/**
 * Created with IntelliJ IDEA, the best damn ide out there.
 * User: amc@blueribbon-ti.com
 * Date: 21/11/13
 * Time: 06:55 PM
 */


function doubleAll () {
    var numbers = process.argv[2];
    var result = []
    for (var i = 0; i < numbers.length ; i++) {
        result.push(numbers[i] * 2)
    }
    return result
}

doubleAll()
