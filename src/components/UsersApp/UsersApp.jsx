import { useState } from "react";
import { UserList } from "../UserList/UserList";

export const UsersApp = () => {

    // useEffect(() => { 
    //     fetchUsers() 
    // }, []);

    const [endPoint, setEndPoint] = useState('users')

    const handleFetch = () => {
        // fetchUsers();
        if (endPoint == 'users') {
            setEndPoint('comments')
        } else {
            setEndPoint('users')

        }
    }

    return (
        <>
            <h1>Lista de usuarios: </h1>

            <UserList endPoint={endPoint}></UserList>
            <button onClick={handleFetch}>Mostrar usuarios</button>
        </>
    );
}