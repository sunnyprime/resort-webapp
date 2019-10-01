import React from 'react';
import Hero from '../Component/Hero';
import Banner from '../Component/Banner';
import { Link } from "react-router-dom";
export default function Error() {
    return (
        <div>
            <Hero>
                <Banner title="404" subtitle="page not found">
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}
