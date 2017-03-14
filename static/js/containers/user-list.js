/**
 * Created by jainhub on 14/03/2017 AD.
 */


import React, {Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from 'redux'
import {getUser} from "../actions"

class List extends Component{


    getItems(){
        return this.props.users.map((user) => {
            return <li
                key={user.id}
                onClick={() => this.props.getUser(user)}
                className="user-list"
            >
                {user.first} {user.last}
            </li>
        })
    }

    render(){
        return <ul>{this.getItems()}</ul>
    }
}


function mapStateToProps(state) {
    return {
        users: state.users
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({getUser: getUser}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(List);