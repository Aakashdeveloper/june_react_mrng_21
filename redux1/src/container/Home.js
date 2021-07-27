import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actions/actionfile';
import DisplayComponent from '../component/DisplayComponent';

class Home extends Component {
    //call action 
    componentDidMount(){
        this.props.dispatch(moviesList())
    }

    render(){
        return(
            <div>
                <h1>My Movies</h1>
                <DisplayComponent datalist={this.props.mydata}/>
            </div>
        )
    }
}

// we receive the updated state from store

function mapStateToProps(state){
    return{
        mydata:state.films
    }
}


export default connect(mapStateToProps)(Home)