import React, {useState, useEffect, useMemo, useCallback, useRef} from 'react';
import {Block, BlockHeader, Button, Col, f7, Icon, Link, List, ListInput, ListItem, Navbar, NavLeft, NavRight, NavTitle, Page, Popup, Preloader, Range, Row, Stepper, useStore} from "framework7-react";
import fa from "../lang/fa";
import {getDevice, Dom7 as $$, request} from "framework7";
import store from "../store/store";
import {number, postData, inputNumber} from "../Helper";
import DatePicker from "../Components/DatePicker";
import BeatLoader from "react-spinners/BeatLoader";


const EditItem = ({uc, remain, name, price, f7router}) => {

    const [navbar, setNavbar] = useState();
    const itemCount = useStore('itemCount');
    const itemName = useStore('itemName');
    const percent = useStore('off_percent')
    const off = useStore('off_price')
    const start_date = useStore('start_date')
    const end_date = useStore('end_date')
    const images = useStore('image')
    const loading = useStore('loading')
    const data = useStore('itemEditData');
    const finalPrice = useStore('price');
    const [headPrice, setHeadPrice] = useState();
    const [counter, setCounter] = useState(0);

    const dv = getDevice();
    useEffect(() => {
        if (dv.android) {
            setNavbar(<Navbar>
                <NavRight>
                    <Link popupClose iconF7="multiply_circle_fill"></Link>
                    <NavTitle>{fa.edit_item}</NavTitle>
                </NavRight>
                <NavLeft>
                    <Button id='submit' fill text={fa.buttons.edit} onClick={submit}></Button>
                </NavLeft>
            </Navbar>)
        }
        if (dv.ios) {
            setNavbar(<Navbar>
                <NavLeft>
                    <Link popupClose iconF7="multiply_circle_fill"></Link>
                    <NavTitle>{fa.edit_item}</NavTitle>
                </NavLeft>
                <NavRight>
                    <Button id='submit' fill text={fa.buttons.edit} onClick={submit}></Button>
                </NavRight>
            </Navbar>)
        }
    }, [dv.os]);

    const submit = () => {
        // if($$('#end_date').val() < $$('#start_date').val()){
        //     f7.notification.create({
        //         icon: '<i class="f7-icons">multiply_circle_fill</i>',
        //         title : fa.alert.error,
        //         text: fa.alert.date_error,
        //         closeTimeout: 3000,
        //         closeOnClick: true,
        //     }).open(true)
        //     return false;
        // }
        store.dispatch('setActiveDate', {s: $$('#start_date').val(), e: $$('#end_date').val()})
        store.dispatch('setItemEdit')
        f7router.navigate('/update-item/')

    }



    const offCalHandlerPercent = (e) => {
        inputNumber(e)
        store.dispatch('setActivePercent', {data: e.target.value.replaceAll(',', ''), e: price})
        store.dispatch('setPrice', price)
    }
    const offCalHandlerPrice = (e) => {
        store.dispatch('setActivePrice', {data: e, e: price})
        store.dispatch('setPrice', price)
    }

    useEffect(() => {
        store.dispatch('setItemEditData', uc)
    }, []);

    useEffect(() => {
        store.dispatch('setProp', price)
    }, []);
    useEffect(() => {
        store.dispatch('setItemName', name)
        store.dispatch('setItemCount', remain)
    }, []);

    const resetForm = () => {
        store.dispatch('emptyActive')
    };


    useEffect(() => {

        setHeadPrice((off === '0' || off === 0) ? <span className="text-color-green">{number(price)}</span>
            :
            <div>
                <span className="text-color-green">{number(finalPrice)}</span>
                <i className="icon f7-icons color-red" style={{fontSize: '10px'}}>arrow_right</i>
                <span className="text-color-red"><del>{number(price)}</del></span>
            </div>)

    }, [finalPrice]);


    const CalendarMemo = useCallback(() => {
        return <List id='block-546465789a7d4a65' noHairlines>
            <DatePicker
                floatingLabel
                className='col-50'
                outline
                minYear={f7.params.date.year}
                maxYear={f7.params.date.year + 10}
                label={fa.form.start_date}
                type="text"
                parentId={'block-546465789a7d4a65'}
                placeholder={fa.form.placeholder.start_date}
                name={'start_date'}
                id={'start_date'}
                value={start_date}
            >
            </DatePicker>
            <DatePicker
                floatingLabel
                outline
                className='col-50'
                label={fa.form.end_date}
                type="text"
                minYear={f7.params.date.year}
                maxYear={f7.params.date.year + 10}
                parentId={'block-546465789a7d4a65'}
                indexAfter={0}
                placeholder={fa.form.placeholder.end_date}
                name={'end_date'}
                id={'end_date'}
                value={end_date}
            >
            </DatePicker>
        </List>

    }, [loading]);


    const handleHeadPrice = useCallback(() => {
        store.dispatch('setPrice', price)
        setHeadPrice( (store.getters.off_price.value === '0' || store.getters.off_price.value === 0 || store.getters.off_price.value === undefined) ? <span className="text-color-green">{number(price)}</span>
            :
            <div>
                <span className="text-color-green">{number(finalPrice)}</span>
                <i className="icon f7-icons color-red" style={{fontSize: '10px'}}>arrow_right</i>
                <span className="text-color-red"><del>{number(price)}</del></span>
            </div>)
    },[off])

    return (
        <Popup
            className={"edit-item"}
            noSwipeback
            onPopupClose={resetForm}
            onPopupOpened={handleHeadPrice}
            onPopupOpen={() => store.dispatch('setPrice', price)}
        >
            <Page noNavbar={true} noToolbar={false} withSubnavbar={true} className="bg-color-white">
                {navbar}
                <Block>
                    <List noHairlines>
                        <ListInput
                            floatingLabel
                            outline
                            autocomplete="off"
                            label={fa.form.item_name}
                            type="text"
                            name={"item_name"}
                            inputId={"item_name"}
                            id={"item_name_li"}
                            required
                            defaultValue={name}
                            onChange={(e) => store.dispatch('setItemName', e.target.value)}
                            clearButton
                        ></ListInput>
                        <ListItem title={`موجودی : ${itemCount}`}>
                            <Stepper
                                buttonsOnly={true}
                                large
                                value={itemCount}
                                min={0}
                                max={1000}
                                raised
                                fill
                                slot="after"
                                autorepeatDynamic
                                autorepeat
                                onStepperChange={(e) => store.dispatch('setItemCount', parseInt(e))}
                            />
                        </ListItem>
                    </List>
                </Block>
                <Block className='text-align-center' inset strong style={{border: '1px solid rgba(var(--f7-theme-color-rgb),0.6)'}}>
                    <BlockHeader className="display-flex justify-content-space-between">
                        <div className="right">{fa.create_off}</div>
                        <div className="left">
                            {
                                headPrice
                            }

                        </div>
                    </BlockHeader>
                    <List noHairlines>
                        <ListInput
                            floatingLabel
                            outline
                            autocomplete="off"
                            label={fa.form.off_price}
                            name={"off_price"}
                            inputId={"off_price"}
                            id={"off_price_li"}
                            pattern="[0-9]*"
                            value={off}
                            onChange={offCalHandlerPercent}
                        ></ListInput>
                        <ListItem>
                            <Range
                                id='off_percent'
                                min={0}
                                label
                                scale
                                value={percent}
                                formatLable={(val) => {
                                    return '%' + val
                                }}
                                formatScaleLabel={(val) => {
                                    return val + '<b class="text-color-green">%</b>'
                                }}
                                scaleSteps={5}
                                scaleSubSteps={4}
                                max={100}
                                step={1}
                                onRangeChange={offCalHandlerPrice}
                            />
                        </ListItem>
                    </List>
                    <BeatLoader color="var(--f7-theme-color)" loading={loading}/>
                    <CalendarMemo/>

                </Block>
                <List>
                    <input
                        type="file"
                        id="item_images_i65497654654654d"
                        name="user_pic"
                        accept="image/*;capture=camera"
                        style={{display: "none"}}
                        multiple
                        onChange={(e) => store.dispatch('uploadImage', e)}
                    />
                    <ListItem
                        link="#"
                        title={fa.buttons.images_list}
                        onClick={() => {
                            document
                                .getElementById("item_images_i65497654654654d")
                                .click();

                        }}
                    >
                        <div
                            slot="after-title"
                            style={{
                                fontSize: "11px",
                                color: "var(--f7-theme-color)",
                                marginRight: "2px",
                            }}
                        >
                            {fa.image_count_limit}
                        </div>
                        <Icon
                            slot="after"
                            f7="photo_fill_on_rectangle_fill"
                        ></Icon>
                    </ListItem>
                </List>
                <Block className="align-content-center">
                    {images.map((img, index) => (
                        <div
                            className="chip"
                            key={index}
                            style={{height: "70px", marginLeft: "3px", borderRadius: '5px'}}
                        >
                            <div
                                className="chip-media"
                                style={{width: "70px", height: "70px"}}
                            >
                                <img
                                    slot="media"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: '5px'
                                    }}
                                    src={img}
                                />
                            </div>
                            <div className="chip-label">{index + 1}</div>
                            <a
                                href="#"
                                id={index}
                                className={"chip-delete"}
                                onClick={(e) => store.dispatch('removeImage', e.target.id)}
                            ></a>
                        </div>
                    ))}
                </Block>
            </Page>
        </Popup>
    );
};

export default EditItem;
