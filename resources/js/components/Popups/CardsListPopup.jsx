import {f7, Icon, Link, List, ListItem, Navbar, NavRight, Page, Popup, Card} from "framework7-react";
import React, {useState} from "react";
import fa from "../lang/fa";

import {request,Dom7 as $$} from "framework7";
export default () => {

    const [cardsList, setCardsList] = useState([]);
    const [noData, setNoData] = useState(null);
    const handleCardsList = () => {
        f7.preloader.show();
        request.json(f7.params.home+'get-home-data',function (fetchData){
            setCardsList(fetchData.data.card);
            f7.preloader.hide();
            if (fetchData.data.card.length < 1){
                setNoData(<Card className="text-align-center" content={fa.alert.not_card}></Card>);
            }
                })
    }
        return (
        <Popup className="cards-list" swipeToClose  onPopupOpen={handleCardsList}>
            <Page>
                <Navbar title={fa.cards}>
                    <NavRight>
                        <Link popupClose iconF7='multiply_circle_fill'></Link>
                    </NavRight>
                </Navbar>
                {noData}
                    <List mediaList>
                    {
                        cardsList.map( card =>
                        <ListItem title={card.card_number} key={card.id}>
                        <span slot="after">
                        {(card.status === '1') ?
                            <Icon className={'green-light'} f7='checkmark_circle_fill'></Icon>
                            : <Icon className={'red-light'} f7='xmark_circle_fill'></Icon>
                        }
                        </span>
                        </ListItem>
                        )
                    }
                    </List>

            </Page>
        </Popup>
        )

}
