function sayHello(){
    console.log('hello');
}

var myMath = {
    PI: 3.141592657,
    max: function () {
        var max = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (max < arguments[i]) {
                max = arguments[i];
            }
        }
        return max;
    },
    min: function () {
        var min = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (min > arguments[i]) {
                min = arguments[i];
            }
        }
        return min;
    },
}

//封装自己的数学对象PI和最大值和最小值
function reverse(arr) {
    var arrNew = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        arrNew[arrNew.length] = arr[i];
    }
    return arrNew;
}