const initialState = {
  books: [
    { id: 1, title: "name 1", author: "author 1" },
    { id: 2, title: "name 2", author: "author 2" }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
