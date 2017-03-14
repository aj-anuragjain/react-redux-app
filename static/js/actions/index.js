/**
 * Created by jainhub on 14/03/2017 AD.
 */

export const getUser = (user) => {
    console.log("You select user: ", user.first);
    return {
        type: "GET_USER",
        payload: user
    }
}