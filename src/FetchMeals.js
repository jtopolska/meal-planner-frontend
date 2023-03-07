import axios from 'axios';

const myURL = 'http://localhost:7000';

export const getAllTitles = (setMeals) => {
    axios.get(myURL)
    .then(({data}) => {
        console.log(data)
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
    console.log(_id)
    axios.post(myURL + '/deleteMeal', {_id})
    .then(() => {
        console.log(setMeals)
        getAllTitles(setMeals);
    })
}