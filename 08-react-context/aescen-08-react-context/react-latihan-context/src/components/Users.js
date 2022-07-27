import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const User = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <h1>Halaman Users (useContext)</h1>
      {userData.length === 0 ? <p>Loading...</p> : userData.map((item) => <p>{item.name}</p>)}
    </div>
  );
};

export default User;
