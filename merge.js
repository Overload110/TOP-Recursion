function mergeSort(arr) {
    let len = arr.length;
    
    if (len <= 1) {
       return arr;
    }
    
    const mid = Math.floor(len / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
 
    const sortedLeftArr = mergeSort(leftArr);
    const sortedRightArr = mergeSort(rightArr);
 
    return merge(sortedLeftArr, sortedRightArr);
 }
 
 function merge(leftArr, rightArr) {
    let resultArray = [];
    let leftLen = leftArr.length;
    let rightLen = rightArr.length;
    let l = 0;
    let r = 0;
 
    while (l < leftLen && r < rightLen) {
        if (leftArr[l] < rightArr[r]) {
            resultArray.push(leftArr[l++]);
        } else {
            resultArray.push(rightArr[r++]);
        }
    }
 
    while (l < leftLen) {
        resultArray.push(leftArr[l++]);
    }
    while (r < rightLen) {
        resultArray.push(rightArr[r++]);
    }
 
    return resultArray;
 }
