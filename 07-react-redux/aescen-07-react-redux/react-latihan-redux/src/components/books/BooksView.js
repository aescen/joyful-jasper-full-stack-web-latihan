import { useSelector, useDispatch } from "react-redux";
import { borrow } from "./BooksSlice";

function BooksView() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);

  return (
    <div>
      <h1>BooksView</h1>
      <p>Total books: {books.totalBooks}</p>
      <p>Total authors: {books.totalAuthors}</p>
      <button onClick={() => dispatch(borrow())}>Borrow 1 book</button>
    </div>
  );
}

export default BooksView;
