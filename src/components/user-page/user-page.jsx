import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from "../../actions/actionCreator";

const UserPage = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.login);
  alert(login);
  const handleClick = () => {
    dispatch(loginRequest("", false));
  };

  return (
    <div style={{ marginTop: "400px" }}>
      <button onClick={handleClick}>Sign out</button>
    </div>
  );
};

export default UserPage;
