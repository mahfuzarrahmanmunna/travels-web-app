import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/effect-cards';

import './styles.css';

import { EffectCards } from 'swiper/modules';
export default function App({ item }) {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><img src={item.image} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
}
