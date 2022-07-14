import HeaderVer2 from "@/Components/HeaderVer2";
import Navigation_section1 from "@/Components/section/Navigation_section1";
import MainSeo from "@/Components/seo/MainSeo";

export default function HO() {
    return (
        <>
            <MainSeo />
            <div id="viewMain">
                <div className="main0">
                    <div className="main1">
                        <HeaderVer2 />
                        <nav id="navigation_section">
                            <div className="navigation0">
                                <div className="navigation1">
                                    <span className="path_not_last"><a href="/">HOME</a></span> &gt;
                                    <span className="path_last">차례보기</span>
                                </div>
                            </div>
                        </nav>
                        <div id="magazineSlide">
                            <div className="left" style={{ top: 220, left: 30, width: 40 }}>
                                {/* <img src={//img.hani.co.kr/section-image/15/h21/image/arrow_left.png"}	alt="이전호보기"/> */}
                            </div>
                            <div className="center" style={{ paddingLeft: 150, paddingRight: 150 }}>
                                <ul style={{ height: 500 }}>
                                    <li className="slidem2"	>

                                    </li>
                                    <li className="slidem1">

                                    </li>
                                    <li className="slide00">

                                    </li>
                                    <li className="slidep1">

                                    </li>
                                    <li className="slidep2">

                                    </li>
                                </ul>
                            </div>
                            <div className="right" style={{ top: 220, right: 30, width: 40 }}>
                                <img src={"//img.hani.co.kr/section-image/15/h21/image/arrow_right.png"} alt="다음호보기" />
                            </div>
                        </div>

                        <div id="magazine_scroll">
                            <div className="scroll_box">
                                <div className="box0">
                                    <div className="box1">
                                        <div className="box2">
                                            <div className="box3">
                                                <div className="line	line0"></div>
                                                <div className="line	line1"></div>
                                                <div className="line	line2"></div>
                                                <div className="line	line3"></div>
                                                <div className="line	line4"></div>
                                                <div className="line	line5"></div>
                                                <div className="line	line6"></div>
                                                <div className="line	line7"></div>
                                                <div className="line	line8"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button0">
                                        <div className="button1"></div>
                                        <div className="button_comment">
                                            <div className="text">
                                                <div className="magazine_no">제호</div>
                                                <div className="magazine_date"></div>
                                            </div>
                                            <div className="arrow">
                                                <img src={"//img.hani.co.kr/section-image/15/h21/image/arrow_down_box_bottom.png"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="guide">
                                <div className="info	info0">
                                    <div className="text">
                                        <div className="magazine_no">제호</div>
                                        <div className="magazine_date"></div>
                                    </div>
                                </div>
                                <div className="info	info1">
                                    <div className="text">
                                        <div className="magazine_no">호</div>
                                        <div className="magazine_date"></div>
                                    </div>
                                </div>
                                <div className="info	info2">
                                    <div className="text">
                                        <div className="magazine_no">호</div>
                                        <div className="magazine_date"></div>
                                    </div>
                                </div>
                                <div className="info	info3">
                                    <div className="text">
                                        <div className="magazine_no"></div>
                                        <div className="magazine_date"></div>
                                    </div>
                                </div>
                                <div className="info	info4">
                                    <div className="text">
                                        <div className="magazine_no">호</div>
                                        <div className="magazine_date"></div>
                                    </div>
                                </div>
                                <div className="info	info5">
                                    <div className="text">
                                        <div className="magazine_no">호</div>
                                        <div className="magazine_date"></div>
                                    </div>
                                </div>
                                <div className="info	info6">
                                    <div className="text">
                                        <div className="magazine_no">호</div>
                                        <div className="magazine_date"></div>
                                    </div>
                                </div>
                                <div className="info	info7">
                                    <div className="text">
                                        <div className="magazine_no">호</div>
                                        <div className="magazine_date"></div>
                                    </div>
                                </div>
                                <div className="info	info8">
                                    <div className="text">
                                        <div className="magazine_no">호</div>
                                        <div className="magazine_date"></div>
                                    </div>
                                </div>
                                <div classNameName="clear"></div>
                            </div>
                            <div className="past">
                                <a href="http://legacy.h21.hani.co.kr/h21/past.html">2008년 이전보기</a>
                            </div>
                        </div>
                        <div id="magazine_index">
                            <ul className="index">

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}