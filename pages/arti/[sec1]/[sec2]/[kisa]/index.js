import HeaderVer2 from "@/Components/HeaderVer2";
import Box_list_popular1 from "@/Components/section/Box_list_popular1";
import Box_list_popular2 from "@/Components/section/Box_list_popular2";
import View_subscription from "@/Components/section/View_subscription";
import MainSeo from "@/Components/seo/MainSeo";
import { BOOKDATA, FAMOUSDATA } from "@/lib/constants";
import { SWRConfig } from 'swr'
import View_article from "@/Components/section/View_article";
import View_article_ad1 from "@/Components/section/View_article_ad1";
import View_article_ad2 from "@/Components/section/View_article_ad2";
import View_article_ad3 from "@/Components/section/View_article_ad3";
import Box_list_series from "@/Components/section/Box_list_series";
import Box_list_column from "@/Components/section/Box_list_column";
import View_article_head from "@/Components/section/View_article_head";
import Navigation_section from "@/Components/section/Navigation_section";

export default function index({ fallback, kisa_data }){
    let series_info_num;
    let column_info_num;
    const series_info = kisa_data.series_info;
    const column_info = kisa_data.column_info;
    const navi_section_num = kisa_data.sec;

    {
        (series_info) 
        ? series_info_num = series_info.data.length 
        : (column_info)
            ? column_info_num = column_info.data.length
            : <></>
    }

    return (
        <>
        <MainSeo />
        <div id="viewMain">
                <div className="main0">
                    <div className="main1">
                        <HeaderVer2 />
                        <Navigation_section 
                            data0 = {''}
                            data1 = {navi_section_num}
                            type = {''}
                        />
                        <SWRConfig value = {{ fallback }}>
                            <div id="article_contents" className="article2c_contents">
                                <View_article_head />
                                <div className="column_tb">
                                    <div className="column_tr">
                                        <div className="column_tc column0">
                                            <View_article />
                                            <View_article_ad1 />
                                        </div>
                                        <div className="column_tc column1">
                                            { (series_info_num > 0) && <Box_list_series />}
                                            { (column_info_num > 0) && <Box_list_column />}
                                            <View_article_ad2 />
                                            <View_subscription />
                                            <Box_list_popular1 />
                                            <View_article_ad3 />
                                            <Box_list_popular2 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SWRConfig>
                    </div>
                </div>
            </div>
        </>
    )
}
export const getServerSideProps = async ( context ) => {
    
    const famous_res = await fetch(`${FAMOUSDATA}`)
    const famous_data = await famous_res.json();
    const book_res = await fetch(`${BOOKDATA}`);
    const book_data = await book_res.json();
    const book = book_data.data;

    const kisanum = context.query['kisa'];
    const kisa_res = await fetch(`http://mapi_h21-master.hani.co.kr/on/view/${kisanum}`)
    const kisa_data = await kisa_res.json();

    return {
        props: {
            fallback: {
                '/api/famousdata': famous_data,
                '/api/book': book,
                '/api/kisa': kisa_data
            },
            kisa_data
        },
    }
}