import React from 'react';
import { useHistory } from "react-router-dom";

const UserPage = ({ SignOut }) => {
    let history = useHistory();
    
    return (
        <div style={{marginTop: "400px"}}>
            <button onClick={() => SignOut(history.push("/"))}>Sign out</button>
        </div>
    );
}

export default UserPage;