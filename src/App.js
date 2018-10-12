import React, {Component} from 'react';
import Form from './components/Form';

class App extends Component{
  getRecipe = (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;

    console.log(recipeName);
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
      </div>
    );
  }
} 
  


export default App;
