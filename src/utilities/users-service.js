// Service modules export business/app logic
// Such as managing tokens, etc.
// Service modules often depend upon API modules 
// for making AJAX requests to the server.

import * as usersAPI from './users-api';

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    return token;

}