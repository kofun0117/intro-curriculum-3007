'use strict';
function isMultipleOfSeventeen(num){
    let check_result = false;
    if (num%17 === 0) {
        check_result = true;
    }
    return check_result;
}
module.exports = {
    isMultipleOfSeventeen
}
