import {MEALS } from './../data/dummy-data'

const initialState={
        meals:MEALS,
        filteredMeals:MEALS,
        favoriteMeals:[]
}

export default MealReducer =(state=initialState , action )=>{
    // switch (action.type) {
    //     case '':
            
    //         break;
    
    //     default:
    //         break;
    // }
    return state;
}