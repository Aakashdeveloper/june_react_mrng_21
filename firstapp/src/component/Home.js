import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    /*
    var a = [3,5,6,2,4,5,8,7,9,3]
    a.filter((data) => {return data>4})
    */
    filterNews = (userInput) => {
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
        })

        this.setState({filtered:output})
    }
    render(){
        return (
            <>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsDisplay newsData={this.state.filtered}/>
                <Footer year="2021" month="July"/>
            </>
        )
    }
}

export default Home;

// home is parent
// header and footer is child