import React from 'react'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
import { Link } from "react-router-dom";

export default function Rooms() {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                <Link to='/' className="btn-primary">
                    Return home
                </Link>

                </Banner>
            </Hero>
        </div>
    )
}
