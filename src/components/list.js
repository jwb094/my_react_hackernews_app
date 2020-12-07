import React from 'react';
//import moment from 'moment';
const List = ({list}) => {
console.log(list);
// const renderlist = list.map((key,item) => { 
//     console.log(key);
// });
   // const renderlist =sss list.map((key,item) => { 
    //const renderlist = Objssect.entries(list).map((key,k)=> {  
       
        return (
             <ul id="list">
             {list.map((item, index) => (
               <li> 
                <h5>{index+1}. <a href={item.url}>{item.title}</a></h5>
                <p className="secondary_info">  <a href="#">hide</a>  {item.descendants} comments</p>
               </li>
              ))}
             </ul>
         
       )

    //});
    //  return renderlist;
};
//<li>{key}{item} </li>
export default List;

