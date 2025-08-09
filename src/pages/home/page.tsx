
import React from 'react';
import Homeslider from '../../components/Homeslider';
import Aboutus from '../../components/Aboutus';
import ServicesC from '../../components/ServicesC';
import DroneFollow from '../../components/DroneFollow';
import References from '../../components/References';

const HomePage: React.FC = () => {
    return (
        <div>
            <Homeslider />
            <Aboutus />
            <ServicesC />
            <References />
            <DroneFollow />
        </div>
    );
};

export default HomePage;
