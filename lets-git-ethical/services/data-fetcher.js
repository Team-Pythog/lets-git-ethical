import axios from 'axios'


export const apiUrl = 'https://lets-git-ethical-backend.herokuapp.com/'


// get a JSON Web Token from server
export async function getToken(values) {
    const url = "https://lets-git-ethical-backend.herokuapp.com/token-auth/";

    const response = await axios.post(url, values);

    // const refreshUrl = "https://lets-git-ethical-backend.herokuapp.com/token-auth/refresh";

    // const refreshResponse = await axios.post(refreshUrl, { refresh: response.data.refresh });

    // return refreshResponse.data.access;
}

// GET from API with authentication
export async function fetchWithToken(url, token) {

    const config = makeConfig(token);

    const response = await axios.get(url, config);

    // const stands = response.data.map(info => new CookieStand(info));

    // // Sort alphabetically
    // stands.sort((a, b) => {
    //     if (a.location < b.location) return -1;
    //     if (a.location > b.location) return 1;
    //     return 0;
    // });

    return stands;
}
