
//Functional Component 
import React, { Component } from "react";
//import Index from  '../components/Index';
const MainPage = () => {


    function getLatestNews(){
        let a;
     //const result =  fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
     //.then((resp) => resp.json());
     //console.log(result);
     const result = fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
      .then((resp) => resp.json())

      .catch(function(error) {
        console.log(error);
        // This is where you run code if the server returns any errors
    });
     console.log(result);
    }
   function someFunction() {
        return (<div>Hello World!</div>);
    }

    
        return (
            <div>
                    <p>
                        {getLatestNews()}
               
                    </p>
            </div>
        );
    }


export default MainPage;