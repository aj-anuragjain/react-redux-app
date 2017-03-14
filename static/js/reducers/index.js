/**
 * Created by jainhub on 14/03/2017 AD.
 */

import {combineReducers} from "redux"
import userActiveReducer from "./reducer-user-active"
import usersList from "./reducer-users"

export default combineReducers({
    activeUser: userActiveReducer,
    users: usersList
});
