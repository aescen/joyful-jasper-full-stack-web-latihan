import { useState, useEffect, createContext } from "react";
import axios from "axios";
import {URL} from '../api'

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user] = useState({
    createdAt: "",
    username: "",
    avatar: "",
    email: "",
    password: "",
    id: "",
  });

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(URL.getUsers());
      const data = res.data;
      console.log("res: ", res);
      console.log("data: ", data);
      setUserData(data);
    };

    getData();
  }, []);

  return (
    /* pass object of data to value */
    <UserContext.Provider value={{ user, userData }}>
      {/* or pass object directly */}
      {/* <UserContext.Provider value={ user }> */}
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
