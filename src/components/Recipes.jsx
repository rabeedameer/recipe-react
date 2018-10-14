import React from 'react';
import { Row, Col ,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Recipes = props => (
    <Row>
        {props.recipes.map((recipe) =>{
          return (
            
                <Col sm="3" key={recipe.recipe_id} >
                    <Card key={recipe.recipe_id}>
                        <CardImg className="cardImage" src={recipe.image_url} />
                        <CardBody>
                            <CardTitle>{recipe.title}</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>{recipe.title}</CardText>
                            <Button>
                               <Link to={{pathname: `/recipe/${recipe.recipe_id}`}}>
                               View Recipe 
                               </Link>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            
          );
        })}
    </Row>
);




export default Recipes;