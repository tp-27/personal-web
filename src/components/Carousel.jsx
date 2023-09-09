import React from 'react';
import { CarouselItem } from './CarouselItem';
import code from '/public/code.png';

export const Carousel = () => {
    const items = [
        {
            title: "intro",
            description: "hello",
            icon: require("./media/example1.svg").default
        },
        {
            title: "intro",
            description: "hello",
            icon: require("./media/example2.svg").default
        },
        {
            title: "intro",
            description: "hello",
            icon: require("./media/example1.svg").default
        }
    ]


    return (
        <div className="text-black">
            <div className="inner">
                {items.map((item) => {
                    return <CarouselItem item={item}/>
                })}
            </div>
            <CarouselItem />
        </div>
    );
}