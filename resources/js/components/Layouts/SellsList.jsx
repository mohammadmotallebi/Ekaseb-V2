import {
    List,
    ListItem,
    Page,
    f7,
    Col,
    Preloader,
    Chip,
    Searchbar,
    Block,
    Link,
    Row,
    Icon,
    Navbar, Subnavbar
} from "framework7-react";
import React, {useState, useEffect} from "react";
import fa from "../lang/fa";
import {getDevice, request, Dom7 as $$} from "framework7";

import SellListItemDetailPopup from "../Popups/SellListItemDetailPopup";
import {number} from "../Helper";

const dv = getDevice();


export default () => {
    let [list, setList] = useState([]);
    let [shops, setShops] = useState([]);
    let [prices, setPrices] = useState(0);
    let [sellListDetail, setSellListDetail] = useState([]);


    function getShopList() {
        request.json(f7.params.home + 'get-my-shops-name', function (data) {
            setShops([...data]);
        });
    }

    function renderList() {
        let sum = 0;
        f7.progressbar.show('white');
        request.json(f7.params.home + 'Shop/get-first-shop', function (firstShop) {
            $$('#s_id_g65653456').find('.item-after').html(firstShop.shop_name);
            request.json(f7.params.home + 'Shop/get-sell-list/' + firstShop.id, function (data) {
                setList([...data]);
                data.map(d =>
                    sum += parseInt(d.price * d.Sold)
                )
                setPrices(number(sum))
                f7.progressbar.hide();
            });
        });
    }

    function getSearchedValue() {
        // hidden-by-searchbar
        let sum = 0;
        let c = 0;
        for (let i = 0; i < f7.searchbar.get('.searchbar-list').$searchContainer[0].childNodes[0].childElementCount; i++) {
            if (!f7.searchbar.get('.searchbar-list').$searchContainer[0].getElementsByTagName('li').item(i).classList.contains('hidden-by-searchbar')) {
                sum += parseInt(f7.searchbar.get('.searchbar-list').searchContainer.getElementsByClassName('item-after')[i].innerText.replaceAll(',', '')
                    * parseInt(f7.searchbar.get('.searchbar-list').searchContainer.querySelectorAll('#sold .chip-media')[i].innerHTML))
                c++;
            }

        }
        setPrices(number(sum))
    }

    return (

        <Page noSwipeback onPageInit={() => renderList()} onPageBeforeIn={() => getShopList()}>
            <Navbar innerClass={'current-theme-color'} title={fa.sells}>
                <Subnavbar inner={false}>
                    <Searchbar
                        className="searchbar-list"
                        searchContainer="#sell-list"
                        searchIn=".item-title"
                        backdrop={false}
                        disableButton={false}
                        placeholder={fa.item_search}
                        onChange={() => getSearchedValue()}

                    ></Searchbar>
                </Subnavbar>
            </Navbar>
            <List mediaList inset>
                <ListItem
                    style={{borderBottom: '1px solid rgba(var(--f7-theme-color-rgb),0.15)', borderTop: '1px solid rgba(var(--f7-theme-color-rgb),0.15)'}}
                    title={fa.form.shop_name}
                    smartSelect
                    smartSelectParams={{
                        openIn: 'sheet',
                        closeOnSelect: true,
                        scrollToSelectedItem: true,
                        sheetCloseLinkText: [fa.close_icon],
                        on: {
                            close: (e) => {
                                setList([])
                                let sum = 0;
                                f7.progressbar.show('white');
                                request.json(f7.params.home + 'Shop/get-sell-list/' + e.getValue(), function (data) {
                                    setList([...data]);
                                    data.map(d =>
                                        sum += parseInt(d.price)
                                    )
                                    setPrices(number(sum))
                                    f7.progressbar.hide();
                                });
                            }
                        }
                    }}
                    id={'s_id_g65653456'}

                >
                    <select name="shop" id={'shop_s65496798'} className={'text-align-right'}>
                        {
                            shops.map((shop, index) =>
                                <option key={index} value={shop.id}>  {shop.shop_name}  </option>
                            )
                        }
                    </select>
                </ListItem>
            </List>

            <List mediaList inlineLabels noHairlinesMd id={'sell-list'} className="search-list searchbar-found pb-2 list-item-custom">
                {
                    list.map((item, index) =>
                        <ListItem href="#" key={item.id} title={item.item_name}
                                  onClick={() => setSellListDetail(item)}
                                  popupOpen=".item_detail"
                                  after={number(item.price)}
                                  subtitle={[
                                      <Chip id={'sold'} text={fa.sold} key={index + 1} className={'margin-left-half'} mediaBgColor="blue" media={item.Sold}/>,
                                      <Chip text={fa.remaining} key={index + 2} mediaBgColor="green" className={'margin-left-half'} media={item.Remain}/>,
                                      <Chip text={fa.not_approved} key={index + 3} mediaBgColor="red" media={item.Approve}/>,
                                  ]}
                        >
                        </ListItem>
                    )

                }
            </List>
            <Block strong className='current-theme-color text-align-center' style={{position: 'fixed', width: '100%', bottom: 'var(--f7-toolbar-height)', margin: '0'}}>
                {fa.price} : {prices} {fa.currency}
            </Block>
            <SellListItemDetailPopup sell={sellListDetail}/>
        </Page>

    )


}



