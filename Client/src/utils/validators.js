import { isValidUsername } from "6pp";

export const usernameValidator = (username) => {
    if (!isValidUsername(username))
        return { invalid: false, errorMessage: 'Username is invalid' };
}

var a = "samna"


