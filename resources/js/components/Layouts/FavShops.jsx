import React, {Component} from 'react';
import {
    List,
    ListItem,
    Page,
    f7,
    Navbar,
    Searchbar, NavRight, Link
} from "framework7-react";
import fa from "../lang/fa";
import '../../style.css';
import ShopDetails from "./ShopDetails";
import {request, getDevice, Dom7 as $$} from "framework7";

const dv = getDevice();
export default class FavShops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopsDetails: [],
            shopId: 0,
            shopFav: 0,
            menu: '',
            fav: 0,
            noData: ''
        }
    }

    componentDidMount() {
        let self = this;
        self.setState({menu: f7.views.main.router.currentRoute.name});
        f7.$('.back').click(function (e) {
            if (self.state.menu == 'shops') {

                self.props.router.back('/home', {force: true});
            } else {

                self.props.router.back('/menu');
            }
        });
        f7.preloader.show();
        request.json(f7.params.home + 'get-fav-shops-data', function (fetchData) {
            if (fetchData.length < 1) {
                self.setState({
                    noData: <div className="card">
                        <div className="card-content  card-content-padding text-align-center">
                            {fa.alert.not_fav_shop}
                        </div>
                    </div>
                });
            }
            if (fetchData) {
                self.setState({shopsDetails: [...fetchData]});
                f7.preloader.hide();
            } else {
                f7.preloader.hide();
                f7.popup.close();
                f7.dialog.alert('error');
            }
        })

    }

    render() {
        return (
            <Page noNavbar={false} noToolbar={true}>

                <Navbar backLinkForce={true}>
                    <div className="left">
                        <a href={'/menu'} className="link icon-only">
                            <i className="icon icon-back"></i>
                        </a>
                    </div>
                    <div className="title">{fa.menu.fav_shop}</div>
                    <NavRight>
                        <Link searchbarEnable=".searchbar-list" iconIos="f7:search" iconAurora="f7:search" iconMd="material:search"></Link>
                    </NavRight>
                    <Searchbar
                        className="searchbar-list"
                        searchContainer=".search-list"
                        searchIn=".item-title"
                        expandable
                        disableButton={!dv.desktop}
                        placeholder={fa.search}
                    ></Searchbar>
                </Navbar>
                {this.state.noData}
                <List className="search-list searchbar-found" medialist>
                    {
                        this.state.shopsDetails.map((shop) =>
                            <ListItem key={shop.id} title={shop.shop_name} href={'#'} onClick={() => {
                                f7.store.dispatch('setJsonProps', {id: shop.id, fav: shop.fav})
                                f7.popup.open('.shop-details', true);
                            }}>
                                <div slot="media" className={'item-after'}><i id={'fav-f654987465465' + shop.id} className={'f7-icons'}>heart_fill</i></div>
                            </ListItem>
                        )
                    }

                </List>
                <ShopDetails/>
            </Page>

        )
    }
}
