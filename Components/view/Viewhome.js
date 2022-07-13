import { SVC_PATH } from "@/lib/constants";
import List_home_top from "@/section/list_home_top";
import useSWR from 'swr'
import List_home_main from "@/section/List_home_main";
import List_home_ad from "@/section/List_home_ad";
import List_home_sub from "@/section/List_home_sub";
import Image from "next/image";
import View_search_form from "../section/View_search_form";
const ViewHome = () => {

    const { data } = useSWR('/api/main');
    const ho = data.data.top[0]['ho'];
    const wdate = data.wdate.slice(0,10).replaceAll('-','.');
    const mainImgLogo = SVC_PATH + '/image/logo_h21.png';

    return (
        <div id="viewMain">
            <div className="main0">
                <div className="main1">
                    <div id="title_bar">
                        <div className="title0">
                            <div className="title1">
                                <div className="logo_main">
                                    <Image src={mainImgLogo} alt="한겨레21" title="한겨레21" width={150} height={43}/>
                                </div>
                                <div className="date">
                                    <strong>제 { ho }호</strong>
                                    { wdate }
                                </div>
                                <div className="btn_support1">
                                    <a href="https://support.hani.co.kr/hani/support.hani" target="_blank" rel="noopener noreferal">
                                        <span>후원하기</span>
                                    </a>
                                </div>
                                <View_search_form />
                            </div>
                        </div>
                    </div>
                    <div id="main_contents">
                        <List_home_top />
                        <List_home_main />
                        <List_home_ad />
                        <List_home_sub />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewHome;