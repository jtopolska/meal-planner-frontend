import axios from 'axios';

const myURL = 'https://meal-planner-g798.onrender.com';

export const getAllTitles = (setMeals) => {
    axios.get(myURL)
    .then(({data}) => {
        setMeals(data)    
    })
}

export const addTitle = (title, setTitle, setMeals) => {
    axios.post(myURL + '/postMeal', { title })
    .then(() => {    
        setTitle('');
        getAllTitles(setMeals);
    })
}

export const editTitle = (mealId, title, setTitle, setEdit, setMeals) => {
    axios.put(myURL + '/editMeal', { _id: mealId, title })
    .then(() => {
        setTitle('');
        setEdit(false);
        getAllTitles(setMeals);
    })
}

export const deleteMeal = (_id, setMeals) => {
    axios.post(myURL + '/deleteMeal', {_id})
    .then(() => {
        getAllTitles(setMeals);
    })
}
