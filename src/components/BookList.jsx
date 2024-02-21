const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
};

// const BookList = ({ books }) => (
//   <ul>
//     {books.map((book, index) => {
//       return <li key={index}>{book.name}</li>;
//     })}
//   </ul>
// );

export default BookList;
