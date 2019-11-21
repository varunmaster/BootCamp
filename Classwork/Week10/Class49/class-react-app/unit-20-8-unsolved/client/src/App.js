import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = { //state is for anything you want to update on the DOM or the UI. variable is something you want to use later on
    recipes: [],
    recipeSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value //we use square brackets bc we can dynamically change the property name
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch) //getRecipes is a function (that is exported) from the API file
      .then(res => {
        console.log(res.data);
        this.setState({ recipes: res.data }); //this will contain all of the response from the API. it will be an array of objects
      })
      .catch(err => console.log(err));
  };

  //any change in UI will call render()
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                  <RecipeList>
                    {this.state.recipes.map(recipe => {
                      return (
                        <RecipeListItem
                          key={recipe.title}
                          title={recipe.title}
                          href={recipe.href}
                          ingredients={recipe.ingredients}
                          thumbnail={recipe.thumbnail}
                        />
                      );
                    })}
                  </RecipeList>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
