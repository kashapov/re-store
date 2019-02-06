import React, { Component } from "react";
import "./BookList.css";
import BookListItem from "../BookListItem";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../Spinner";
class BookList extends Component {
  componentDidMount() {
    // recieve data
    const { bookstoreService, booksLoaded } = this.props;
    bookstoreService.getBooks().then(data => booksLoaded(data));

    // dispatch action to store
    //this.props.booksLoaded(data);
  }

  render() {
    const { books, loading } = this.props;

    if(loading) {
        return <Spinner />
    }
    return (
      <ul className="book-list">
        {books.map(book => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
