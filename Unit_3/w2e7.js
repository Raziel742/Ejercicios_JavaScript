function showSeparated (array) {
    array.forEach(a => document.write(a + "&nbsp"));
}

function devalueFirstTenElements (array) {
    array.splice(0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

    // Otra manera de hacerlo
    // for (i = 0; i <= 9 && i < array.length; i++)
    //     v[i] = 0;
}

function addOneToEveryone (array) {
    for (i = 0; i < array.length; i++)
        array[i]++;
}


let v = [1,2,3,4,5,6,7,8,9,10,11,12];

showSeparated(v);

devalueFirstTenElements(v);
document.write("<br>");
showSeparated(v);

addOneToEveryone(v);
document.write("<br>");
showSeparated(v);