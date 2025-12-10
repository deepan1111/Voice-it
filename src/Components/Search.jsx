// import React, { useState } from "react";
// import { getRecipes } from "../api";
// const Search = ({onSearch}) =>{
//   // const [food,setFood] = useState('')

//   // const handleSearch = ()=>{
//   //   onSearch(food)
//   //   setFood('');
//   // }
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);

//   const searchRecipes = async (e) => {
//     e.preventDefault();
//     const result = await getRecipes(query);
//     setRecipes(result);
//   };
    
//     return (
//     <div className="flex justify-center m-5">
//       {/* <div className="flex">
//       <input className="w-[300px] md:w-[4 00px]  bg-black text-white p-3 text-center border-r-2" type="text" 
//          placeholder="Enter the Food !!" />
//          <button type="submit" onClick={handleSearch} className="ml-3">Search</button>
//       </div> */}
//          <form >
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for recipes..."
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div>
//         {recipes.map((recipe, index) => (
//           <div key={index}>
//             <h2>{recipe.recipe.label}</h2>
//             <p>Calories: {recipe.recipe.calories.toFixed(2)}</p>
//             <img src={recipe.recipe.image} alt={recipe.recipe.label} />
//             <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
//           </div>
//         ))}
//       </div>
       
         
//     </div>
    
//     )
// }

// export default Search
import React, { useState } from 'react';
import { getRecipes } from '../api';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (e) => {
    e.preventDefault();
    const result = await getRecipes(query);
    setRecipes(result);
  };

  return (
    <div>
      <h1>Recipe Search</h1>
      <form onSubmit={searchRecipes}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.recipe.label}</h2>
            <p>Calories: {recipe.recipe.calories.toFixed(2)}</p>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;