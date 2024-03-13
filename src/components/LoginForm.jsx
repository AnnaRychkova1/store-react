// 4 контрольована форма

// import { useState } from 'react';

// const LoginForm = () => {
//   const [values, setValues] = useState({
//     login: '',
//     password: '',
//   });

//   const handleChange = evt => {
//     setValues({
//       ...values,
//       [evt.target.name]: evt.target.value,
//     });
//     console.log(evt.target.value);
//     console.log(evt.target.name);
//   };

//   const handleSumit = evt => {
//     evt.preventDefault();

//     console.log(values);

//     setValues({
//       login: '',
//       password: '',
//     });
//   };

//   return (
//     <form onSubmit={handleSumit}>
//       <input
//         type="text"
//         name="login"
//         value={values.login}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

// 3

// import { useId } from 'react';

// const LoginForm = () => {
//   const loginId = useId();
//   const passwordId = useId();
//   //   console.log(loginId, passwordId);

//   return (
//     <form>
//       <label htmlFor={loginId}>Login</label>
//       <input type="text" name="login" id={loginId} />

//       <label htmlFor={passwordId}>Password</label>
//       <input type="password" name="password" id={passwordId} />

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

// 2

// const LoginForm = ({ onSubmit }) => {
//   const handleSubmit = evt => {
//     evt.preventDefault();

//     const form = evt.target;
//     const { login, password } = form.elements;

//     // Викликаємо пропс onSubmit
//     onSubmit({
//       login: login.value,
//       password: password.value,
//     });

//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

// 1

// const LoginForm = () => {
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(evt);
//     const form = evt.target;
//     const { login, password } = form.elements;

//     // Посилання на DOM-елементи
//     console.log(login, password);

//     // Значення полів
//     console.log(login.value, password.value);

//     // Скидаємо значення полів після відправки
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
