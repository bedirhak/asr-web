import React from 'react';
import Homeslider from '../../components/Homeslider';
import Aboutus from '../../components/Aboutus';

const HomePage: React.FC = () => {
    return (
        <div>
            <Homeslider />
            <Aboutus />
        </div>
    );
};

export default HomePage;
