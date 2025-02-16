function assertequal(actual,expected) {
    console.assert(actual,expected);
}

function head(list) {
    return (list[0]);
}

assertequal(head([1,2,3]),1);
