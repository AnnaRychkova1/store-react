// 9

import { Alert } from './Alert';
import { AiOutlineGithub } from 'react-icons/ai';
import './AiOutlineGithub.css';

const App = () => {
  return (
    <>
      <AiOutlineGithub className="icon" size="24" />
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
      <Alert variant="success" outlined>
        Check outlined
      </Alert>
      <Alert variant="info" elevated>
        Check elevated
      </Alert>
    </>
  );
};

// 8

// import { Alert } from './Alert';

// const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };

// 7

// import { Alert } from './Alert';

// const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success" outlined="true">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//       <Alert elevated="true">Check outlined</Alert>
//       <Alert outlined="true">Check elevated</Alert>
//     </>
//   );
// };

// 4, 5, 6

// import { Alert } from './Alert';

// const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success is-outlined">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//       <Alert variant="is-outlined">Check outlined</Alert>
//       <Alert variant="is-elevated">Check elevated</Alert>
//     </>
//   );
// };

// 3

// import { Alert } from './Alert';

// const App = () => {
//   return (
//     <>
//       <Alert>Please update your email!</Alert>
//       <Alert>There was an error during transaction!</Alert>
//       <Alert>Payment received, thank you for your purchase!</Alert>
//     </>
//   );
// };

// 2

// const alertStyles = {
//   margin: 8,
//   padding: '12px 16px',
//   borderRadius: 4,
//   backgroundColor: 'gray',
//   color: 'white',
// };

// const App = () => {
//   return (
//     <>
//       <p style={alertStyles}>Please update your email!</p>
//       <p style={alertStyles}>There was an error during transaction!</p>
//       <p style={alertStyles}>Payment received, thank you for your purchase!</p>
//     </>
//   );
// };

// 1

// const App = () => {
//   return (
//     <p
//       style={{
//         margin: 8,
//         padding: '12px 16px',
//         borderRadius: 4,
//         backgroundColor: 'gray',
//         color: 'white',
//       }}
//     >
//       Please update your email!
//     </p>
//   );
// };

// import Product from './Product';
// import MailBox from './MailBox';
// import BookList from './BookList';

// const favouriteBooks = [
//   { id: 'id-1', name: 'JS for beginners' },
//   { id: 'id-2', name: 'React basics' },
//   { id: 'id-3', name: 'React Router overview' },
// ];

// function App() {
//   return (
//     <div>
//       <BookList books={favouriteBooks} />
//       <MailBox
//         username="Anna"
//         messages={['Hi, i am your friend', 'Hi, My name is Bob']}
//       />
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//         isOnSale={false}
//       />
//     </div>
//   );
// }

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
