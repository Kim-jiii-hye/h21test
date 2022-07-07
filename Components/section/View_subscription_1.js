import { SVC_PATH } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import $ from 'jQuery';

export default function View_subscription_1() {

    const arrowdownboximg = SVC_PATH + '/image/arrow_down_box.png';
    const arrowupboximg = SVC_PATH + '/image/arrow_up_box.png'

    const arrowwidth = 28;
    const arrowheight = 26;

    useEffect(() => {
        $("#other-team	.title").click(
            function() {
                var obj = jQuery("#other-team");
                if (obj.hasClass("closed")) {
                    obj.removeClass("closed").addClass("opened");
                    jQuery(document).scrollTop(jQuery(document).scrollTop() + jQuery("#other-team div.page").height());
                } else {
                    obj.removeClass("opened").addClass("closed");
                }
            }
        );
    })

    return (
        <div className="subscription_2">
            <h5>정기구독을 하면 이런 점이 좋아요</h5>
            <ul className="advantage">
                <li>1. 배송료 부담없이 원하는 장소에서 편하게 받아보실 수 있습니다.</li>
                <li>2. 구독 중 잡지가격 및 우편요금이 인상되어도 추가 부담이 없습니다.</li>
                <li>3. 매주 월요일 오전 한겨레 21 해당 호수를 PDF로 받아보실 수 있습니다. (상담 후 신청)</li>
            </ul>
            <br />
            <h5>구독료 안내</h5>
            <table>
                <thead>
                    <tr>
                        <th>구독기간</th>
                        <th>1년</th>
                        <th>2년</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>금액</td>
                        <td>180,<span></span>000원<br />(10%할인)</td>
                        <td>340,000원<br />(15%할인)</td>
                    </tr>
                </tbody>
            </table>
            <div className="advantage_comment">
                • 약정한 구독 기간에 구독을 중단하면 할인 혜택이 없어지며 구독한 부수는 정가(4,000원) 기준으로 적용됩니다.
            </div>
            <br />
            <h5>구독신청하기</h5>
            <div className="block block_0">
                <div className="block0">
                    <div className="title">
                        <Link href="/arti/SUBSCRIPTION/3.html">
                            <a>회원 구독</a>
                        </Link>
                    </div>
                    <div className="desc">
                        <Link href="/arti/SUBSCRIPTION/3.html">
                            <a>회원이 되면 PDF열람 서비스와 스마트폰/패드로도 &lt;한겨레21&gt;을 볼 수 있습니다.</a>
                        </Link>
                    </div>
                </div>
            </div><div className="block	block_1">
                <div className="block0">
                    <div className="title">
                    <Link href="/arti/SUBSCRIPTION/4.html">
                            <a>비회원 구독</a>
                        </Link>
                    </div>
                    <div className="desc">
                        <Link href="/arti/SUBSCRIPTION/3.html">
                            <a>비회원 독자도 인터넷&lt;한겨레21&gt;기사를 볼 수 있습니다.</a>
                        </Link>
                    </div>
                </div>
            </div><div className="block	block_2">
                <div className="block0">
                    <div className="title">
                        <Link href="/arti/SUBSCRIPTION/7.html">
                            <a>간편 구독</a>
                        </Link>
                    </div>
                    <div className="desc">
                        <Link href="/arti/SUBSCRIPTION/7.html">
                            <a>이름, 전화번호, 이메일만 알려주시면 간편하게 구독신청을 하실수 있습니다.</a>
                        </Link>
                    </div>
                </div>
            </div><div className="block	block_3">
                <div className="block0">
                    <div className="title">
                        <Link href="/arti/SUBSCRIPTION/6.html">
                            <a>연장 구독</a>
                        </Link>
                    </div>
                    <div className="desc">
                        <Link href="/arti/SUBSCRIPTION/6.html">
                            <a>정기구독 만료 전에 손쉽게 구독 연장을 하실 수 있습니다.</a>
                        </Link>
                    </div>
                </div>
            </div><div className="block	block_4">
                <div className="block0">
                    <div className="title">
                        전화/이메일 구독
                    </div>
                    <div className="desc">
                        독자센터: <a href="tel:1566-9595">1566-9595</a><br />
                        이메일: <a href="mailto:p-dokja@hani.co.kr?Subject=한겨레21 정기구독 신청합니다.">p-dokja@hani.co.kr</a><br />
                    </div>
                </div>
            </div><div className="block	block_5">
                <div className="block0">
                    <div className="title">
                        <Link href="/arti/SUBSCRIPTION/5.html">
                            <a>해외 구독</a>
                        </Link>
                    </div>
                    <div className="desc">
                        <Link href="/arti/SUBSCRIPTION/5.html">
                            <a>해외에서도 인터넷&lt;한겨레21&gt;기사를 만나 보실 수 있습니다.</a>
                        </Link>
                    </div>
                </div>
            </div>
            <br /><br />
            <div id="other-team" className="closed">
                <h5 className="title">해외 정기구독 안내
                    <span className="open">
                        <Image src={arrowdownboximg} alt={'닫기'} title={'닫기'} width={arrowwidth} height={arrowheight} />                       
                    </span>
                    <span className="close">
                        <Image src={arrowupboximg} alt={'열기'} title={'열기'} width={arrowwidth} height={arrowheight} />
                    </span>
                </h5>
                <div className="page">
                    <table className="">
                        <thead>
                            <tr>
                                <th className="col0">지열별</th>
                                <th className="col1">해당국가</th>
                                <th className="col2">1년 구독료</th>
                                <th className="col3">1년 배송비</th>
                                <th className="col4">합계</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col0">1지역</td>
                                <td className="col1">일본,대만,홍콩,마카오,중국</td>
                                <td className="col2">130,000원</td>
                                <td className="col3">112,500원</td>
                                <td className="col4">242,500원</td>
                            </tr>
                            <tr>
                                <td className="col0">2지역</td>
                                <td className="col1">동남아시아</td>
                                <td className="col2">130,000원</td>
                                <td className="col3">127,500원</td>
                                <td className="col4">257,500원</td>
                            </tr>
                            <tr>
                                <td className="col0">3지역</td>
                                <td className="col1">북미(캐나다)</td>
                                <td className="col2">130,000원</td>
                                <td className="col3">150,000원</td>
                                <td className="col4">280,000원</td>
                            </tr>
                            <tr>
                                <td className="col0">3지역</td>
                                <td className="col1">유럽</td>
                                <td className="col2">130,000원</td>
                                <td className="col3">150,000원</td>
                                <td className="col4">280,000원</td>
                            </tr>
                            <tr>
                                <td className="col0">3지역</td>
                                <td className="col1">중동/아시아<br />(아프가니스탄,인도,파키스타,스리랑카,네팔 등)</td>
                                <td className="col2">130,000원</td>
                                <td className="col3">150,000원</td>
                                <td className="col4">280,000원</td>
                            </tr>
                            <tr>
                                <td className="col0">4지역</td>
                                <td className="col1">대양주<br />(오스트레일리아(호주),뉴질랜드,파파뉴기니,괌,사이판 등)</td>
                                <td className="col2">130,000원</td>
                                <td className="col3">225,000원</td>
                                <td className="col4">355,000원</td>
                            </tr>
                            <tr>
                                <td className="col0">4지역</td>
                                <td className="col1">아프리카</td>
                                <td className="col2">130,000원</td>
                                <td className="col3">225,000원</td>
                                <td className="col4">355,000원</td>
                            </tr>
                            <tr>
                                <td className="col0">4지역</td>
                                <td className="col1">중남미</td>
                                <td className="col2">130,000원</td>
                                <td className="col3">225,000원</td>
                                <td className="col4">355,000원</td>
                            </tr>
                            <tr>
                                <td className="col0">4지역</td>
                                <td className="col1">서인도제도</td>
                                <td className="col2">130,000원</td>
                                <td className="col3">225,000원</td>
                                <td className="col4">355,000원</td>
                            </tr>
                            <tr>
                                <td className="col0">4지역</td>
                                <td className="col1">남태평양제도</td>
                                <td className="col2">130,000원</td>
                                <td className="col3">225,000원</td>
                                <td className="col4">355,000원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <br />
            <br />
        </div >

    )
}