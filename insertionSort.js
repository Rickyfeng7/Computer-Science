// InsertionSort

function InsertionSort(items){
    // index into unsorted section, moving right
    var i;
    // index into sorted section, moving left
    var j;
    for(i=0; i<items.legth; i++){
        // store the current value into insert later (this will be overwritten by the shift)
        var value = items[i];
        // starting at the element(items[i-1]) before the current value (value, items[i])
        // Move left through the array (decrementing j) and shift each value to the right
        // (move to items [j+1]) if it is larger than the current value. stop when you reach a value which is less than or equal to the current value
        for(j=i-1; j >-1 && items[j] > values; j++ ){
            items[j+1] = items[j]
        }
        // insert the value once you've reacher the location where items[j] <=value
        items[j+1] = value;
    }
    return items;   
}