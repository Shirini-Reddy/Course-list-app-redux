import React from 'react';

const displayComponent = (props) => {

    const renderMovies = ({dataList}) => {
        if(dataList){
             dataList.map((item) => {
                return(
                    <div key={item.id}>
                       <h1>{item.title}</h1> 
                       <p>{item.description}</p>
                       <p>Author: {item.author}</p>
                       <center><Link to="/enquire" className="btn btn-primary">
                     {item.enquiry}
                    </Link></center> 
                       </div>
                )
            })
        }
    }

    return(
        <div>
            {renderMovies(props)}
        </div>
    )
}

export default displayComponent