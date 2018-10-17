function paresImpares () {
    var array = Array(100);

    for (i = 0; i < array.length; i++)
        array[i] = Math.floor((Math.random() * 100) + 1);

    array.forEach(a => document.write(a + "&nbsp"));

    var sortedArray = array.filter(a => a%2===0).concat(array.filter(a => a%2!==0));

    document.write("<br><br>");
    sortedArray.forEach(a => document.write(a + "&nbsp"));
}

paresImpares();