/**
 * Created by jainhub on 14/03/2017 AD.
 */


import React, {Component} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"


class Detail extends Component{
    render(){
        if(!this.props.user){
            return <div>Select a user...</div>
        }
        return (<div>
            <img src={this.props.user.thumbnail} />
            <div>{this.props.user.first} {this.props.user.last}</div>
            <div>Age: {this.props.user.age}</div>
            <div>Description: {this.props.user.description}</div>
        </div>)
    }
}


function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}


export default connect(mapStateToProps)(Detail);