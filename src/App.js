import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Item from "./components/Item";

import "./App.css";
import { addUser } from "./features/user";

import { fakeList } from "./fakeData/fakeData";
function App() {
  const [name, setName] = useState("1");
  const [age, setAge] = useState();
  const [gender, setGender] = useState(false);
  const [email, setEmail] = useState("2");
  const [id,setid] = useState(5)
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="name..."
      />
      <input
        type="text"
        onChange={(e) => {
          setAge(e.target.value);
        }}
        placeholder="Age..."
      />
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="email..."
      />
      <input
        type="text"
        onChange={(e) => {
          setGender(e.target.value);
        }}
        placeholder="gender..."
      />
      <button
        className="btn btn-primary"
        onClick={() => {setid(id+1);console.log(fakeList.length)
          dispatch(
            addUser({
              name,
              age,
              email,
              gender,
              id
            })
          );
        }}
      >增加传入用户</button>
      <Item></Item>
    </div>
  );
}

export default App;
