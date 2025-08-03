
import React from 'react';
import Homeslider from '../../components/Homeslider';
import Aboutus from '../../components/Aboutus';
import ServicesC from '../../components/ServicesC';

const HomePage: React.FC = () => {
    return (
        <div>
            <Homeslider />
            <Aboutus />
            <ServicesC />
        </div>
    );
};

export default HomePage;
