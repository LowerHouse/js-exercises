const reverseString = function(str) {
    let output = '';
    if(str){
    for(i = str.length - 1; i >= 0; i--){
        output += str[i]
    }}
    return output
};

// Do not edit below this line
module.exports = reverseString;
