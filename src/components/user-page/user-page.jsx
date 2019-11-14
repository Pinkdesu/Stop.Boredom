import React from 'react';
import { useHistory } from "react-router-dom";

const UserPage = ({ signOut }) => {
    let history = useHistory();
    
    return (
        <div style={{marginTop: "400px"}}>
            <button onClick={() => signOut(() => history.push("/"))}>Sign out</button>
        </div>
    );
}

export default UserPage;