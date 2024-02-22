// 10 with Alert.modules.css and clsx library

import clsx from 'clsx';
import css from './Alert.module.css';

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

// 9 with Alert.modules.css

// import css from './Alert.module.css';

// export const Alert = ({ variant, children }) => {
//   return <p className={css[variant]}>{children}</p>;
// };

// 8

// import clsx from 'clsx';
// import './Alert.css';

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx('alert', variant, {
//         'is-outlined': outlined,
//         'is-elevated': elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };

// 7

// import clsx from 'clsx';
// import './Alert.css';

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         'alert',
//         variant,
//         outlined && 'is-outlined',
//         elevated && 'is-elevated'
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// 6

// import './Alert.css';

// export const Alert = ({ variant, children }) => {
//   const classNames = ['alert', variant];

//   return <p className={classNames.join(' ')}>{children}</p>;
// };

// export default Alert;

// 5

// import './Alert.css';

// const getBgColor = variant => {
//   switch (variant) {
//     case 'info':
//       return 'blue';
//     case 'success':
//       return 'green';
//     case 'error':
//       return 'red';
//     case 'warning':
//       return 'orange';
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

// export const Alert = ({ variant, children }) => {
//   return (
//     <p
//       className="alert"
//       style={{
//         backgroundColor: getBgColor(variant),
//       }}
//     >
//       {children}
//     </p>
//   );
// };

// 4

// const alertStyles = {
//   margin: 8,
//   padding: '12px 16px',
//   borderRadius: 4,
//   color: 'white',
// };

// const getBgColor = variant => {
//   switch (variant) {
//     case 'info':
//       return 'blue';
//     case 'success':
//       return 'green';
//     case 'error':
//       return 'red';
//     case 'warning':
//       return 'orange';
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

// export const Alert = ({ variant, children }) => {
//   return (
//     <p
//       style={{
//         ...alertStyles,
//         backgroundColor: getBgColor(variant),
//       }}
//     >
//       {children}
//     </p>
//   );
// };

// 3

// const alertStyles = {
//   margin: 8,
//   padding: '12px 16px',
//   borderRadius: 4,
//   backgroundColor: 'gray',
//   color: 'white',
// };

// onst Alert = ({ children }) => {
//   return <p style={alertStyles}>{children}</p>;
// };

// export default Alert;
