import React,{Fragment, Component} from 'react';
import './Header.css';

// class component
class Header extends Component {
    constructor(){
        super()

        this.state={
            title:'My React App',
            keyword: 'user input here'
        }
    }

    handleChange=(event)=>{
        console.log(event.target.value)
        this.setState({keyword:event.target.value})
    }

    render(){
        console.log("inside render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                    <hr/>
                </header>
            </Fragment>
        ) 
    }
}

export default Header;