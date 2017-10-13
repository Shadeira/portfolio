function map(arr, transform) {
    var newArr = [];
    
    for(var i = 0; i < arr.length; i++) {
        newArr[i] = transform(arr[i]);
    }
    return newArr;
}