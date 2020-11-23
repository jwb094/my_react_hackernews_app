import React from 'react';
                {/* <li className="list-group-item" onClick={() => selected(video)}>
                    <div className="col-sm-12">
                        <img src= {video.snippet.thumbnails.default.url}></img>
                        
                    </div>
                    <div className="col-sm-12">
                        {video.snippet.title}
                    </div>
                
             
             
                </li> */}
const List = ({list}) => {

console.log(list);
    const renderlist = list.map((item) => { 
    let data;
        const result = fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
        .then(result => result.json())
        .then(data => }));
        console.log(data);


    });
      return renderlist;
};

export default List;

