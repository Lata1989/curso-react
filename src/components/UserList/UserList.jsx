import { useFetchData } from "../../hooks/useFetchData";
import PropTypes from 'prop-types';

export const UserList = ({ endPoint }) => {

    // Se reemplaza en el customHook
    /*
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
            const data = await response.json();
            console.log(data);
            setData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect( () => {fetchData()}, [endPoint])
    */


    // customHooks
    const {data, isLoading} = useFetchData({endPoint});

    return (
        <>
            <ul>
                {/* {users.map(user => <li key={user.id}>Nombre: {user.name} - Usuario: {user.username}</li>)} */}
                {isLoading ? <p>Cargando...</p> : endPoint == 'users' ? data.map(item => <li key={item.id}>{item.name}</li>) :
                    data.map(item => <li key={item.id}>{item.body}</li>)}
            </ul>
        </>
    );


}

UserList.propTypes = {
    endPoint: PropTypes.string.isRequired,
}