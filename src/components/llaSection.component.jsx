import React from 'react';
import './llaSection.css';

const LlaSection = ({
    title = 'Title',
    img = 'https://pbs.twimg.com/profile_images/1422950434751369222/njQmVapA_400x400.jpg',
    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae aliquam ni',
    right = false,
}) => {
    const contentClass = right ? 'content right' : 'content left';
    const containerClass = right ? 'container left' : 'container right';

    return (
        <section>
            <div className={contentClass}>
                {text}
            </div>
            <div className={containerClass}>
                <div className='title'>
                    {title}
                </div>
                <div className='img'>
                    <img href={img} alt='imagen' />
                </div>
            </div>
        </section>
    );
}

export default LlaSection;
