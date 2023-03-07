import { useEffect, useState } from 'react';
import './App.css';
import { getAllTitles, addTitle, editTitle, deleteMeal } from './FetchMeals';
import { Meals } from './Meals';


function App() {
  const [meals, setMeals] = useState([]);
  const [title, setTitle] = useState('');
  const [edit, setEdit] = useState(false);
  const [mealId, setMealId] = useState('');

  useEffect(() => {
    getAllTitles(setMeals);
  }, [])

  const editTitleInInput = (_id, title) => {
    setEdit(true);
    setTitle(title);
    setMealId(_id);
  }

  return (
    <div className="App">
      <img className='bg' src={`bg.jpg`} alt='Background' />
      <h1>Meal Planner</h1>
      <div className='input'>
        <input type="text" placeholder='Add a meal'
                value={ title } onChange={ (e) => setTitle(e.target.value) } />
      
              
        <button disabled={ !title } onClick={ edit
          ? () => editTitle(mealId, title, setTitle, setEdit, setMeals)
          : ()=> addTitle(title, setTitle, setMeals) }>
            {edit ? 'Edit' : 'Add'}
        </button>
      </div>

      {meals.map(meal => <Meals key={ meal._id } text={ meal.title } 
          editMyTitle={ () => editTitleInInput(meal._id, meal.title) } 
          deleteMeal={ () => deleteMeal(meal._id, setMeals) } /> )}
    </div>
  );
}

export default App;
