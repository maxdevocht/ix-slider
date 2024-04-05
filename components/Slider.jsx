import React from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export default function Slider() {

    return (
        <Splide className="my-carousel" aria-label="My Favorite Images"
        options={ {
            perPage: 3,
            perMove: 1,
            gap    : '1.5rem',
            padding: '3rem',
            type: 'loop',
            drag: 'free',
            snap: true,
            autoplay: true,
            focus: 'center',
            breakpoints: {
            640: {
                perPage: 2,
                gap    : '.7rem',
                padding: '1.5rem',
            },
            480: {
                perPage: 1,
                gap    : '.7rem',
                padding: '1.5rem',
            },
            } 
            } }
        >

            <SplideSlide className="slider_wrapper">
                <img src="../public/img/8.png" alt="Image 1"/>
            </SplideSlide>

            <SplideSlide className="slider_wrapper">
                <img src="../public/img/9.png" alt="Image 2"/>
            </SplideSlide>

            <SplideSlide className="slider_wrapper">
                <img src="../public/img/10.png" alt="Image 3"/>
            </SplideSlide>

            <SplideSlide className="slider_wrapper">
                <img src="../public/img/11.png" alt="Image 4"/>
            </SplideSlide>

            <SplideSlide className="slider_wrapper">
                <img src="../public/img/12.png" alt="Image 5"/>
            </SplideSlide>

            <SplideSlide className="slider_wrapper">
                <img src="../public/img/13.png" alt="Image 6"/>
            </SplideSlide>

            <SplideSlide className="slider_wrapper">
                <img src="../public/img/14.png" alt="Image 7"/>
            </SplideSlide>

        </Splide>
    )
}