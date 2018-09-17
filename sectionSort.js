// Swap Function
var listOfInts = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
function swap (items, firstIndex, secondIndex){
    console.log("1",firstIndex);
    console.log("2",secondIndex);
    console.log("3",items)
    var temp = firstIndex;
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

// section sort

function selectionSort(items){
    var len = items.length;
    var min;
    for (var i = 0; i <len; i++){
            // set index of minimun to this position
        min = i
        // check the rest of the array to see if anything is smaller
        for (var j=i+1; j<len; j++){
            if(items[j] <items[min]){
                min = j;
            }
        }
        // if the current position isnt the minium, swap it and the minimum
        if(i!==min){
            swap(items, i, min)
        }
    }
    return items;
}
console.log("first", selectionSort(listOfInts))
// SELECTION SORT [Best: O(n2) Worst: O(n2)]
function selectionSorts(listOfInts) {
    var len = listOfInts.length;
    var min;

    for (var i = 0; i < len; i++) {
        min = i;    // Set index of minimum to this position

        // Check the rest of the array to see if anything is smaller.
        for (var j = i + 1; j < len; j++) {
            if (listOfInts[j] < listOfInts[min]) {
                min = j;
            }
        }

        if (i !== min) {
            // If the current position isn't the minimum,
            // swap it and the minimum.
            var temp = listOfInts[i];
            listOfInts[i] = listOfInts[min];
            listOfInts[min] = temp;
        }
    }
    return listOfInts;
}
console.log("second", selectionSorts(listOfInts))
