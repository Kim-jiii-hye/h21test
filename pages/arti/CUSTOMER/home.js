import HeaderVer2 from "@/Components/HeaderVer2";
import Navigation_section from "@/Components/section/Navigation_section";
import MainSeo from "@/Components/seo/MainSeo";
import Link from "next/link";

export default function home() {
    return (
        <>
        <MainSeo />
        <div id="viewMain">
            <div className="main0">
                <div className="main1">
                    <HeaderVer2 />
                    <Navigation_section 
                        data0={"고객센터"} 
                        data1={''}
                    />
                    <div id="customer_contents" className="etc_contents">
                        <div className="contents0">
                            <div className="contents1">
                                <div className="item item_0">
                                    <div className="item0">
                                        <div className="title">
                                            <Link href="/arti/CUSTOMER/sub">
                                                <a><strong>자주하는</strong> 질문<span className="small">(FAQ)</span></a>
                                            </Link>
                                        </div>
                                        <div className="desc">
                                            자주 문의되는 질문에 대한 답변을 모았습니다.<br />
                                            독자문의 이전에 먼저 확인해주세요.<br />
                                            좀더 빠른 확인이 가능합니다.<br />
                                            FAQ에서 찾을 수 없는 내용은 독자문의를 통해 1:1로 답변 받으실 수 있습니다.
                                        </div>
                                    </div>
                                </div><div className="item item_1">
                                    <div className="item0">
                                        <div className="title">
                                            <a href="http://contribute.hani.co.kr/input/h21_opinion_2015.hani" target="popwin_share" rel="noopener noreferrer"><strong>독자</strong>문의</a>
                                        </div>
                                        <div className="desc">
                                            한겨레21 구독, 온라인 회원, 기사내용과 관련한 모든 문의에 대해 1:1로 답변해드립니다.<br />
                                            담당자 확인을 통한 답변이므로<br />
                                            약간의 시간이 소요될 수 있습니다.
                                        </div>
                                    </div>
                                </div><div className="item item_2">
                                    <div className="item0">
                                        <div className="title">
                                            <a href="//notice.hani.co.kr" target="_blank" rel="noopener noreferrer"><strong>한겨레</strong>고객센터</a>
                                        </div>
                                        <div className="desc">
                                            한겨레21 외의 문의내용에 대해서는<br />
                                            한겨레 고객센터 이용을 부탁드리겠습니다.
                                        </div>
                                    </div>
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