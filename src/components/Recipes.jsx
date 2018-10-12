import React from 'react';


const Recipes = (props) =>(
    <div>
        {props.recipes.map((recipe)=>{
          return (
            <div>
              <img src={recipe.image_url} alt={recipe.recipe_title}/>
              <p key={recipe.recipe_id}>{recipe.title}</p>
            </div>
          );
        })}
    </div>
);




export default Recipes;