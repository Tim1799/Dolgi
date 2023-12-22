// Task 1
function sumArrayElements(array) {
    // var sum = 0;
    var arr = [];
    var count = 0;
    for(var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            // sum += array[i][j];
            if (array[i][j] % 2 != 0) {
                count ++;
            }
        }
    }
    return count;
}

function resultSum() {
    var array = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30]
];
    var result = sumArrayElements(array);
    document.getElementById("result1").value = result + " " + "нечетных элементов";

}


// Task 2
function sumArrayElementsNo1(array, index) {
    var sum = 0;
    for(var i = index; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function productElementsArrayBy1() {
    var array = [3, 2, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    var sum = sumArrayElementsNo1(array, 1);
    document.getElementById("result2").value = sum;
    var result = sum * array[0];
    document.getElementById("result2-1").value = result;
}


// Task 3
function SumAndLengthArray(array) {
    var sum = 0;
    var count = 0;
    for(var i = 0; i < array.length; i++) {
        if (array[i] >= 0 && array[i] <=10) {
        sum += array[i];
        count++;
    }
    }
    return {sum, count};
}

function result() {
    var array = [-10, 5, 3, 15, 6, 7, 20, 8, -11, 4];
    var result = SumAndLengthArray(array);
    document.getElementById("result3").value = result.sum;
    document.getElementById("result3-1").value = result.count;
}


// Task 4
function SumAndMaxArray(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
    }
    var flat = array.flat();
    var max = Math.max(...flat);
    var sorted = flat.sort((a, b) => a - b);
    return {sum, max, sorted};
}

function SumAndMaxRes() {
    var array = [
      [51.7, 23.6, 32.8, 62.4, 32.6, 47.9, 77.5, 31.5, 74.4, 44.3],
      [81.9, 94.1, 10.4, 13.7, 26.7, 97.9, 57.5, 44.4, 86.6, 19.2],
      [17.4, 56.3, 40.4, 50.4, 45.4, 49.1, 74.2, 38.9, 66.8, 67.4],
      [46.3, 88.7, 18.3, 19.8, 61.8, 21.7, 44.8, 15.1, 72.8, 81.1],
      [52.3, 41.6, 24.1, 79.5, 32.8, 90.9, 42.2, 34.7, 69.6, 64.6],
      [37.8, 82.1, 33.6, 42.3, 71.2, 26.2, 68.8, 44.4, 26.8, 42.4],
      [33.7, 83.6, 96.8, 48.5, 43.7, 47.2, 71.5, 49.8, 81.1, 32.7],
      [87.2, 99.9, 29.9, 52.8, 13.2, 52.2, 84.3, 24.2, 67.7, 53.1],
      [18.6, 48.2, 54.2, 57.8, 53.7, 37.8, 16.9, 10.2, 12.6, 33.3],
      [49.9, 44.9, 20.3, 25.5, 15.9, 49.3, 42.6, 68.1, 45.8, 50.2]
    ];
    let result = SumAndMaxArray(array);
    document.getElementById("result4").value = result.sum.toFixed(1);
    document.getElementById("result4-1").value = result.max;
    document.getElementById("result4-2").innerHTML = result.sorted.join(", ");
}
