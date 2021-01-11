import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import image1 from "../assets/images/model1.jpg";
import image2 from "../assets/images/model2.jpg"


const items = [
    {
        src: image2,
        altText: 'Slide 1',
        // caption: 'Slide 1',
        // header: 'Slide 1 Header',
        key: '1'
    },
    {
        src: image1,
        altText: 'Slide 2',
        // caption: 'Slide 2',
        // header: 'Slide 2 Header',
        key: '2'
    },

];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;