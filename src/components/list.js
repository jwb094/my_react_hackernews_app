import React from 'react';
const List = ({list}) => {
console.log(list);
const renderlist = list.map((key,item) => { 
    console.log(key);
});
   // const renderlist = list.map((key,item) => { 
    //const renderlist = Object.entries(list).map((key,k)=> {  
       
        return (
             <ul>
             {list.map((item, index) => (
               <li>
                <h5>{item.title}</h5>
                <p>{item.time}</p>
               </li>
              ))}
             </ul>
         
       )

    //});
    //  return renderlist;
};
//<li>{key}{item} </li>
export default List;

