import {Block, Link, List, ListItem, Navbar, NavRight, Page, Popup, Card} from "framework7-react";
import React from "react";
import fa from "../lang/fa";
import {number} from "../Helper";
export default (props) => {
    return (
    <Popup className={'buy_list_detail'} swipeToClose>
        <Page>
            <Navbar title={fa.detail}>
                <NavRight>
                    <Link popupClose iconF7='multiply_circle_fill'></Link>
                </NavRight>
            </Navbar>
            <Block strong className={'current-theme-color text-align-center'}>
             {props.buy_detail_props.item_name}
             </Block>

            <Card className={(props.buy_detail_props.status === '1') ? 'bg-green-light text-align-center' : 'bg-red-light text-align-center'} content={(props.buy_detail_props.status === '1') ? fa.approved : fa.not_approved }></Card>
            <List>
                <ListItem title={fa.bill_number} after={props.buy_detail_props.bill_number}></ListItem>
                <ListItem title={fa.buy_date} after={props.buy_detail_props.buy_date}></ListItem>
                <ListItem title={fa.shop_name} after={props.buy_detail_props.shop_name}></ListItem>
                <ListItem title={fa.price} after={number(props.buy_detail_props.price)}></ListItem>
                <ListItem title={fa.credit} after={number(props.buy_detail_props.credit)}></ListItem>
                <ListItem title={fa.item_code} after={props.buy_detail_props.item_code}></ListItem>
            </List>
        </Page>

    </Popup>
    )
}


