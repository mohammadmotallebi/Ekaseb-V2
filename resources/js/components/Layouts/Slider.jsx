import React, {useState} from 'react';
import fa from "../lang/fa";
import {
    Block, Button, Card, CardContent, Col, f7, Fab, Icon, Link, List, ListItem, Navbar, NavRight, Page, Popup, Row, Searchbar, Subnavbar, Swiper, SwiperSlide, useStore
} from "framework7-react";
import {request, getDevice, Dom7 as $$} from "framework7";

export default ({images, ...rest}) => {


    return (
        <Popup
            className="slider-popup"
        >
            <Page>
                <Navbar title={fa.images}>
                    <NavRight>
                        <Link popupClose iconF7='multiply_circle_fill'></Link>
                    </NavRight>
                </Navbar>

                <Swiper style={{margin: '0', top: '50%', transform: 'translateY(-50%)'}}  {...rest}>
                    {
                        images.map((image, i) => {
                            return <SwiperSlide key={i} zoom={rest.zoom}>
                                <img src={image}/>
                            </SwiperSlide>
                        })

                    }

                </Swiper>

            </Page>
        </Popup>
    )
}

