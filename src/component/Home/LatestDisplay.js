import React from 'react';
import {Link} from 'react-router-dom';
import './courses.css';
import Header from '../Header';
const LatestDisplay = (props) => {
    const renderLatest = ({ldata}) => {
        if(ldata){
            return ldata.map((data) => {
                return(
                    <div key={data.id} className='course'>
                    <h3>{data.title}</h3> 
                    <p>{data.description}</p>
                    <p>Author: {data.author}</p>
                    <center><Link to="/enquire" className="btn btn-primary">
                  {data.enquiry}
                 </Link></center> 
                    </div>
                )
            })
        }

    }

    return(
        <>
        <div>
        <Header/>
        </div>
        <div className="app">
         
            {renderLatest(props)}
        </div>
        </>
        
    )
}

export default LatestDisplay