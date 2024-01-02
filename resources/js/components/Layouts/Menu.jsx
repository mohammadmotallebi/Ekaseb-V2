import React, {useEffect, useState} from 'react';
import {
    useStore,
    f7,
    Icon,
    List,
    ListItem,
    Page,
    Navbar,
} from "framework7-react";
import {request} from 'framework7'
import fa from "../lang/fa";
import '../../style.css';


export default (props) => {
    const [userFullName, setUserFullName] = useState();
    const detail = useStore('detail');
    const isLoading = useStore('loading');
    const hasError = useStore('error');

    useEffect(() => {
        f7.store.dispatch('getUserDetail')
    }, [])
    useEffect(() => {
        if (isLoading) {
            setUserFullName('');
        } else if (hasError) {
            setUserFullName('---');
            f7.notification.create({
                icon: '<i class="f7-icons">checkmark_circle</i>',
                subtitle: [fa.alert.loading_error],
                closeTimeout: 3000,
                closeOnClick: true,
                cssClass: 'danger',
            }).open();
        } else {
            setUserFullName((detail.name !== '' || detail.family !== '') ? detail.name + ' ' + detail.family : detail.mobile);
        }

        f7.routes.find(({name}) => name === 'profile').options.props.detail = detail;
    }, [isLoading])

    useEffect(() => {
        if (detail.city > 0) {
            request.json(`${f7.params.home}get-city-list`, function (cities) {
                f7.routes.find(({name}) => name === 'profile').options.props.cities = [...cities];
                request.json(`${f7.params.home}get-state-list/${detail.city}`, function (states) {
                    f7.routes.find(({name}) => name === 'profile').options.props.states = [...states];
                })
            })

        }
    }, [detail.city])


    return (
        <Page noToolbar={false} noSwipeback>
            <Navbar innerClass={'current-theme-color'} title={fa.menu.menu}>
            </Navbar>
            <List>
                <ListItem link={'/edit-profile'} title={userFullName} className={'text-align-center'}>
                    <img slot="media"
                         src={(detail.user_pic) ? detail.user_pic : 'img/avatar.png'}
                         className={'img-profile'}/>
                </ListItem>
                <ListItem link={'/fav-shops'} title={fa.menu.fav_shop}>
                    <Icon style={{color: 'var(--f7-theme-color)'}} slot="media" f7={'suit_heart'}></Icon>
                </ListItem>
                <ListItem href='/theme' title={fa.menu.theme}>
                    <Icon style={{color: 'var(--f7-theme-color)'}} slot="media" f7={'paintbrush'}></Icon>
                </ListItem>
                <ListItem title={fa.menu.reports}>
                    <Icon style={{color: 'var(--f7-theme-color)'}} slot="media" f7={'doc_chart'}></Icon>
                </ListItem>
                <ListItem link={'/edit-security'} title={fa.menu.security}>
                    <Icon style={{color: 'var(--f7-theme-color)'}} slot="media" f7={'lock'}></Icon>
                </ListItem>
                <ListItem href='/logout' external title={fa.menu.logout}>
                    <Icon style={{color: 'var(--f7-theme-color)'}} slot="media" f7={'square_arrow_right'}></Icon>
                </ListItem>
            </List>
        </Page>

    )

}
