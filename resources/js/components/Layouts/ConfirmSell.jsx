import React, {useEffect, useState} from 'react';
import {
    Page,
    f7,
    List,
    ListItem,
    Card,
    SwipeoutActions,
    SwipeoutButton,
    Col,
    Preloader, Navbar
} from 'framework7-react'
import {Dom7 as $$, request} from "framework7";
import fa from '../lang/fa'


export default () => {
    const [sells, setSells] = useState([]);
    const [empty, setEmpty] = useState();
    useEffect(() => {
        f7.progressbar.show('white')
        request.json('confirm-sells', (data) => {
            setSells(data)
            if (data.length == 0) {
                setEmpty(
                    <Card className={'text-align-center'} content={fa.alert.not_items}></Card>
                )
            }
            f7.progressbar.hide()
        })
    }, []);

    const approve = (id) => {
        request.postJSON('approve-bill', {id: id})
            .then((res) => {
                f7.store.state.countApBill = res.data;
                $$('#count').text(res.data)
            })

    }


    return (
        <Page noSwipeback>
            <Navbar innerClass={'current-theme-color'} title={fa.approve_list}>
            </Navbar>
            <List mediaList>
                {sells.map((sell) =>
                    <ListItem swipeout key={sell.id}
                              title={sell.item_name}
                              after={Intl.NumberFormat().format(sell.price)}
                              subtitle={sell.buy_date}
                              text={sell.item_code}
                              onClick={(e) => console.log(e)}
                    >
                        <SwipeoutActions left>
                            <SwipeoutButton color="green" delete onClick={() => approve(sell.id)}>{fa.buttons.approve}</SwipeoutButton>
                        </SwipeoutActions>
                    </ListItem>
                )}
            </List>
            {empty}
        </Page>
    )
}