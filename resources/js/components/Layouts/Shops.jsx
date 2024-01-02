import React, {Component, useEffect, useState} from "react";
import {
    List,
    ListItem,
    Page,
    f7,
    Navbar,
    Subnavbar,
    Searchbar,
    useStore,
} from "framework7-react";
import fa from "../lang/fa";
import "../../style.css";
import ShopDetails from "./ShopDetails";
import {request, getDevice} from "framework7";

const dv = getDevice();
export default function Shops(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         shopsDetails:[],
    //         shopId : 0,
    //         shopFav : 0,
    //         menu : '',
    //         fav:0
    //     }
    // }
    const [shopsDetails, setShopsDetails] = useState([]);
    const [menu, setMenu] = useState("");
    const [shopDetail, setShopDetail] = useState({});

    useEffect(() => {
        f7.store.dispatch("setJsonProps", {});
        setMenu(f7.views.main.router.currentRoute.name);
        f7.$(".back").click(function (e) {
            if (self.state.menu == "shops") {

                props.router.back(f7.params.home + "/home", {force: true});
            } else {

                props.router.back(f7.params.home + "/menu");
            }
        });
        f7.preloader.show();
        request.json(f7.params.home + "get-shops-data", function (fetchData) {
            if (fetchData) {
                setShopsDetails([...fetchData]);
                f7.preloader.hide();
            } else {
                f7.preloader.hide();
                f7.popup.close();
                f7.dialog.alert("error");
            }
        });
    }, [shopsDetails.id]);

    return (
        <Page noSwipeback>
            <Navbar innerClass={"current-theme-color"} title={fa.shops}>
                <Subnavbar>
                    <Searchbar
                        className="searchbar-list"
                        searchContainer=".search-list"
                        searchIn=".item-title"
                        disableButtonText={fa.close}
                        disableButton={!dv.desktop}
                        placeholder={fa.search}
                    ></Searchbar>
                </Subnavbar>
            </Navbar>
            <List className="searchbar-not-found">
                <ListItem title="فروشگاهی یافت نشد!"/>
            </List>
            <List className="search-list searchbar-found" medialist>
                {shopsDetails.map((shop) => (
                    <ListItem
                        key={shop.id}
                        title={shop.shop_name}
                        href={"#"}
                        onClick={() => {
                            setShopDetail({...shop});
                            f7.popup.open(".shop-details", true);
                        }}
                    >
                        <div slot="media" className={"item-after"}>
                            <i
                                id={"fav-f654987465465" + shop.id}
                                className={
                                    shop.fav > 0 ? "f7-icons" : "f7-icons"
                                }
                            >
                                {shop.fav > 0 ? "heart_fill" : "heart"}
                            </i>
                        </div>
                    </ListItem>
                ))}
            </List>
            <ShopDetails data={0.58}/>
        </Page>
    );
}
