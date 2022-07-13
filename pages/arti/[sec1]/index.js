import HeaderVer2 from "@/Components/HeaderVer2";
import Box_list_popular1 from "@/Components/section/Box_list_popular1";
import Box_list_popular2 from "@/Components/section/Box_list_popular2";
import List_article_ad1 from "@/Components/section/List_article_ad1";
import List_article_ad2 from "@/Components/section/List_article_ad2";
import List_article_ad3 from "@/Components/section/List_article_ad3";
import List_article_section from "@/Components/section/List_article_section";
import Navigation_page from "@/Components/section/Navigation_page";
import Navigation_section2 from "@/Components/section/Navigation_section2";
import View_subscription from "@/Components/section/View_subscription";
import MainSeo from "@/Components/seo/MainSeo";
import { BOOKDATA, FAMOUSDATA, LISTDATA } from "@/lib/constants";
import { SWRConfig } from 'swr'

export default function index({ fallback }) {

    return (
        <>
            <MainSeo />
            <div id="viewMain">
                <div className="main0">
                    <div className="main1">
                        <HeaderVer2 />
                        <Navigation_section2 />
                        <SWRConfig value = {{ fallback }}>
                            <div id="article_contents" className="article2c_contents">
                                <div className="column_tb">
                                    <div className="column_tr">
                                        <div className="column_tc column0">
                                            <section id="section_list_article" className="list_article">
                                                <h4 className="hidden">기사일람</h4>
                                                <List_article_section />
                                                {/* <Navigation_page totalpage={totalpage} page={page} /> */}
                                                <List_article_ad1 />
                                            </section>
                                        </div>
                                        <div className="column_tc column1">
                                            <List_article_ad2 />
                                            <View_subscription />
                                            <Box_list_popular1 />
                                            <List_article_ad3 />
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

    const contextRes = context.query['sec1'];
    const cline = context.query['cline'];
    console.log(cline);

    let list_res;
    {
        contextRes 
        ? list_res = await fetch(`${LISTDATA}/${contextRes}`)
        : list_res = await fetch(`${LISTDATA}/${contextRes}/${cline}`)
    }
    let list_data = await list_res.json();

    return {
        props: {
            fallback: {
                '/api/famousdata': famous_data,
                '/api/book': book,
                '/api/list': list_data
            },
            list_data
        },
    }
}