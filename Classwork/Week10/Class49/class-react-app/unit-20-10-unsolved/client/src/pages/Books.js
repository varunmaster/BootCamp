import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  //when the user clicks on submit, the onClick function will come here and it will create an object called bookData which has the SAME properties as the book model and submit that to the API.saveBook. once it is added, we need to now refresh the page and we can do this by calling the loadBooks() method
  handleFormSubmit = event => {
    event.preventDefault();
    const bookData = {
      title: this.state.title,
      author: this.state.author,
      synopsis: this.state.synopsis
    };
    API.saveBook(bookData).then(res => {
      this.loadBooks();
    }).catch(err => console.log(err));
  };

  de

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" onChange={this.handleInputChange} placeholder="Title (required)" />
              <Input name="author" onChange={this.handleInputChange} placeholder="Author (required)" />
              <TextArea name="synopsis" onChange={this.handleInputChange} placeholder="Synopsis (Optional)" />
              <FormBtn onClick={this.handleFormSubmit}>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)}/> {/*we cannot use the this.handleDelete directly bc we need to pass in a book id parameter and if we did this.handleDelete(this.book._id) then it would delete the book as soon as the page renders so we must use anon function*/}
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
