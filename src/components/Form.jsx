import React from 'react';

const Form = (props) => (
    <form onSubmit={props.getRecipe} style={{marginBottom: "2rem"}}>
        <input className="" type="text" name="recipeName"/>
        <button className="">search</button>
    </form>
);



export default Form;