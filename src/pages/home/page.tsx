
import React from 'react';
import Homeslider from '../../components/Homeslider';
import Aboutus from '../../components/Aboutus';
import ServicesC from '../../components/ServicesC';
// import DroneFollow from '../../components/DroneFollow';
import References from '../../components/References';
import Comments from '../../components/Comments';
import ContactUs from '../../components/ContactUs';

const HomePage: React.FC = () => {
    return (
        <div>
            <Homeslider />
            <Aboutus />
            <ServicesC />
            <References />
            <Comments />
            <ContactUs />
            {/* <DroneFollow /> */}
        </div>
    );
};

export default HomePage;
