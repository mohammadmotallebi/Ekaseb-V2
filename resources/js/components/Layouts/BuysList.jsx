import {
    List,
    ListItem,
    Page,
    Col,
    Preloader,
    f7,
    Block,
    Row,
    Navbar,
    Searchbar,
    Icon,
    Subnavbar
} from "framework7-react";
import React, {useState, useEffect} from "react";
import fa from "../lang/fa";
import {request, Dom7 as $$} from "framework7";

import BuyListDetailPopup from "../Popups/BuyListDetailPopup";
import {number} from "../Helper";

export default () => {
    let [buyList, setBuyList] = useState([]);
    let [buyListDetail, setBuyListDetail] = useState([]);
    let [prices, setPrices] = useState(0);
    let [count, setCount] = useState(0);
    useEffect(() => {
        f7.progressbar.show('white')
        request.json(f7.params.home + 'get-user-buy-list', function (data) {
            if (data.length < 1) {
                $$('div#buy_l654654987654163465').find('.card-content').html(fa.alert.you_dont_have_buy);
            } else {
                $$('div#buy_l654654987654163465').hide();
                setBuyList([...data]);
            }
            f7.progressbar.hide()
        });
    }, [])

    function getSearchedValue() {
        // hidden-by-searchbar
        let sum = 0;
        let c = 0;
        for (let i = 0; i < f7.searchbar.get('.searchbar-list').$searchContainer[0].childNodes.length; i++) {
            if (!f7.searchbar.get('.searchbar-list').$searchContainer[0].getElementsByTagName('li').item(i).classList.contains('hidden-by-searchbar')) {
                sum += parseInt(f7.searchbar.get('.searchbar-list').searchContainer.getElementsByClassName('item-after')[i].innerText.replaceAll(',', ''))
                c++;
            }
        }
        setPrices(number(sum))
        setCount(c)
    }


    return (
        <Page noSwipeback noToolbar={true} onPageAfterIn={() => getSearchedValue()}>
            <Navbar innerClass={'current-theme-color'} title={fa.buy_list}>
                <Subnavbar>
                    <Searchbar
                        className="searchbar-list"
                        searchContainer=".search-list"
                        searchIn=".item-title"
                        backdrop={false}
                        disableButton={false}
                        placeholder={fa.item_search}
                        onChange={() => getSearchedValue()}
                        style={{margin: '0'}}
                    ></Searchbar>
                </Subnavbar>
            </Navbar>
            <div className="card" id={'buy_l654654987654163465'}>
                <div className="card-content  card-content-padding text-align-center">
                </div>
            </div>
            <List inlineLabels noHairlinesMd id={'sell-list'} className="search-list searchbar-found pb-2 pt-0"
                  style={{marginTop: 'var(--f7-navbar-height)'}}>
                {
                    buyList.map((item) =>
                        <ListItem style={{fontSize: '14px'}} href={item.bill_number} key={item.bill_number}
                                  title={item.item_name}
                                  popupOpen=".buy_list_detail" onClick={() => setBuyListDetail(item)}>
                            {(item.status === '1') ?
                                <Icon f7={"checkmark_circle_fill"} className={'green-light'} slot={'media'}></Icon>
                                :
                                <Icon f7={"hourglass"} className={'red-light'} slot={'media'}></Icon>
                            }
                            <div slot="after"> {number(item.price)}</div>
                            <div slot="after-title"
                                 className='text-primary mr-1'> ({item.buy_date})
                            </div>
                            <div slot="after-title"
                                 className='text-color-gray mr-5'> ({item.shop_name})
                            </div>
                        </ListItem>
                    )
                }
            </List>
            <Block strong className='current-theme-color'
                   style={{position: 'fixed', width: '100%', bottom: 'var(--f7-toolbar-height)', margin: '0'}}>
                <Row className='text-align-center'>
                    <Col>
                        {fa.price} : {prices} {fa.currency}
                    </Col>
                    <Col>
                        {fa.count} : {count}
                    </Col>
                </Row>
            </Block>
            <BuyListDetailPopup buy_detail_props={buyListDetail}/>
        </Page>
    )


}



