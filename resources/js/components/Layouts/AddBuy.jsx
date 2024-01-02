import React, {useState, useCallback, useRef} from 'react';
import fa from '../lang/fa';

import {
    Block, BlockHeader,
    Button,
    Col, f7, Link,
    List,
    ListInput,
    ListItem, Navbar, NavLeft, NavRight, NavTitle,
    Page,
    Row, Swiper, SwiperSlide,
} from 'framework7-react';
import {request, getDevice, Dom7 as $$} from "framework7";
import QrScanner from 'qr-scanner'



const dv = getDevice();

const isNative = 1;
import {limitString, number} from "../Helper";
import BeatLoader from "react-spinners/BeatLoader";


export default () => {

    const [finalResult, setFinalResult] = useState('');
    const [i, setI] = useState('');
    const [qrScanner, setQrScanner] = useState(null);
    const videoElem = useRef(null);

    const scan = useCallback(() => {
        $$('#qrcode_block').show()
        const videoElement = isNative ? videoElem.current : videoElem.current.video;
        videoElement.style.maxWidth = 'var(--f7-page-master-width)'
        videoElement.style.maxHeight = '400px'
        videoElement.style.border = '3px solid var(--f7-theme-color)'
        videoElement.style.borderRadius = '5px'
        const scanner = new QrScanner(videoElement, (result) => {
            if (result.data.length === 15) {
                $$('#qrcode_block').hide()
                scanner.destroy();
            }
            handleChange(result.data)

        }, {
            returnDetailedScanResult: true,
            highlightScanRegion: true,
            highlightCodeOutline: true,
        })


        $$('.scan-region-highlight').find('svg.scan-region-highlight-svg').css('stroke', 'var(--f7-theme-color)')

        scanner._updateOverlay()
        scanner.setInversionMode('both')
        setQrScanner(scanner);
        scanner.start()
    }, []);

    const destroyQrReader = () => {
        if(qrScanner) {
            qrScanner.destroy();
            setQrScanner(null);
        }
    };

    function saveItem() {
        let notification = f7.notification.create({
            icon: '<i class="f7-icons">checkmark_circle</i>',
            subtitle: [fa.alert.add_item_ok],
            closeTimeout: 3000,
            closeOnClick: true,
            cssClass: 'success',
        });
        request.get(f7.params.home + 'save-item/' + i, function (res) {
            if (res === '1') {
                notification.open();
                f7.view.main.router.navigate('/home', {force: false});
            } else {
                f7.dialog.alert(fa.alert.save_error);
            }
        })
    }


    function successList(item) {
        return (
            <>
                <Block>
                    <Row>
                        <Col>
                            <Button fill iconF7={'floppy_disk'} onClick={() => saveItem()}>{fa.save}</Button>
                        </Col>
                    </Row>
                </Block>
                <Block style={{margin: "5px 0"}}>
                    <Block inset strong className={"col mt-0 mb-1 ml-0 mr-0 pastel-blue-01 text-align-center"} style={{minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706'}}>
                        <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706",}}>
                            {fa.item_name}
                        </BlockHeader>
                        {item.item_name ? limitString(item.item_name) : '---'}
                    </Block>
                    <Swiper spaceBetween={5} slidesPerView={3} scrollbar zoom>
                        <SwiperSlide>
                            <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center"} style={{minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706'}}>
                                <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706",}}>
                                    {fa.category}
                                </BlockHeader>
                                {item.item_category ? limitString(item.item_category) : '---'}
                            </Block>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center"} style={{minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706'}}>
                                <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706",}}>
                                    {fa.type}
                                </BlockHeader>
                                {item.item_type ? limitString(item.item_type) : '---'}
                            </Block>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center"} style={{minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706'}}>
                                <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706",}}>
                                    {fa.model}
                                </BlockHeader>
                                {item.item_model ? limitString(item.item_model) : '---'}
                            </Block>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center"} style={{minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706'}}>
                                <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706",}}>
                                    {fa.size}
                                </BlockHeader>
                                {item.item_size ? limitString(item.item_size) : '---'}
                            </Block>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center"} style={{minHeight: '120px', maxHeight: '150px'}}>
                                <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706",}}>
                                    {fa.color}
                                </BlockHeader>
                                {item.item_color ? limitString(item.item_color) : '---'}
                            </Block>
                        </SwiperSlide>
                    </Swiper>
                </Block>
                <Block className={"row text-align-center"} style={{margin: "5px 0"}}>
                    <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-green-01"} style={{border: "1px solid rgb(35 136 18 / 47%)"}}>
                        <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#238812",}}>
                            {fa.price}
                        </BlockHeader>
                        {number(item.item_price)}
                    </Block>

                    <Block inset strong className={"col mt-0 mb-0 ml-1 mr-1 pastel-green-01"} style={{border: "1px solid rgb(35 136 18 / 47%)"}}>
                        <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#238812",}}>
                            {fa.cashless_score}
                        </BlockHeader>
                        {number(item.item_score)}
                    </Block>

                    <Block inset strong className={"col mt-0 mb-0 ml-0 mr-0 pastel-green-01"} style={{border: "1px solid rgb(35 136 18 / 47%)"}}>
                        <BlockHeader className={"text-align-center"} style={{borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#238812",}}>
                            {fa.credit}
                        </BlockHeader>
                        {number(item.item_credit)}
                    </Block>
                </Block>
                <Block strong inset>
                    <Swiper pagination navigation scrollbar zoom dir='ltr' effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ["100%", 0, 0],
                                },
                            }}>
                        {
                            item.img.map((image, i) => {
                                return <SwiperSlide key={i} zoom>
                                    <img src={image}/>
                                </SwiperSlide>
                            })

                        }

                    </Swiper>
                </Block>
            </>
        )
    }

    function handleChange(val) {
        setI(val)
        if (val.length === 15) {
            setFinalResult(<Block className='text-align-center'><BeatLoader color="var(--f7-theme-color)"/></Block>)
            $$('#qrcode_block').hide()
            request({
                url: 'shop-item',
                method : 'POST',
                data: {id : val},
                dataType: 'json',
                contentType:'application/json',
                success(data, status, xhr) {
                    setFinalResult(successList(data))

                },
                error(xhr, status, message) {
                    setFinalResult('')
                    f7.toast.create({
                        icon: '<i class="f7-icons">exclamationmark_circle_fill</i>',
                        text: fa.alert.code_error,
                        position: 'center',
                        closeTimeout: 2000,
                    }).open();
                },
                complete(xhr, status) {
                }
            })


        } else {
            setFinalResult('')
        }
    }


    return (
        <Page noSwipeback onPageBeforeOut={destroyQrReader} onPageBeforeIn={() => $$('#qrcode_block').hide()}>
            {(dv.android) ?
                <Navbar innerClass='current-theme-color'>
                    <NavRight>
                        <NavTitle>{fa.add_buy}</NavTitle>
                    </NavRight>
                </Navbar> :
                <Navbar innerClass='current-theme-color'>
                    <NavLeft>
                        <NavTitle>{fa.add_buy}</NavTitle>
                    </NavLeft>
                </Navbar>
            }
            <List noHairlinesMd>
                <ListInput
                    inputId={'item_code'}
                    floatingLabel
                    label={fa.alert.enter_code}
                    type="text"
                    autocomplete="off"
                    pattern="[0-9]*"
                    placeholder={fa.alert.enter_code}
                    clearButton
                    onChange={(event) => handleChange(event.target.value)}
                    maxlength='15'
                    minLength='15'
                    defaultValue={''}
                    onInputClear={() => setFinalResult('')}
                >


                </ListInput>
                <Block>
                    <Button fill raised iconF7={'qrcode'} onClick={() => scan(qrScanner)}
                            className={'mt-4'}> {fa.buttons.use_barcode_scanner}
                    </Button>
                </Block>
            </List>
            <div className='text-align-center' id='qrcode_block'>

                <video ref={videoElem} id='qr_scan_camera'></video>

            </div>
            {
                finalResult
            }



        </Page>

    );

}
