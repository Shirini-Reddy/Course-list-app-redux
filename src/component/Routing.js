import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../container/Home';
import Header from './Header';
import Main from './main'
import EnquiryForm from './Home/enquiryForm';
import Userinfo from './Home/userinfo';

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/enquire' element={<EnquiryForm/>}/>
                    <Route path='/usersinfo' element={<Userinfo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing