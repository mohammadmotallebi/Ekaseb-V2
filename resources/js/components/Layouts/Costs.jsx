import React, {Component} from 'react';
import fa from '../lang/fa';
import {
    Block,
    BlockTitle,
    Button,
    Col, f7,
    List,
    ListInput,
    ListItem,
    Page,
    Row,
} from 'framework7-react';
import Framework7, {getDevice, Dom7 as $$} from "framework7";

let dv = getDevice();

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ['a', 'b', 'c']
        }
    }

    render() {
        return (
            <Page>

            </Page>
        )
    }
}
