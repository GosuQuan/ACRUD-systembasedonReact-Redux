import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./item.css";
import { removeUser } from "./../features/user";
function Item() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <div>
      {user.map((item) => {
        const { name, email, age, gender, id } = item;
        return (
          <div className="userInfo">
            <h1 className="name">Name:{name}</h1>
            <h1 className="email">Email:{email}</h1>
            <h1 className="age">Age:{age}</h1>
            <h1 className="gender">Gender:{gender ? "female" : "male"}</h1>
            <h1 className="gender">id:{id}</h1>
            <div className="btn-set">
              <button className="btn btn-primary">Upgrade The Info</button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => dispatch(removeUser(item))}
              >
                DELETE THE INFO
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Item;
