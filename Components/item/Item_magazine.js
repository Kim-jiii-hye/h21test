import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from '@mui/material'
import Home from '@mui/icons-material/Home';
import useSWR from "swr"

export default function Item_magazine() {

    const { data } = useSWR('/api/holistall');
    const imagesData = data.data;

  
    return (
        <Carousel>
            {
                imagesData.map((item, i) =>
                    (i <=10) &&
                    <Paper>
                        <h5>{item.ho}</h5>
                        <img src={item.coverimg} />
                    </Paper>
                )
            }
        </Carousel>

        // <div className="item_magazine">
        //     <div className="top">
        //         <div className="no">title</div>
        //         <div className="date">startdt</div>
        //     </div>
        //     <div className="middle">
        //         <div className="image">
        //             <div className="image0" style={{ backgroundImage: `url(http://img.hani.co.kr/imgdb/original/2022/0715/6716578195570562.jpg)` }}>
        //                 <div className="image_ratio"></div>
        //             </div>
        //         </div >
        //         <div className="bottom">
        //             <div className="shadow"></div>
        //         </div>
        //     </div>
        // </div>
    )
}
