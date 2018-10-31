import React from 'react';

const Form = (props) => (
    <form onSubmit={props.getRecipe} style={{marginBottom: "2rem"}}>
        <input className="" type="text" name="recipeName" required/>
        <button className="">search</button>
    </form>
);



export default Form;