/**
 * Created by jainhub on 14/03/2017 AD.
 */


export default function (state = null, action) {
    switch(action.type){
        case 'GET_USER':
            return action.payload;
            break;
    }
    return state;
}