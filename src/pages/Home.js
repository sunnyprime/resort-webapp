import React from 'react'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
import Services from '../Component/Services'
import { Link } from "react-router-dom";
import FeturedRooms from '../Component/FeturedRooms';


export default function Home() {
    return(
        <>
         <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at Rs.599">
            <Link to="/rooms" className="btn-primary">
            our rooms
            </Link>
        </Banner>
    </Hero>
    <Services></Services>
    <FeturedRooms/>
        </>
    )
}
