const removeFromArray = function(arr, ...num) {
for(i = 0; i < num.length; i++){
    if(arr.includes(num[i])){
        arr.splice(arr.indexOf(num[i]), 1)
    }
}

return arr
};

// Do not edit below this line
module.exports = removeFromArray;
