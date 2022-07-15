import { SVC_PATH } from "@/lib/constants";
import $ from 'jQuery';
import Link from "next/link";
import { useEffect } from "react";

export default function Sitemap() {
    useEffect(() => {
        $("#sitemap	.title").click
            (
                function () {
                    var obj = jQuery("#sitemap");
                    if (obj.hasClass("closed")) {
                        obj.removeClass("closed").addClass("opened");
                        jQuery(document).scrollTop(jQuery(document).scrollTop() + jQuery("#sitemap	div.page").height());
                    } else {
                        obj.removeClass("opened").addClass("closed");
                    }
                }
            );
    }, [])

    return (
        <nav id="sitemap" className="closed">
		<div className="map0">
			<div className="map1">
				<div className="title">
					서비스 전체보기
					<span className="open"><img src={`${SVC_PATH}/image/arrow_down_box.png`} alt="닫기"	title="닫기" /></span>
					<span className="close"><img src={`${SVC_PATH}/image/arrow_up_box.png`}	alt="열기" title="열기" /></span>
				</div>
				<div className="page">
					<ul	className="page">
						<li	className="column">
							<ul	className="column">
								<li><strong><Link href="/arti/NEWS/"><a>뉴스</a></Link></strong></li>
								<li><span><Link href="/arti/SERIES/2337/"><a>표지이야기</a></Link></span></li>
								<li><span><Link href="/arti/SERIES/2338/"><a>특집</a></Link></span></li>
								<li><span><Link href="/arti/politics/"><a>정치</a></Link></span></li>
								<li><span><Link href="/arti/economy/"><a>경제</a></Link></span></li>
								<li><span><Link href="/arti/society/"><a>사회</a></Link></span></li>
								<li><span><Link href="/arti/world/"><a>세계</a></Link></span></li>
								<li><span><Link href="/arti/culture/"><a>문화</a></Link></span></li>
								<li><span><Link href="/arti/photo/"><a>멀티미디어</a></Link></span></li>
								<li><span><Link href="/arti/reader/"><a>커뮤니티</a></Link></span></li>
								<li><span><Link href="/arti/SERIES/"><a>기획연재</a></Link></span></li>
								<li><span><Link href="/arti/COLUMN/"><a>칼럼</a></Link></span></li>
							</ul>
						</li>
                        <li	className="column">
							<ul	className="column">
								<li><strong>그외</strong></li>
								<li><span><Link href="/arti/HO/"><a>지난호보기</a></Link></span></li>
								<li><span><a href="https://smartstore.naver.com/hankyoreh21" target="_blank">낱권구입</a></span></li>
								<li><span><a href="http://h21pdf.hani.co.kr/PaperList.aspx"	target="_blank">PDF</a></span></li>
								<li><span><Link href="/arti/RSS"><a>RSS</a></Link></span></li>
							</ul>
						</li>
                        <li	className="column">
							<ul	className="column">
								<li><strong>한겨레21</strong></li>
								<li><span><Link href="/arti/INTRODUCTION/1.html"><a>소개</a></Link></span></li>
								<li><span><Link href="/arti/INTRODUCTION/2.html"><a>제작과정</a></Link></span></li>
								<li><span><Link href="/arti/SUBSCRIPTION/1.html"><a>구독신청</a></Link></span></li>
								<li><span><Link href="/arti/INTRODUCTION/3.html"><a>광고안내</a></Link></span></li>
							</ul>
						</li>
                        <li	className="column">
							<ul	className="column">
								<li><strong><Link href="/arti/CUSTOMER/home"><a>고객센터</a></Link></strong></li>
								<li><span><Link href="/arti/CUSTOMER/sub"><a>자주하는 질문(FAQ)</a></Link></span></li>
								<li><span><a href="//notice.hani.co.kr/h21/opinion" target="popwin_share">독자문의</a></span></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
    )
}