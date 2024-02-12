import React, {Component, useEffect, useState} from 'react';
import {
    Block,
    f7,
    Link,
    List,
    ListItem,
    Navbar,
    NavRight,
    Page,
    Popup,
    Preloader,
    Searchbar,
    useStore
} from "framework7-react";
import fa from "../lang/fa";
import '../../style.css';
import ItemDetailPopup from "../Popups/ItemDetailPopup";
import {request, getDevice} from "framework7";
import BeatLoader from "react-spinners/BeatLoader";
const dv = getDevice()
import {number, postData} from '../Helper';


export default function ShopDetails(props) {

    const favShop = useStore('getFavShop');
    const [sd, setSd] = useState([]);

    // Load Shop Items and Push to State
    const loadItems = async () => {
        console.log('ID =>',props.data)
        await fetch(f7.params.home + 'Shops/get-shopItems-data/' + props.data)
            .then((response) => response.json())
            .then((data) => {
                f7.store.dispatch('setFavShop', props.data.id);
                setSd(data);
            });
    }


    // Add Shop to Fav For Customers
    const addToFav = () => {
        if (favShop > 0) {
            request.post(f7.params.home + 'Shop/delete-from-fav', {'id': props.data.id}, function () {
                f7.store.dispatch('setFavShop', 0);
                f7.toast.create({
                    icon: '<i class="f7-icons">heart</i>',
                    text: fa.alert.not_fav,
                    position: 'center',
                    closeTimeout: 2000,
                }).open();
                f7.$('body').find('i#fav-f654987465465' + props.data.id).text('heart');
            })
        } else {
            postData(f7.params.home + 'Shop/add-to-fav', {'id': props.data.id})
                .then(res => {
                    f7.store.dispatch('setFavShop', 1);
                    f7.toast.create({
                        icon: '<i class="f7-icons">heart_fill</i>',
                        text: fa.alert.fav,
                        position: 'center',
                        closeTimeout: 2000,
                    }).open();
                    f7.$('body').find('#fav-f654987465465' + props.data.id).text('heart_fill');
                })
        }
    }

    return (
        <Popup className="shop-details" swipeToClose onPopupOpened={loadItems}>
            <Navbar title={fa.shop_details}>
                <NavRight>
                    <Link popupClose iconF7='multiply_circle_fill'></Link>
                </NavRight>
            </Navbar>

            <Page noSwipeback noNavbar={false} noToolbar={true} id={'shop-details'}>

                <List className="search-list searchbar-found">
                    <ListItem href={'#'} title={fa.shop_name} medialist
                              onClick={addToFav}>
                        <div className={'item-after text-align-right'}>{props.data.shop_name}</div>
                        <div slot={'before-title'}><i
                            className={'f7-icons theme-font-color'}>{(favShop > 0) ? 'heart_fill' : 'heart'}</i>
                        </div>
                    </ListItem>
                    <ListItem title={fa.shop_number} medialist>
                        <div className={'item-after text-align-right'}>{props.data.shop_number}</div>
                    </ListItem>
                    <ListItem title={fa.tel} medialist>
                        <div className={'item-after text-align-right'}><Link external
                                                                             href={'tel:' + props.data.tel}>{props.data.tel}</Link>
                        </div>
                    </ListItem>
                    <ListItem title={fa.mobile} medialist>
                        <div className={'item-after text-align-right'}><Link external
                                                                             href={'tel:' + props.data.mobile}>{props.data.mobile}</Link>
                        </div>
                    </ListItem>
                    <ListItem title={fa.email} medialist>
                        <div className={'item-after text-align-right'}><Link external
                                                                             href={'mailto:' + props.data.email}>{props.data.email}</Link>
                        </div>
                    </ListItem>
                    <ListItem title={fa.website} medialist>
                        <div className={'item-after text-align-right'}>{(props.data.website || props.data.website === '0') ?
                            <Link href={'https://' + props.data.website} external
                                  target={'_blank'}>{props.data.website}</Link> : '---'}</div>
                    </ListItem>
                    <ListItem title={fa.manager} medialist>
                        <div className={'item-after text-align-right'}>{props.data.shop_manager}</div>
                    </ListItem>
                </List>

                <Block strong>
                    <Searchbar
                        searchContainer=".search-items"
                        searchIn=".item-title"
                        disableButton={!dv.desktop || !dv.ios}
                        placeholder={fa.search}
                        backdrop={false}
                        spellcheck={true}
                        style={{position: 'sticky', top: '0'}}
                    ></Searchbar>

                    <List mediaList className={'search-items'} dividersIos outlineIos strongIos>
                        <div className="text-align-center"><BeatLoader color="var(--f7-theme-color)" loading={sd.length < 1}/></div>
                            {sd?.map((item) =>
                            <ListItem href={item.id} title={item.item_name} key={item.id * Math.floor(Math.random() * 1000000)}
                                      onClick={()=> {
                                            f7.popup.create({
                                                el: ".item-detail",
                                                swipeToClose: true
                                            }).open();
                                      }}
                                     >
                                <div slot="after">{number(item.price)}</div>
                                <div slot="after-title"
                                     className='text-primary mr-1'> ({item.Remain})
                                </div>
                            </ListItem>)}
                    </List>
                </Block>
                <ItemDetailPopup/>
            </Page>
        </Popup>

    )

}
