import React, {useCallback, useState} from "react";
import {Link, Navbar, NavRight, Page, Popup,Button,f7} from "framework7-react";
import Cropper from 'react-easy-crop'
import fa from "../lang/fa";
import {getCroppedImg} from './Canvas'
import {Dom7 as $$} from 'framework7'
import {postData} from "../Helper";


export default (props) => {

        const [image, setImage] = useState();
        const [crop, setCrop] = useState({x: 0, y: 0});
        const [zoom, setZoom] = useState(1);


  const  onCropComplete = async( croppedArea, croppedAreaPixels) => {

      try {
          await getCroppedImg(
              props.image,
              croppedAreaPixels
          ).then(function (result) {
              setImage(result);
          })
      } catch (e) {

      }

    }



    const saveImage = () => {

        postData(f7.params.home+'user-change-profile-picture', {'binary-image': image})
            .then(function (result){
            if(result.ok){
                f7.popup.close('.image-crop')
                $$('body').find('#img-profile').attr('src',image)
            }
        });
    }




        return (
            <Popup className="image-crop">
                <Page>
                    <Navbar title={fa.cards}>
                        <NavRight>
                            <Link popupClose iconF7='multiply_circle_fill'></Link>
                        </NavRight>
                    </Navbar>
            <Cropper
                image={props.image}
                crop={crop}
                zoom={zoom}
                aspect={3 / 3}
                cropShape={'round'}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
            />
            <Button fill color="green"  onClick={saveImage} style={{marginTop:'10px',borderRadius:'0 !important'}}>ذخیره</Button>

                </Page>
            </Popup>
        )

}
