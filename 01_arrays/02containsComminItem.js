/**
 * Question: Given 2 arrays, create a new function that lets the user know 
 * (true/false) whether these two arrays contain any common items.
 * 
 */

// Solution One: Brute force - Big O(n*m)
// function commonItems(arr1, arr2) {

    // nested arrays
    for (var i = 0; i < arr1.length; i++){
        for (var j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]){
                console.log('true', arr1[i], arr2[j]);
                break;
            } else{
                console.log('false');
            }
        }
    }
}

const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['x', 'y', 'a'];

commonItems(arr1, arr2);


/** -----------------Solution Two: Big O(n)
 * Time Complexity:   for includes() is O(n) - overall time complexity of commonItems() function becomes O(n * m)
 * Space Complexity: O(n)  because the space used in the result object is directly proportional to the number of elements in arr1.
 * 
 * */ 

function commonItems(arr1, arr2) {
    
    const result = {}

    for (var i = 0; i < arr1.length; i++){
        result[arr1[i]] = 'true';
        console.log(result);
        if(arr2[i] in result){
            console.log('Object', result[arr2[i]]);
            break;
        }
    }

}


/** ------------Solution Three: Big O(n) and in-build Method
 * 
 * 
 * 
 * 
 *  */ 
function commonItems(arr1, arr2) {
     console.log('object')
    for(let i=0; i < arr1.length; i++){
      console.log('object2')
        if(arr2.includes(arr1[i])){
            console.log('true');
            break;
        }
    }
}