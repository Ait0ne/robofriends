import React from 'react';
import ScrollBar, { Scrollbar } from 'react-scrollbars-custom';


const Scroll = (props) => {
    return(
        // <div style={{overflowY: 'scroll', border: '1px solid black', height: '680px'}}> 
        //     {props.children}
        // </div>
        <Scrollbar  style ={{width:'100vw', height: '70vh'}}>
            {props.children}
        </Scrollbar>
    );
};

export default Scroll;