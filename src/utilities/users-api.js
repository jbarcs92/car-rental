const BASE_URL = '/api/users';

export async function signUp(userData) {
    //Fetch uses an options objects as a second argument
    //to make requests other than GET, include data
    //set headers

    const res = await fetch(BASE_URL, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    }) ;
    // Check if request was successful
    if (res.ok) {
        //res.json() will resolve to the JWT
        return res.json();
    } else {
        throw new Error('Invalid Sign Up');
    }
}