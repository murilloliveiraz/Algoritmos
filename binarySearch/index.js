function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;
    
    while ( low <= high ){
        let middle = Math.floor((low + high) /2);
        let choice = list[middle];
        
        if (choice === item){
            return middle;
        }

        if (choice > item) {
            high = middle - 1;
        } else {
            low = middle + 1;
        } 
    }
    return -1;
}

const myList = [1, 3, 5, 7, 9];
console.log(binarySearch(myList, 9))