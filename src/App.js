import React, {Component} from 'react';
import Form from './components/Form';

const API_KEY = "3ae8fa5d97384aa938a735f4e46b9fce";
const baseURL = "https://www.food2fork.com/api/";
class App extends Component{
  state = {
    recipes : []
  }
  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const apiCall =  await fetch(`${baseURL}search?key=${API_KEY}&q=chicken`);

    const data = await apiCall.json(); // "this save the result of fetching tha api as json"
    this.setState({
      recipes : data.recipes
    });
    console.log(this.state.recipes);
  } 
  
  render(){
    return (
      <div>
        <header>
          <h1>
            Get your favorite recipe!
          </h1>

        </header>
        <Form getRecipe={this.getRecipe}/>
        {this.state.recipes.map((recipe)=>{
          return <p>{recipe.title}</p>
        })}
      </div>
    );
  }
} 
  


export default App;
