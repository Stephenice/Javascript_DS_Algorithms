/**
 * Question: Given 2 arrays, create a new function that lets the user know 
 * (true/false) whether these two arrays contain any common items.
 * 
 */

// Solution One: Brute force - Big O(n*m)
// function commonItems(arr1, arr2) {

//     // nested arrays
//     for (var i = 0; i < arr1.length; i++){
//         for (var j = 0; j < arr2.length; j++){
//             if (arr1[i] === arr2[j]){
//                 console.log('true', arr1[i], arr2[j]);
//                 break;
//             } else{
//                 console.log('false');
//             }
//         }
//     }
// }

const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['x', 'y', 'a'];

commonItems(arr1, arr2);


// Solution Two: Big O(n)

function commonItems(arr1, arr2) {
    // convert arrays one to Object
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