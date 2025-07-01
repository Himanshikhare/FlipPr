import React from 'react'
import { Button } from '../ui/button'
import NewsletterSection from './NewsletterSection'

const Footer = () => {
    return (
        <div>
            {/* Footer Section */}
            <footer className="relative text-white">
                {/* Background Image */}
                <div className="relative w-full h-96">
                    <img
                        src="\Rectangle.svg"
                        alt="Footer Background"
                        className="absolute w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div> {/* Dark Overlay */}
                </div>

                {/* Footer Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
                    <p className="text-lg mb-6">
                        Subscribe to our newsletter and stay updated with the latest trends and offers.
                    </p>
                    <Button className="bg-white text-black w-50">Learn More</Button>
                </div>
                <div>
                    <NewsletterSection />
                </div>



                {/* Footer Links */}
                <div className="bg-white-800 text-black h-8">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
                        {/* Column 1 */}
                        <div>
                            <h4>00000-0000-00</h4>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h1>RealTrust</h1>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <ul className="flex gap-5">
                                <li><img src="\Group-1.svg"></img></li>
                                <li><img src="\Frame.svg"></img></li>
                                <li><img src="\Group.svg"></img></li>
                                <li><img src="\Linkedin.svg"></img></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer