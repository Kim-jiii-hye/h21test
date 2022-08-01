import MainSeo from "@/Seo/MainSeo";
// import Carousel from "react-material-ui-carousel";
import Carousel from "react-simply-carousel";
import { useState } from "react";

export default function hotest({ holist }) {
    const [activeSlideIndex, setActiveSlideIndex ] = useState(0);
    const [data, setData] = useState('');

    const clk = (newActiveSlideIndex) => {
        setActiveSlideIndex(newActiveSlideIndex);
    }

    const click_data = async (hodata) => {
        const res = await fetch(`/ho/view/${hodata}`);
        const data = await res.json();
        const data_idx = data.data.index;
        setData(data_idx);
    }

    return (
        <>
            <MainSeo />
            <Carousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={clk}
                itemsToShow={4}
                itemsToScroll={4}
                forwardBtnProps={{
                    children: ">",
                    style: {
                      width: 60,
                      height: 60,
                      minWidth: 60,
                      alignSelf: "center"
                    }
                  }}
                backwardBtnProps={{
                    children: "<",
                    style: {
                      width: 60,
                      height: 60,
                      minWidth: 60,
                      alignSelf: "center"
                    }
                }}
            >
                {
                    holist.data.map((i, index) => (
                        <div>
                            <div className="top">
                                <div className="no">제 {i.ho}호</div>
                                <div className="date">{i.startdt}</div>
                            </div>
                            <div className="middle">
                                <div className="image" onClick={() => click_data(`${i.ho}`)}>
                                    <div className="image0" style={{ width:'300px', height:'300px', backgroundImage: `url(${i.coverimg})`}}>
                                        <div className="image_ratio"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
            <div id="magazine_index"> 
            {
            data &&
            data.map((i, index) => (
                <li className="group" key={index}>
                    <h4>{i.title}</h4>
                    <ul className="group">
                        {
                            i.data.map(j => (
                                <h6><a>{j.title}</a></h6>
                            ))
                        }
                        
                    </ul>
                </li>
            ))
            }
            </div>
        </>
    )
}
export const getServerSideProps = async () => {
    const data = await fetch('http://mapi_h21-master.hani.co.kr/ho/listall');
    const holist = await data.json();
    return {
        props: {
            holist
        }
    }
}