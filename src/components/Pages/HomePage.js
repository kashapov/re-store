import React from "react";
import BookList from "../BookList";

const HomePage = () => {
  const books = [
    { id: 1, title: "name 1", author: "author 1" },
    { id: 2, title: "name 2", author: "author 2" }
  ];
  return <BookList books={books} />;
};

export default HomePage;
