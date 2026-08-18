import React from 'react'
import Navbar from '../Components/CoverPage/Navbar'
import HeroSection from '../Components/CoverPage/HeroSection'

const CoverPage = () => {
    return (
        <div className="bg-white text-gray-900 font-sans text-base antialiased selection:bg-green-600 selection:text-white min-h-screen cursor-default">
            <Navbar />
            <HeroSection />
        </div>
    )
}

export default CoverPage