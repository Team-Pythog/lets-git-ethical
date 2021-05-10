import axios from 'axios'


export const apiUrl = 'https://lets-git-ethical-be.herokuapp.com/'

export class Dilemma {

    constructor(info) {
        this.id = info.id;
        this.title = info.title;
        this.image = info.image;
        this.text = info.text;
        this.response_0 = info.response_0;
        this.response_1 = info.response_1;
    }

    // static fromValues(values) {
    //     const info = {
    //         id: -1, // will be overwritten once cache revalidates
    //         location: values.location,
    //         minimum_customers_per_hour: values.min,
    //         maximum_customers_per_hour: values.max,
    //         average_cookies_per_sale: values.avg,
    //     }

    //     return new Dilemma(info);
    // }
}


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

    const dilemmas = response.data.map(info => new Dilemma(info));

    // Sort alphabetically
    // dilemmas.sort((a, b) => {
    //     if (a.location < b.location) return -1;
    //     if (a.location > b.location) return 1;
    //     return 0;
    // });

    return dilemmas;
}
