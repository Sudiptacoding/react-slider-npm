import React from 'react';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

// npm install korar npm
//  npm install react-animated-slider@^1

const User = () => {

    const content = [
        { title: 'First item', description: 'Lorem ipsum', image: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg' },
        { title: 'Second item', description: 'Lorem ipsum', image: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg' },
        { title: 'Second item', description: 'Lorem ipsum', image: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg' },
        { title: 'Second item', description: 'Lorem ipsum', image: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg' },
    ];

    return (
        <div>
            <Slider autoplay={1000} animateIn={'animateIn'} previous={'previous'} current={'current'} animateOut={'animateOut'}>
                {content.map((item, index) => (

                    <div key={index} style={{ background: `url('${item.image}') no-repeat center center/ 91% 235%` }}>

                        <div className="center">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default User;