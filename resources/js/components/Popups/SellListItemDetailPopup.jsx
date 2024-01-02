import {
    Block,
    BlockTitle,
    Link,
    List,
    ListItem,
    Navbar,
    NavRight,
    Page,
    Popup,
    f7,
    Col,
    Preloader,
    Icon,useStore
} from "framework7-react";
import React, {useState} from "react";
import fa from "../lang/fa";
import {request,Dom7 as $$} from "framework7";
import {number} from "../Helper";
export default (props) => {
    let [code_c8798546546555,setCode_c8798546546555] = useState([]);
        const role = useStore('role');
        let getCardList_f445449789877 = (id) => {
        {
            f7.$('#loader_l6546546544').show();
            let lists_v654984654 = '';
            request.json(f7.params.home+'ShopItems/get-item-codes/'+id,function (fetchData){
                            setCode_c8798546546555([...fetchData])
                        f7.$('#loader_l6546546544').hide();
                    })
        }
    }

    return (
    <Popup className={'item_detail'} swipeToClose onPopupOpened={() => getCardList_f445449789877(props.sell.unique_code)}>
        <Page>
            <Navbar title={fa.detail}>
                <NavRight>
                    <Link popupClose iconF7='multiply_circle_fill'></Link>
                </NavRight>
            </Navbar>
            <Block strong className={'current-theme-color text-align-center'}  style={{fontWeight:'600',position: 'sticky',top: '0',zIndex:'200'}}>
                {props.sell.item_name}
            </Block>
            <List>
                <ListItem title={fa.price} after={number(props.sell.price)}></ListItem>
                <ListItem title={fa.credit} after={number(props.sell.credit)}></ListItem>
                <ListItem title={fa.category} after={props.sell.item_category_name}></ListItem>
            </List>
            {(role === 'shop_admin') ? (
                <>
                <BlockTitle medium>{fa.item_code_list}</BlockTitle>

                <Block strong>
                    <Col id={'loader_l6546546544'} className="text-align-center margin-top">
                        <Preloader size={42}></Preloader>
                    </Col>
                <List>
                    {
                        code_c8798546546555.map((item,index) =>
                    <ListItem key={index} title={item.item_code} style={{fontSize:"15px"}}>
                            <div slot="after-title" className={'small text-primary mr-2'}> {item.buy_date} </div>
                            <div slot="after">{
                                (item.status === 1) ?
                                    <Icon  f7="checkmark_circle_fill"></Icon> :
                                    <Icon  f7="xmark_circle_fill"></Icon>
                            }</div>
                    </ListItem>
                         )
                    }
                </List>
                </Block></>): ('')}
        </Page>

    </Popup>
    )
}


