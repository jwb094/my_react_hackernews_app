import React, { Component } from 'react';
//import Cat from  '../components/list';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }
    componentDidMount(){
    //    let a;
     //const result =  fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
     //.then((resp) => resp.json());
     //console.log(result);
     const result = fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
     .then(result => result.json())
     .then(result => {
       console.log(result)
       this.setState({
           news:result
       })
     })
    // this.state.news.forEach(element => {
       //  console.log(element);
     //});
    //  const items = this.state.news.map((item) =>
    //  console.log(item)
    // );
    // console.log(items);
     //console.log(this.state.news);
    }

    render() {
        let news_ = this.state.news;
        return(
           <ul> {news_.map((item) =>
                <li>{item}</li>
            )}</ul>
        )
    }
}
  export default Index;