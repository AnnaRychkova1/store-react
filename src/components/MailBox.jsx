// 1-st

// const MailBox = ({ username, messages }) => {
//   return (
//     <>
//       <p>Hello {username}</p>
//       {messages.length > 0 && <p>You have {messages.length} unread messages</p>}
//     </>
//   );
// };

// 2-nd

// const MailBox = ({ name, unreadMessages }) => {
//   return (
//     <div>
//       <p>Hello {name}</p>
//       <p>
//         {unreadMessages.length > 0
//           ? `You have ${unreadMessages.length} unread messages`
//           : 'No unread messages'}
//       </p>
//     </div>
//   );
// };

// 3-rd

const MessageList = ({ messages }) => (
  <ul>
    {messages.map((message, index) => {
      return <li key={index}>{message}</li>;
    })}
  </ul>
);

const MailBox = ({ username, messages }) => {
  return (
    <div>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <div>
          <p>You have {messages.length} unread messages</p>
          <MessageList messages={messages} />
        </div>
      ) : (
        <p>No unread messages</p>
      )}
    </div>
  );
};

export default MailBox;
