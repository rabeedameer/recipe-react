import React, {Component} from 'react';
import { Link } from 'react-router-dom';
const baseURL = "https://www.food2fork.com/api/";
const API_KEY = "3ae8fa5d97384aa938a735f4e46b9fce";
class Recipe extends Component{
    state = {
        selectedRecipe :[]
    }
    componentDidMount = async () => { // this will get fired as soon as this component get loaded to the browser
        const title = this.props.location.state.recipe;
        const request = await fetch(`${baseURL}search?key=${API_KEY}&q=${title}`);

        const result = await request.json(); // "this save the result of fetching tha api as json"
        this.setState({
            selectedRecipe: result.recipes[0]
        });
    }
    
    render(){
        const recipe = this.state.selectedRecipe;

        return(
            <div className="container">
                <div>
                   <img className="" src={recipe.image_url} alt={recipe.title}/>
                   <h3 className="">{recipe.title}</h3>
                   <h4 className="">Publisher: <span>{recipe.publisher}</span></h4>
                   <p className="">
                   Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                   </p>
                   <button>
                       <Link to="/">Go Home</Link>
                   </button> 
                </div>
                
            </div>
        );
    }
};



export default Recipe;