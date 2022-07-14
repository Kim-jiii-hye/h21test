import HeaderVer2 from "@/Components/HeaderVer2";
import MainSeo from "@/Components/seo/MainSeo";

export default function index() {
    return (
        <>
            <MainSeo />
            <div id="viewMain">
                <div className="main0">
                    <div className="main1">
                        <HeaderVer2 />
                        <div id="article_contents" className="article2c_contents">
                            <div className="column_tb">
                                <div className="column_tr">
                                    <div className="column_tc column0">
                                        <section id="section_list_article" className="list_article">
                                            <h4 className="hidden">기사일람</h4>
                                        </section>
                                    </div>
                                    <div className="column_tc column1">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
