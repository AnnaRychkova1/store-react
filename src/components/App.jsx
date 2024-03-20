// 57 React Router Вкладені маршрути

import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { AppBar } from './AppBar';
import css from './App.module.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Products = lazy(() => import('./pages/Products'));
const Mission = lazy(() => import('./Mission'));
const Team = lazy(() => import('./Team'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div className={css.container}>
      <AppBar />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

// 56 React Router

// import { Routes, Route, NavLink } from 'react-router-dom';
// import clsx from 'clsx';
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import ProductDetails from './pages/ProductDetails';
// import NotFound from './pages/NotFound';
// import css from './App.module.css';

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

// export const App = () => {
//   return (
//     <div className={css.container}>
//       <header className={css.header}>
//         <p className={css.logo}>
//           <span role="img" aria-label="computer icon">
//             💻
//           </span>{' '}
//           GoMerch Store
//         </p>

//         <nav className={css.nav}>
//           <NavLink to="/" className={buildLinkClass}>
//             Home
//           </NavLink>
//           <NavLink to="/about" className={buildLinkClass}>
//             About
//           </NavLink>
//           <NavLink to="/products" className={buildLinkClass}>
//             Products
//           </NavLink>
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };

// 55

// import { UserMenu } from './UserMenu';

// const App = () => {
//   return (
//     <div>
//       <UserMenu />
//     </div>
//   );
// };

// 54 useRef Перенаправлення рефів

// import { useRef, useEffect, forwardRef } from 'react';

// const CustomButton = forwardRef((props, ref) => (
//   <button ref={ref}>{props.children}</button>
// ));

// CustomButton.displayName = 'CustomButton';

// function App() {
//   const btnRef = useRef();

//   useEffect(() => btnRef.current.focus(), []);

//   return (
//     <>
//       <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>
//       <button>One more</button>
//     </>
//   );
// }

// 53 useRef Відеоплеєр

// import { useRef } from 'react';

// const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };

// const Player = ({ source }) => {
//   const playerRef = useRef();

//   const play = () => playerRef.current.play();

//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video ref={playerRef} src={source}>
//         Sorry, your browser does not support embedded videos.
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };

// 54 useRef Відсутність реактивності

// import { useEffect, useRef } from 'react';

// const App = () => {
//   const valueRef = useRef(0);

//   useEffect(() => {
//     // Виконається лише один раз під час монтування.
//     // Наступні оновлення значення рефа не
//     // викличуть оновлення компонента
//     console.log(valueRef.current);
//   });

//   const handleClick = () => {
//     valueRef.current += 1;
//   };

//   return <button onClick={handleClick}>Click to update ref value</button>;
// };

// 53 useRef Життєвий цикл рефа

// import { useState, useRef, useEffect } from 'react';

// const App = () => {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   // Буде undefined на першому рендері
//   // і посиланням на DOM-елемент всі наступні
//   console.log('App: ', btnRef.current);

//   useEffect(() => {
//     // Ефект виконується після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log('useEffect: ', btnRef.current);
//   });

//   const handleClick = () => {
//     // Кліки будуть після монтування,
//     // тому завжди буде посиланням на DOM-елемент
//     console.log('handleClick: ', btnRef.current);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>
//         Update value to trigger re-render
//       </button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//     </>
//   );
// };

// 52 useRef Створення

// import { useRef } from 'react';

// const App = () => {
//   const btnRef = useRef();

//   return <button ref={btnRef}>Button with ref</button>;
// };

// 51  useMemo

// import { useMemo, useState } from 'react';

// const App = () => {
//   const [planets, setPlanets] = useState(['Earth', 'Mars', 'Jupiter', 'Venus']);
//   const [query, setQuery] = useState('');
//   const [clicks, setClicks] = useState(0);

//   const filteredPlanets = useMemo(
//     () => planets.filter(planet => planet.includes(query)),
//     [planets, query]
//   );

//   return (
//     <>
//       <button onClick={() => setClicks(clicks + 1)}>
//         Number of clicks: {clicks}
//       </button>
//       <ul>
//         {filteredPlanets.map(planet => (
//           <li key={planet}>{planet}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// 50 Пошук через форму

// import { fetchArticlesWithTopic } from '../articles-api.js';
// import { useState } from 'react';
// import ArticleList from './ArticleList/ArticleList.jsx';
// import { SearchForm } from './SearchForm/SearchForm.jsx';

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const onSetSearchQuery = async topic => {
//     try {
//       setArticles([]);
//       setError(false);
//       setLoading(true);
//       const { data } = await fetchArticlesWithTopic(topic);

//       setArticles(data.hits);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSetSearchQuery={onSetSearchQuery} />
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// 49 Пошук через форму

// import { fetchArticlesWithTopic } from '../articles-api.js';
// import { useState } from 'react';
// import ArticleList from './ArticleList/ArticleList.jsx';
// import { SearchForm } from './SearchForm/SearchForm.jsx';

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSearch = async topic => {
//     try {
//       setArticles([]);
//       setError(false);
//       setLoading(true);
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data.data.hits);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// 48 Поділ відповідальності

// import { fetchArticlesWithTopic } from '../articles-api.js';
// import { useEffect, useState } from 'react';
// import ArticleList from './ArticleList/ArticleList.jsx';

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         setLoading(true);
//         // 2. Використовуємо HTTP-функцію
//         const data = await fetchArticlesWithTopic('react');
//         setArticles(data.data.hits);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// 47  catch error HTTP-запити

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const ArticleList = ({ items }) => (
//     <ul>
//       {items.map(({ objectID, url, title }) => (
//         <li key={objectID}>
//           <a href={url} target="_blank" rel="noreferrer noopener">
//             {title}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           'https://hn.algolia.com/api/v1/search?query=react'
//         );
//         setArticles(response.data.hits);
//       } catch (error) {
//         // Встановлюємо стан error в true
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// 46 Loader HTTP-запити

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const ArticleList = ({ items }) => (
//   <ul>
//     {items.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         // 1. Встановлюємо індикатор в true перед запитом
//         setLoading(true);
//         const response = await axios.get(
//           'https://hn.algolia.com/api/v1/search?query=react'
//         );
//         setArticles(response.data.hits);
//       } catch (error) {
//         // Тут будемо обробляти помилку
//       } finally {
//         // 2. Встановлюємо індикатор в false після запиту
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// 45 HTTP-запити

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const ArticleList = ({ items }) => (
//   <ul>
//     {items.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// const App = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         'https://hn.algolia.com/api/v1/search?query=react'
//       );
//       setArticles(response.data.hits);
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// 44 HTTP-запити

// import { useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   useEffect(() => {
//     async function fetchArticles() {
//       const response = await axios.get(
//         'https://hn.algolia.com/api/v1/search?query=react'
//       );
//       console.log(response);
//     }

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h1>Latest articles</h1>
//     </div>
//   );
// };

// 43 Formik library

// import { Formik, Field, ErrorMessage, Form } from 'formik';
// import { useId } from 'react';
// import * as Yup from 'yup';

// const App = () => {
//   return (
//     <div>
//       <FeedbackForm />
//     </div>
//   );
// };

// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string().email('Must be a valid email!').required('Required'),
//   message: Yup.string()
//     .min(3, 'Too short')
//     .max(256, 'Too long')
//     .matches(/^[a-zA-Z0-9\s.,]*$/, 'Invalid characters')
//     .required('Required'),
//   level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
// });

// const initialValues = {
//   username: '',
//   email: '',
//   message: '',
//   level: 'good',
// };

// const FeedbackForm = () => {
//   const nameFieldId = useId();
//   const emailFieldId = useId();
//   const msgFieldId = useId();
//   const levelFieldId = useId();

//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={FeedbackSchema}
//     >
//       <Form>
//         <div>
//           <label htmlFor={nameFieldId}>Username</label>
//           <Field type="text" name="username" id={nameFieldId} />
//           <ErrorMessage name="username" component="span" />
//         </div>

//         <div>
//           <label htmlFor={emailFieldId}>Email</label>
//           <Field type="email" name="email" id={emailFieldId} />
//           <ErrorMessage name="email" component="span" />
//         </div>

//         <div>
//           <label htmlFor={msgFieldId}>Message</label>
//           <Field as="textarea" name="message" id={msgFieldId} rows="5" />
//           <ErrorMessage name="message" component="span" />
//         </div>

//         <div>
//           <label htmlFor={levelFieldId}>Service satisfaction level</label>
//           <Field as="select" name="level" id={levelFieldId}>
//             <option value="good">Good</option>
//             <option value="neutral">Neutral</option>
//             <option value="bad">Bad</option>
//           </Field>
//           <ErrorMessage name="level" component="span" />
//         </div>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// 42 collection elements

// import TaskList from './TaskList/TaskList';
// import initialTasks from '../tasks.json';
// import Form from './Form/Form';
// import Filter from './Filter/Filter';
// import { useState } from 'react';

// function App() {
//   const [tasks, setTasks] = useState(initialTasks);
//   const [filter, setFilter] = useState('');

//   const addTask = newTask => {
//     setTasks(prevTasks => {
//       return [...prevTasks, newTask];
//     });
//   };

//   const deleteTask = taskId => {
//     setTasks(prevTasks => {
//       return prevTasks.filter(task => task.id !== taskId);
//     });
//   };

//   const visibleTasks = tasks.filter(task =>
//     task.text.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
//       <Form onAdd={addTask} />
//       <Filter value={filter} onFilter={setFilter} />
//       <TaskList tasks={visibleTasks} onDelete={deleteTask} />
//     </div>
//   );
// }

// 41 контрольована форма(4)

// import LoginForm from './LoginForm';

// const App = () => {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// };

// 40 checkbox

// import { useState } from 'react';

// const App = () => {
//   const [hasAccepted, setHasAccepted] = useState(false);

//   const handleChange = evt => {
//     setHasAccepted(evt.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="terms"
//           checked={hasAccepted}
//           onChange={handleChange}
//         />
//         I accept terms and conditions
//       </label>
//       <button type="button" disabled={hasAccepted}>
//         Proceed
//       </button>
//     </div>
//   );
// };

// 39 radio-button

// import { useState } from 'react';

// const App = () => {
//   const [coffeeSize, setCoffeeSize] = useState('sm');

//   const handleSizeChange = evt => {
//     setCoffeeSize(evt.target.value);
//   };

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === 'sm'}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === 'md'}
//           onChange={handleSizeChange}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === 'lg'}
//           onChange={handleSizeChange}
//         />
//         Large
//       </label>
//     </>
//   );
// };

// 38 select (2)

// import { useState } from 'react';
// import LangSwitcher from './LangSwitcher';

// const App = () => {
//   const [lang, setLang] = useState('uk');

//   return (
//     <>
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </>
//   );
// };

// 37 select (1)

// import LangSwitcher from './LangSwitcher';

// const App = () => {
//   return (
//     <div>
//       <LangSwitcher />
//     </div>
//   );
// };

// 36 input

// import SearchBar from './SearchBar';

// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };

// 35 useId

// import LoginForm from './LoginForm';

// const App = () => {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// };

// 34 useId

// import MyComponent from './MyComponent';

// const App = () => {
//   return (
//     <div>
//       <MyComponent />
//     </div>
//   );
// };

// 33 forms (2)

// import LoginForm from './LoginForm';

// const App = () => {
//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = userData => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   return (
//     <div>
//       <h1>Please login to your account!</h1>
//       {/* Передаємо колбек як пропс форми */}
//       <LoginForm onSubmit={handleLogin} />
//     </div>
//   );
// };

// 32 forms  (1)

// import LoginForm from './LoginForm';

// const App = () => {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// };

// 31 LocalStorage

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem('saved-clicks');
//     if (savedClicks !== null) {
//       return savedClicks;
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem('saved-clicks', clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(Number(clicks) + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// 30  LocalStorage

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     window.localStorage.setItem('saved-clicks', clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// 29

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// 28

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log('First updated: ', first);
//   }, [first]);

//   useEffect(() => {
//     console.log('Second updated: ', second);
//   }, [second]);

//   useEffect(() => {
//     console.log('First or second updated: ', first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

// 27

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log('You can see me only once!');
//   }, []);

//   useEffect(() => {
//     console.log('Clicks updated: ', clicks);
//   }, [clicks]);

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// 26

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ❌ Ефект записаний з помилкою!
//   useEffect(() => {
//     console.log('Clicks updated: ', clicks);
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ✅ Залежності вказані правильно
//   useEffect(() => {
//     console.log('Clicks updated: ', clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// 25

// import { useState, useEffect } from 'react';

// const Modal = () => {
//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Close' : 'Open'}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// 24

// import { useState, useEffect } from 'react';

// const App = () => {
//   useEffect(() => {
//     console.log('Effect');

//     return () => {
//       console.log('Clean up');
//     };
//   });

//   return <div>App</div>;
// };

// 23

// import { useState, useEffect } from 'react';

// const Modal = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Close' : 'Open'}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// 22

// import { useState, useEffect } from 'react';

// const App = () => {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);
//   }, []);

//   return <div>App</div>;
// };

// 21

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log('You can see me only once!');
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// 20

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Оголошуємо ефект
//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// 19

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// 18

// import { useState } from 'react';

// const App = () => {
//   const [username, setUsername] = useState('');
//   const [valiue, setValue] = useState(0);
// };

// 17

// import { useState } from 'react';

// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

// 16

// import { useState } from 'react';

// // ClickCounter отримує функцію onUpdate (ім'я пропа),
// // яка викликається під час події onClick
// const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}>Current: {value}</button>;
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Функція, яку будемо передавати в ClickCounter
//   // для виклику під час кліку
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// 15

// import { useState } from 'react';

// const ClickCounter = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// };

// 14

// import { useState } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

// 13

// import { useState } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// 12

// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };

// 11

// const App = () => {
//   const handleClick = evt => {
//     console.log(evt);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={evt => console.log(evt)}>Second button</button>
//     </>
//   );
// };

// 10

// const App = () => {
//   const handleClick = () => {
//     alert("I'm a button!");
//   };

//   return <button onClick={handleClick}>Click me!</button>;
// };

// const App = () => {
//   return <button onClick={() => alert('You clicked me!')}>Click me!</button>;
// };

// 9

// import { Alert } from './Alert';
// import { AiOutlineGithub } from 'react-icons/ai';
// import './AiOutlineGithub.css';

// const App = () => {
//   return (
//     <>
//       <AiOutlineGithub className="icon" size="24" />
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
//       <Alert variant="success" outlined>
//         Check outlined
//       </Alert>
//       <Alert variant="info" elevated>
//         Check elevated
//       </Alert>
//     </>
//   );
// };

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
