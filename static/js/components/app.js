/**
 * Created by jainhub on 14/03/2017 AD.
 */
import React, {Component} from "react"
import UserList from "../containers/user-list"
import UserDetail from "../containers/user-detail"



class App extends Component{
    render(){
        return (
            <div className="app">
                <h1>App Users</h1>
                <UserList />
                <br/>
                <h3>App User Detail</h3>
                <UserDetail />
            </div>
        )
    }
}


export default App;