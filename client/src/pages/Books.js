import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

require("dotenv").config({ path: "../" });
const test = process.env.API_KEY;
const axios = require("axios");
const API_KEY = "AIzaSyAHpogOfKyZzmg9DlwQ8_i6VABJAYomvjw";

class Books extends Component {
    state = {
        books: []
    };

    componentDidMount() {

    }

    searchBook = (event) => {
        event.preventDefault();
        let query = "https://www.googleapis.com/books/v1/volumes?q=";
        query += document.getElementById("book-title").value;
        query += "&key=" + API_KEY;
        console.log(query);
        console.log(API_KEY);
        console.log(test);

        axios({
            url: query,
            method: "GET"
        })
            .then(result => {
                this.setState({ books: result.data.items });
                console.log(result.data.items);
            })
            .catch(err => console.log(err));
    }

    saveBook = (book) => {
        API.saveBook({
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors.join(", "),
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.previewLink,
        });
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12 lg-12 sm-12">
                        <form>
                            <h2>Book Search</h2>
                            <div className="form-group">
                                <label htmlFor="book-title">Book</label>
                                <Input type="text" id="book-title" placeholder="Title" />
                            </div>
                            <FormBtn onClick={this.searchBook}>Search</FormBtn>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12 lg-12 sm-12">
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book.id}>
                                        <a href={book.volumeInfo.previewLink}>
                                            <strong>
                                                {book.volumeInfo.title} by {book.volumeInfo.authors.join(", ")}
                                            </strong>
                                        </a>
                                        <hr></hr>
                                        <div>
                                            <img src={book.volumeInfo.imageLinks.thumbnail} alt="" style={{ float: "left", marginRight: "10px" }}></img>
                                            <p>{book.volumeInfo.description}</p>
                                        </div>
                                        <button className="btn btn-primary" onClick={() => this.saveBook(book)}>Save Book</button>
                                    </ListItem>
                                ))}
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
