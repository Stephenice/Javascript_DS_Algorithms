//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input){
    let map = {}

    for (let index = 0; index < input.length; index++) {

        if(map[input[index]] !== undefined){
            console.log(input[index])
            return input[index];
        }else{
            
            map[input[index]] = index;
            console.log(map)
        }
          
    }
    
    return undefined;

}

firstRecurringCharacter([2,5,1,2,3,5,1,2,4])
firstRecurringCharacter([2,1,1,2,3,5,1,2,4])
firstRecurringCharacter([2,3,4,5])