import { UserContext } from "../../context/UserContext";

const User = () => (
  <UserContext.Consumer>
    {(context) => {
      const { user } = context;
      return <div>{user.username}</div>;
    }}
  </UserContext.Consumer>
);

export default User;
