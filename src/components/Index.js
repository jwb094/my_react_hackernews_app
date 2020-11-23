import React, { Component } from 'react';
//import List from  '../components/list';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            list: []

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
     //  console.log(result)
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

    // componentMountfetchnewsdata() {
    //     fetch('/api/users')
    //       .then(response => response.json())
    //       .then(json => this.setState({ users: json.data }));
    //   }

    render() {
        let news_ = this.state.news;
        let news__ = this.state.news;
        let promiseArray = [];
       //const er = fetch(`https://hacker-news.firebaseio.com/v0/item/25190970.json?print=pretty`);
       // console.log(er);
        
       
        news_.forEach(item   =>  {
            let promises = [];
            //console.log(i);
           // promises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
          
           const result = fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`) 
           .then(result => result.json())
         
            .then(Jsondata =>{
             
               return  promiseArray.push(Jsondata);
          
            })
  
        })
        console.log(promiseArray);
        // news_.forEach(item => {
        //     fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
        //     .then(result => result.json())
        //     .then(result => {
        //        // console.log(response.json);
        //         promiseArray.push(result.json());
        //       }) 
        // });
       // Promise.all(promiseArray);
        console.log(promiseArray);
        return(
              <ul> {news__.map((item) =>
                <li>{item}</li>
            )}</ul>
  
        )
    }
}
  export default Index;