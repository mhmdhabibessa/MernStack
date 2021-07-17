import React, { useState } from 'react';

const Tabs = (props) => {

    const {alltabs,setAlltabs}=props;

    
    const showDataOfTab =(index) => {

        setAlltabs({
            ...alltabs,
            numberofTabs: index
            

        })
        
     

        {console.log(alltabs.data[alltabs.numberofTabs])}


    }
    
    
        return (
            <>
          <h1> the header   </h1>
          {   alltabs.data.map( (data,index) => ( 
              <div className="tab-list-item" onClick={() =>showDataOfTab(index)}>Tab {index+1} </div> 
               
          ))
            }

         <p>  {alltabs.data[alltabs.numberofTabs]}  </p>   
         {console.log(alltabs.data[alltabs.numberofTabs])}
         
         
          </>
          
         
        );
      }
    
    
    export default Tabs;

    
 

    
