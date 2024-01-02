import {Block, f7, Icon, Link, List, ListItem, Navbar, NavRight, Page, Popup} from "framework7-react";
import React, {useState} from "react";
import fa from "../lang/fa";
import {request} from "framework7";
import {number} from "../Helper";
export default () => {

    const [buysList, setBuysList] = useState([]);
    const [noData, setNoData] = useState('');
    const handleBuysList = () =>{
    f7.preloader.show();
    request.json(f7.params.home+'get-home-data',function (fetchData){
                if(fetchData) {
                    setBuysList(fetchData.data.report);
                    f7.preloader.hide();
                    if (fetchData.data.report.length < 1){
                        setNoData(`<div className="card">
                            <div className="card-content  card-content-padding text-align-center">
                                {fa.alert.not_buy}
                            </div>
                        </div>`);
                    }

                }else {
                    f7.preloader.hide();
                    f7.popup.close();

                    f7.dialog.alert('error');
                }
            })
}

    return(
    <Popup name={'l'} className="buy-list" swipeToClose onPopupOpen={handleBuysList}>
        <Page>
            <Navbar title={fa.buys}>
                <NavRight>
                    <Link popupClose iconF7='multiply_circle_fill'></Link>
                </NavRight>
            </Navbar>
            {noData}
                <List mediaList>
                    {
                        buysList.map( buy =>
                            <ListItem
                                key={buy.bitem_id}
                            >
                                <div className="item-title-row">
                                    <div className="item-title">
                                        <div><Icon f7={'arrowtriangle_left_fill'}></Icon> {buy.item_name} <span className="small text-primary">({buy.buy_date})</span></div>

                                    </div>
                                    <div className="item-after"><span>{number(buy.price)} <Icon
                                        f7={'money_dollar'}></Icon></span></div>
                                </div>
                                <div className={'item-subtitle'}><Icon f7={'cart'}></Icon> {buy.shop_name}</div>
                                <div className={'item-text'}
                                     style={{color: 'rgb(11 142 0 / 71%)'}}>{buy.credit} {(buy.credit) ?
                                    <Icon f7={'gift'}></Icon> : ''}</div>
                            </ListItem>
                        )
                    }

                </List>

        </Page>
    </Popup>
    );

}
