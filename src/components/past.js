import React, { Component } from 'react';
import List from  './list';
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
      //console.log(result)
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
     console.log(this.state.news);
    }

    // componentMountfetchnewsdata() {
    //     fetch('/api/users')
    //       .then(response => response.json())
    //       .then(json => this.setState({ users: json.data }));
    //   }

    render() {
        this.state.news = this.state.news.slice(1,100);
        let news_ = this.state.news;
        //let news__ = this.state.news;
        let promiseArray = [];
       //const er = fetch(`https://hacker-news.firebaseio.com/v0/item/25190970.json?print=pretty`);
       // console.log(er);
        
       //let promises = [];
     //   let s = news_.forEach(item   =>  {
      news_.forEach(item   =>  {     
            //console.log(i);
           // promises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
          
           const result = fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`) 
           .then(result => result.json())
         
            .then(Jsondata =>{
             
               return  promiseArray.push(Jsondata);
          
            })
  
        })
        promiseArray = promiseArray.slice(0,100);
        console.log(promiseArray);
        //console.log(s);
        // news_.forEach(item => {
        //     fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
        //     .then(result => result.json())
        //     .then(result => {
        //        // console.log(response.json);
        //         promiseArray.push(result.json());
        //       }) 
        /**
         *       <ul> {news__.map((item) =>
                <li>{item}</li>)}
                </ul>   
  
         */
        // });
       // Promise.all(promiseArray);
        console.log(promiseArray);
        return(
           
              <List list={promiseArray}/>
            
       
        )
    }
}
  export default Index;