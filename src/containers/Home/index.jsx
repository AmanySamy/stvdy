import React from 'react'
import Header from '../../components/Header'
import Section3 from '../../components/Section3'
import Section2 from '../../components/Section2'
import Section4 from '../../components/section4'
import Section5 from '../../components/section5'
import Section6 from '../../components/Section6'
import Section7 from '../../components/Section7'
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <div className='home'>          
            <Header />           
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />           
            <Footer />            
        </div>
    )
}
