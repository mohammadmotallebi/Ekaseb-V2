import {Block, BlockTitle, Link, List, ListItem, Navbar, NavRight, Page, Popup, Card, f7} from "framework7-react";
import React, {useState} from "react";
import fa from "../lang/fa.jsx";
const number = (num) => {
    return new Intl.NumberFormat().format(num);
}

export default (props) => {

    return (
    <Popup className={'add-credit'} swipeToClose>
        <Page>
            <Navbar title={fa.add_credit}>
                <NavRight>
                    <Link popupClose iconF7='multiply_circle_fill'></Link>
                </NavRight>
            </Navbar>
                <Card content={' برای افزایش اعتبار با پشتیبانی تماس بگیرید.'} className={'text-align-center'} >

                </Card>
        </Page>

    </Popup>
    )
}


