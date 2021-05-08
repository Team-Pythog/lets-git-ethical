import { useState } from 'react'
import { getToken } from '../services/data-fetcher'
import Homepage from '../components/homepage'

export default function Home() {

    const [token, setToken] = useState();

    const [username, setUsername] = useState('');

    async function loginHandler(values) {

        const fetchedToken = await getToken(values);

        setToken(fetchedToken);

        setUsername(values.username);
    }

    function logoutHandler() {
        setToken(null);
    }

    // if (!token) return <h2>Login</h2>

    return <Homepage />
}


