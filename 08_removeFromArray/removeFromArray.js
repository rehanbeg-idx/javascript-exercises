const removeFromArray = function(arr, ...num) {
    let ar = [];

    arr.forEach((element) => {
        if(!num.includes(element)){
            ar.push(element);
        }
    });
    return ar;
};

// Do not edit below this line
module.exports = removeFromArray;
