import Product from './Product';
import MailBox from './MailBox';
import BookList from './BookList';

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
];

function App() {
  return (
    <div>
      <BookList books={favouriteBooks} />
      <MailBox
        username="Anna"
        messages={['Hi, i am your friend', 'Hi, My name is Bob']}
      />
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
        isOnSale={false}
      />
    </div>
  );
}

// const App = () => {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <BookList books={favouriteBooks} />
//     </>
//   );
// };

// import MailBox from './MailBox';

// function App() {
//   return (
//     <div>
//       <MailBox
//         username="Anna"
//         messages={['Hi, i am your friend', 'Hi, My name is Bob']}
//       />
//     </div>
//   );
// }

// 2-ns MailBox

// function App() {
//   return (
//     <div>
//       <MailBox
//         username="Anna"
//         unreadMessages={['Hi, i am your friend', 'Hi, My name is Bob']}
//       />
//     </div>
//   );
// }

export default App;
