function assertequal(actual,expected) {
    console.assert(actual,expected);
}

function head(list) {
    return (list[0]);
}

function tail() {
    var taillist = [];
    for (var i = 0; i < arrayLength; i++) {
        if (i > 0) {
            taillist[i - 1] = (myStringArray[i]);
        }
    }
}

assertequal(tail([1,2,3][0]),2);
