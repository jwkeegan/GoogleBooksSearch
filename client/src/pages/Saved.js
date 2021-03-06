import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    deleteBook = (id) => {
        API.deleteBook(id)
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="lg-12 md-12 sm-12">
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>
                                        <a href={book.link}>
                                            <strong>
                                                {book.title} by {book.author}
                                            </strong>
                                        </a>
                                        <hr></hr>
                                        <div>
                                            <img src={book.image} alt="" style={{ float: "left", marginRight: "10px" }}></img>
                                            <p>{book.description}</p>
                                        </div>
                                        <button className="btn btn-danger" style={{ float: "right" }} onClick={() => this.deleteBook(book._id)}>Delete Book</button>
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

export default Saved;
