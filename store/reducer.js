import {MEALS } from './../data/dummy-data'
import { TOGGLE_FAVORITE , SET_FILTERS  } from './action'

const initialState={
        meals:MEALS,
        filteredMeals:MEALS,
        favoriteMeals:[]
}

export default MealReducer =(state=initialState , action )=>{
    switch (action.type) {
        case TOGGLE_FAVORITE:
            let id = action.payload;
            let exisitingMeal = state.favoriteMeals.find(item=>item.id == id )
           
            if ( exisitingMeal ){
                // if the meal is already exisit in the favorite meals, then remove it 
                let updatedFavoriteMeals  = state.favoriteMeals.filter(meal => meal.id !== id )
              
                return {...state , favoriteMeals:updatedFavoriteMeals }
            }else{
                 // if the meal is not exisit in the favorite meals, then add it 
                let favMeal = state.meals.find(meal => meal.id === id );
                return {...state , favoriteMeals:[ favMeal ,...state.favoriteMeals ] }
            }
            
            break;

        case SET_FILTERS:
            const { glutenFree , lactoseFree, vegan , vegetarian } = action.payload ; 
            console.log('====================================');
            console.log(action.payload);
            console.log('====================================');
            const appliedFilter= action.payload;
            const updatedFilteredMeals = state.meals.filter(meal=>{
                if (  appliedFilter.glutenFree && !meal.isGlutenFree  ){
                    return false;
                }
                if (  appliedFilter.lactoseFree && !meal.isLactoseFree ){
                    return false;
                }
                if (  appliedFilter.vegan && !meal.isVegan ){
                    return false;
                }
                if (   appliedFilter.vegetarian && !meal.isVegetarian ){
                    return false;
                }
                return true

            })
                console.log('====================================');
                console.log('appliedFilter', updatedFilteredMeals.length);
                console.log('====================================');
            return { ...state , filteredMeals: updatedFilteredMeals  }
            break;

        default:
            return state;
            break;
    }
    
}
// "glutenFree": true,
//   "lactoseFree": false,
//   "vegan": false,
//   "vegetarian": false,