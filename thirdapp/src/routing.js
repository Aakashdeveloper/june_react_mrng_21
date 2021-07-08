import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';
import Listing from './Component/listing/listingApi';
import Details from './Component/details/details';
import ViewBooking from './Component/booking/bookingApi';
import PlaceBooking from './Component/booking/placeBooking'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:id" component={Listing}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/viewBooking" component={ViewBooking}/>
            <Route path="/booking/:hotel_name" component={PlaceBooking}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;