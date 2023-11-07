import React from 'react';
import './landing.css';
import Navbar from '../components/Navbar/Navbar';
import LlaSection from '../components/LlaSection/llaSection.component';

const LandingPage = () => {
    return (
        <div className='container'>
            <div className='header'>
                <Navbar />
            </div>
            <div className='body'>
                <h1>Body</h1>
                <div className='toApp'>
                    <h2>Link to app</h2>
                </div>
                <LlaSection
                    id="quienes-somos"
                    title='¿Quienes somos?'
                    img='https://pbs.twimg.com/profile_images/1422950434751369222/njQmVapA_400x400.jpg'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam ni'
                    right={false}
                />
                <LlaSection
                    title='¿Cual es nuestro objetivo?'
                    img='https://pbs.twimg.com/profile_images/1422950434751369222/njQmVapA_400x400.jpg'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam ni'
                    right={true}
                />
                <LlaSection
                    id="como-fiscalizar"
                    title='¿Cómo fiscalizar?'
                    img='https://pbs.twimg.com/profile_images/1422950434751369222/njQmVapA_400x400.jpg'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam ni'
                    right={false}
                />
                <LlaSection
                    title='Preguntas frecuentes'
                    img='https://pbs.twimg.com/profile_images/1422950434751369222/njQmVapA_400x400.jpg'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam ni'
                    right={true}
                />
                <LlaSection
                    id="whitepaper"
                    title='Preguntas frecuentes'
                    img='https://pbs.twimg.com/profile_images/1422950434751369222/njQmVapA_400x400.jpg'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam ni'
                    right={true}
                />
            </div>
            <div className='footer'>
                <h1>Footer</h1>
            </div>
        </div>
    );
}

export default LandingPage;
