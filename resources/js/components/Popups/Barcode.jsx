import React, {Component} from 'react';
import fa from '../lang/fa';

import {Block, BlockTitle, Link, List, ListItem, Navbar, NavRight, Page, Popup, Card, f7} from "framework7-react";
import QrScanner from 'qr-scanner';
QrScanner.WORKER_PATH = '../js/qr-scanner-worker.min.js';

function barcodeScan() {
    const video = document.getElementById('barcode-scanner');

    const qrScanner = new QrScanner(video, result => console.log('decoded qr code:', result));
    qrScanner.start();
}





export default (props) => {

    return (
        <Popup className={'barcode'} swipeToClose onPopupOpened={()=>barcodeScan()}>
            <Page>
                <Navbar title={fa.add_credit}>
                    <NavRight>
                        <Link popupClose iconF7='multiply_circle_fill'></Link>
                    </NavRight>
                </Navbar>



            </Page>

        </Popup>
    )
}
