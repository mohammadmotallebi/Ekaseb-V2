import {
    Block, BlockTitle, Link, List, ListItem, Navbar, NavRight, Page, Popup, Icon, f7, useStore, Preloader, Row, Col, Card, CardContent, BlockHeader, Swiper, SwiperSlide, theme, Fab
} from "framework7-react";
import React, {useCallback, useEffect, useState} from "react";
import fa from "../lang/fa";
import {request, getDevice, Dom7 as $$} from "framework7";

import {limitString, number, postData} from "../Helper";
import store from "../store/store";
import Slider from "../Layouts/Slider";
import BeatLoader from "react-spinners/BeatLoader";

const dv = getDevice();

export default ({itemProps}) => {
    if (!itemProps) {
        return false;
    }
    const [images, setImages] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        request({
            url: "ShopItems/get-item-codes/" + itemProps.unique_code,
            dataType: "json",
            contentType: "application/json",
            async: true,
            beforeCreate(xhr, pa) {

            }, beforeOpen(xhr, parameters) {
                /**/
            }, beforeSend(xhr) {

            }, error(xhr, status, message) {

            }, success(data, status, xhr) {
                store.dispatch("setCodes", data)
                renderList(data)
            }, complete(xhr, status) {
                setLoading(false)
            }, statusCode: {},
        });

    }, [itemProps.unique_code]);


    useEffect(() => {
        postData(f7.params.home + "ShopItems/get-item-images", {
            unique_code: itemProps.unique_code,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    setDisabled(false)
                    setImages([...data])

                } else {
                    setDisabled(true)
                }
            });
    }, []);


    const renderList = (items) => {
        f7.virtualList.create({
            // List Element
            el: f7.popup.get('.item_detail').$el.find('.virtual-list'),
            // Pass array with items
            items,

            on: {
                itemBeforeInsert(virtualList, fragment) {
                    f7.progressbar.show()
                },
                itemsAfterInsert(virtualList, fragment) {
                    f7.progressbar.hide()
                }

            },

            // List item render
            renderItem(item) {
                return `
          <li>
            <a href="#" class="item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">${item.item_code}</div>
                  <div class="item-after"><i class="f7-icons">${item.icon}</i></div>
                </div>
                
                <div class="item-subtitle small-5 text-color-gray">
                                    ${item.buy_date}
                                </div>
              </div>
            </a>
          </li>`;
            },
            // Item height
            height: theme.ios ? 63 : (theme.md ? 73 : 77),
        });
    }

    return (<Popup className={"item_detail"} swipeToClose>
        <Page>
            <Navbar title={fa.detail}>
                <NavRight>
                    <Link popupClose iconF7="multiply_circle_fill"></Link>
                </NavRight>
            </Navbar>

            <Block
                strong className={"current-theme-color text-align-center"} style={{fontWeight: "600", position: "sticky", top: "0", zIndex: "200"}}>
                {itemProps.item_name}
            </Block>
            <Block style={{margin: "5px 0"}}>
                <Swiper spaceBetween={5} slidesPerView={3} scrollbar zoom>
                    <SwiperSlide>
                        <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center"} style={{minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706'}}>
                            <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706",}}>
                                {fa.supplier}
                            </BlockHeader>
                            {itemProps.item_supplier ? limitString(itemProps.item_supplier) : '---'}
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center"} style={{minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706'}}>
                            <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706",}}>
                                {fa.category}
                            </BlockHeader>
                            {itemProps.item_category ? limitString(itemProps.item_category) : '---'}
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center"} style={{minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706'}}>
                            <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706",}}>
                                {fa.type}
                            </BlockHeader>
                            {itemProps.item_type ? limitString(itemProps.item_type) : '---'}
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center"} style={{minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706'}}>
                            <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706",}}>
                                {fa.model}
                            </BlockHeader>
                            {itemProps.item_model ? limitString(itemProps.item_model) : '---'}
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center"} style={{minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706'}}>
                            <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706",}}>
                                {fa.size}
                            </BlockHeader>
                            {itemProps.item_size ? limitString(itemProps.item_size) : '---'}
                        </Block>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center"} style={{minHeight: '120px', maxHeight: '150px'}}>
                            <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706",}}>
                                {fa.color}
                            </BlockHeader>
                            {itemProps.item_color ? limitString(itemProps.item_color) : '---'}
                        </Block>
                    </SwiperSlide>
                </Swiper>
            </Block>
            <Block className={"row text-align-center"} style={{margin: "5px 0"}}>
                <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-green-01"} style={{border: "1px solid rgb(35 136 18 / 47%)"}}>
                    <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#238812",}}>
                        {fa.price}
                    </BlockHeader>
                    {number(itemProps.price)}
                </Block>

                <Block inset strong className={"col mt-0 mb-0 ml-1 mr-1 pastel-green-01"} style={{border: "1px solid rgb(35 136 18 / 47%)"}}>
                    <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#238812",}}>
                        {fa.cashless_score}
                    </BlockHeader>
                    {number(itemProps.score)}
                </Block>

                <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-green-01"} style={{border: "1px solid rgb(35 136 18 / 47%)"}}>
                    <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#238812",}}>
                        {fa.credit}
                    </BlockHeader>
                    {number(itemProps.credit)}
                </Block>
            </Block>
            <Block className={"row text-align-center"} style={{margin: "5px 0"}}>
                <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-blue-01"} style={{border: "1px solid rgb(2 2 94 / 49%)"}}>
                    <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#0a4d9e",}}>
                        {fa.total_item}
                    </BlockHeader>
                    {itemProps.TotalItem}
                </Block>

                <Block inset strong className={"col mt-0 mb-0 ml-1 mr-1 pastel-blue-01"} style={{border: "1px solid rgb(2 2 94 / 49%)"}}>
                    <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#0a4d9e",}}>
                        {fa.total_sell}
                    </BlockHeader>
                    {itemProps.Sold}
                </Block>

                <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-blue-01"} style={{border: "1px solid rgb(2 2 94 / 49%)"}}>
                    <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#0a4d9e",}}>
                        {fa.remaining}
                    </BlockHeader>
                    {itemProps.Remain}
                </Block>
            </Block>
            {/*<Swiper*/}
            {/*    cssMode={true}*/}
            {/*    navigation={true}*/}
            {/*    pagination={true}*/}
            {/*    mousewheel={true}*/}
            {/*    keyboard={true}*/}
            {/*    zoom={true}*/}
            {/*    dir="ltr"*/}
            {/*    height={'100'}*/}
            {/*>*/}
            {/*    {*/}
            {/*        images.map(image =>*/}
            {/*            <SwiperSlide>*/}
            {/*                <div className="swiper-zoom-container">*/}
            {/*                <img src={image} />*/}
            {/*                </div>*/}
            {/*            </SwiperSlide>*/}
            {/*        )*/}
            {/*    }*/}

            {/*</Swiper>*/}
            <List>
                <ListItem
                    link="#"
                    disabled={disabled}
                    id={"image_show"}
                    onClick={() => f7.popup.open('.slider-popup')}
                    title={fa.buttons.show_images}
                >
                    <Icon
                        slot="after"
                        f7="photo_fill_on_rectangle_fill"
                    ></Icon>
                </ListItem>
            </List>

            <Slider images={images} pagination navigation scrollbar zoom dir='ltr' effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}/>
            <>


                <div className="list virtual-list media-list searchbar-found"></div>
                <div className="text-align-center"><BeatLoader color="var(--f7-theme-color)" loading={loading}/></div>
            </>
            <Fab
                position="right-bottom"
                slot="fixed"
                id="go_top"
                style={{color: "var(--f7-fab-text-color)", bottom: '-200px'}}
                color="var(--f7-theme-color)"
                onClick={() => {
                    f7.virtualList.get(".virtual-list").scrollToItem(1)
                }}
            >
                <Icon f7='arrow_up'></Icon>
            </Fab>
        </Page>
    </Popup>);
};
