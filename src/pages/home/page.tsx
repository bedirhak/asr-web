
import React from 'react';
import Homeslider from '../../components/Homeslider';
import Aboutus from '../../components/Aboutus';
import ServicesC from '../../components/ServicesC';
// import DroneFollow from '../../components/DroneFollow';
import References from '../../components/References';
import Comments from '../../components/Comments';
import Numbers from '../../components/Numbers';
import ContactUs from '../../components/ContactUs';
import VerticleText from '../../components/VerticleText';

const HomePage: React.FC = () => {
    return (
        <div className='home-page-container'>
            <Homeslider />
            <Aboutus />
            <ServicesC />
            <VerticleText />
            <Numbers />
            <References />
            <Comments />
            <ContactUs />
            {/* <DroneFollow /> */}
        </div>
    );
};

export default HomePage;
