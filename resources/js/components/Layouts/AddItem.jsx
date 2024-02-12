import React, {useState, useEffect, useCallback} from "react";
import fa from "../lang/fa";
import {
    Block, Button, Col, f7, Fab, Icon, List, ListItem, Navbar, Page, Row, Searchbar, Subnavbar, useStore
} from "framework7-react";
import ItemDetailPopup from "../Popups/ItemDetailPopup";
import {getDevice, Dom7 as $$} from "framework7";
import {number} from "../Helper";
import AddItemPopup from "../Popups/AddItemPopup";
import store from '../store/store'
import BeatLoader from "react-spinners/BeatLoader";

const dv = getDevice();


export default ({f7router}) => {
    const [shopSelect, setShopSelect] = useState([]);
    const [item, setItem] = useState();
    const [itemList, setItemList] = useState([]);
    const loading = useStore('loading');
    const [shopId, setShopId] = useState(0);


    const initPage = async () => {
          await fetch(f7.params.home + "get-my-shops-name")
            .then((response) => response.json())
            .then((data) => {
                    setShopSelect(data);
                console.log('Shop ID =>', data)
                    store.dispatch('setItemDetail', data[0].id)
                    $$("#s_id_g656534")
                        .find(".item-after")
                        .text(data[0].shop_name);
                    // store.dispatch('setShopId', data[0].id);
                    setShopId(data[0].id);
            });
    }

    useEffect(() => {
        initPage()
    }, []);

    useEffect(() => {
        loadItems()
    }, [shopId]);

    const loadItems = async () => {
        await fetch(f7.params.home + "Shops/get-shopItems-data/" + shopId)
            .then((response) => response.json())
            .then((data) => {
                setItemList(data);
            });
    }

   const showAddButton = () => {
            $$("#add_item-fab").removeClass("disabled");
            $$("#add_item-fab").animate(
                {
                    bottom: 0,
                },
                {
                    // Animation duration in ms, optional (default to 300)
                    duration: 300,
                    // Animation easing, optional (default to 'swing'), can be also 'linear'
                    easing: "ease-in-out",
                }
            );
    };




    return (
        <Page onPageAfterIn={showAddButton}>
            <Navbar title="لیست کالا" innerClass={'current-theme-color'}>
                <Subnavbar inner={false}>
                    <Searchbar
                        searchContainer=".search-items"
                        searchIn=".item-title"
                        placeholder={fa.search}
                    ></Searchbar>
                </Subnavbar>
            </Navbar>

            <List inset>
                <ListItem
                    title={fa.form.shop_name}
                    smartSelect
                    smartSelectParams={{
                        openIn: "popover",
                        sheetCloseLinkText: fa.close_icon,
                        closeOnSelect: true,
                        on: {
                            close: (e) => {
                                loadItems()
                                setShopId(e.selectEl.selectedOptions[0].value)
                            },
                        },
                    }}
                    id={"s_id_g656534"}
                >
                    <select
                        name="shop"
                        id={"shop"}
                        className={"text-align-right"}
                    >
                        {shopSelect.map((shop, index) => (
                            <option key={index} i={index} value={shop.id}>
                                {" "}
                                {shop.shop_name}{" "}
                            </option>
                        ))}
                    </select>
                </ListItem>
            </List>
            <div className="text-align-center"><BeatLoader color="var(--f7-theme-color)" loading={loading}/></div>
            <div className="list item-list search-items">
                <ul>
                    {itemList.map((item) =>
                        <li key={item.id * Math.floor(Math.random() * 1000000)} className="row no-gap" style={{borderBottom: '1px solid #ccc', margin: 0, alignItems: 'normal',fontSize:'0.8rem'}}>
                            <a onClick={() => {
                                f7router.navigate("/item_detail_popup/", {props: {itemProps: item}})
                            }} className="item-link col-70">
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title-row">
                                            <div className="item-title">{item.item_name}</div>
                                            <div slot="after-title" className="text-primary mr-1">
                                                ({item.Remain})
                                            </div>
                                            <div className="item-after">

                                                {number(item.price)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="col-15 custom-list_button link button-red_shadow" href={"/delete-item/" + item.unique_code}><span className="material-icons">delete</span></a>
                            <a className="col-15 button-blue_shadow custom-list_button link"
                               onClick={() => f7router.navigate("/edit-item/" + item.id, {props: {uc: item.unique_code, name: item.item_name, remain: item.Remain, price: item.price}})}>
                                <span className="material-icons">edit</span></a>
                        </li>
                    )}
                </ul>
            </div>

            <ItemDetailPopup/>

            <AddItemPopup edit={false} itemProps={shopId} />

            <Fab
                position="center-bottom"
                slot="fixed"
                id="add_item-fab"
                className="disabled"
                text={fa.buttons.add_item}
                style={{color: "var(--f7-fab-text-color)", bottom: '-200px'}}
                color="var(--f7-theme-color)"
                onClick={() => {
                    f7router.navigate("/add-item-popup/",{
                        props: {shopId: shopId, edit: false},
                    })
                }}
            >
                <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
            </Fab>
        </Page>
    );
};
