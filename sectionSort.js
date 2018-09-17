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