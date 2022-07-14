import HeaderVer2 from "@/Components/HeaderVer2";
import Navigation_section from "@/Components/section/Navigation_section";
import MainSeo from "@/Components/seo/MainSeo";
import { SVC_PATH } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function sub() {

    const bandiImg = SVC_PATH + '/image/customer/logo_bandi.png';
    const splitImg = SVC_PATH + '/image/customer/split.png';
    const aladinImg = SVC_PATH + '/image/customer/logo_aladin.png';
    const interparkImg = SVC_PATH + '/image/customer/logo_interpark.png';
    const deliveryImg = SVC_PATH + '/image/customer/delivery.png';

    const linkwidth = 144;
    const linkheight = 40

    return (
        <>
            <MainSeo />
            <div id="viewMain">
                <div className="main0">
                    <div className="main1">
                        <HeaderVer2 />
                        <Navigation_section
                            data0 = {"고객센터"} 
                            data1 = {'FAQ'}
                        />
                        <div id="customer_contents" className="etc_contents_menu">
                            <div className="contents0">
                                <div className="menu">
                                    <ul className="menu1">
                                        <li><strong>FAQ</strong><span className="split">|</span></li>
                                        <li><a href="//notice.hani.co.kr/h21/opinion" target="popwin_share" rel="noopener noreferrer">독자문의</a><span className="split">|</span></li>
                                        <li><a href="//notice.hani.co.kr/" target="_blank" rel="noopener noreferrer">한겨레 고객센터</a></li>
                                    </ul>
                                </div>
                                <div className="contents1">
                                    <div className="customer_1">
                                        <div className="question">
                                            한겨레21은 1년 동안 총 몇호 발행하나요?
                                        </div>
                                        <div className="answer">
                                            한겨레21은 매주 월요일 발행되며 1년 총 50호가 발행됩니다.<br />
                                            (1년은 총 52주입니다. 하지만 설과 추석에는 합본호를 발행해 한겨레21은 연간 총 50호를 발행합니다.)
                                        </div>
                                        <div className="question">
                                            낱권 가격과 정기구독료는 얼마인가요?
                                        </div>
                                        <div className="answer">
                                            한겨레21 낱권은 4,000원 입니다. 정기구독료는 아래와 같습니다. 단 해외정기구독은 나라별로 별도의 우편요금이 추가됩니다.<br />
                                            <br />
                                            <div className="subtitle">
                                                국내 정기구독료
                                            </div>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>1년</th>
                                                        <th>2년</th>
                                                        <th>3년</th>
                                                        <th>4년</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>180,000원<br />(10%할인)</td>
                                                        <td>340,000원<br />(15%할인)</td>
                                                        <td>420,000원<br />(30%할인)</td>
                                                        <td>별도문의<br />(02-710-0544)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <br />
                                            <br />
                                            <div className="subtitle">
                                                해외 정기구독료 (1년 기준)
                                            </div>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="col0">해당국가</th>
                                                        <th className="col1">구독료</th>
                                                        <th className="col2">배송비</th>
                                                        <th className="col3">합계(구독료+배송비)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="col0">일본,대만,홍콩,마카오,중국</td>
                                                        <td className="col1">130,000원</td>
                                                        <td className="col2">112,500원</td>
                                                        <td className="col3">242,500원</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col0">동남아시아</td>
                                                        <td className="col1">130,000원</td>
                                                        <td className="col2">127,500원</td>
                                                        <td className="col3">257,500원</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col0">북미(캐나다),유럽,중동 및 아시아 일부(아프카니스탄,인도,파키스탄,스리랑카,네팔 등)</td>
                                                        <td className="col1">130,000원</td>
                                                        <td className="col2">150,000원</td>
                                                        <td className="col3">280,000원</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col0">대양주(오스트레일리아(호주),뉴질랜드,파파뉴기니,괌,사이판 등),아프리카,중남미,서인도제도,남태평양제도</td>
                                                        <td className="col1">130,000원</td>
                                                        <td className="col2">225,000원</td>
                                                        <td className="col3">355,000원</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="question">
                                            정기구독 신청은 어떻게 하나요?
                                        </div>
                                        <div className="answer">
                                            전화 <a href="tel:1566-9595"><span className="link2">1566-9595</span></a>
                                            또는 이메일 <a href="mailto:p-dokja@hani.co.kr"><span className="link2">P-DOKJA@HANI.CO.KR</span></a>,
                                            <a href="//magazine21.hani.co.kr/requestorg/gudok_request.jsp" target="_blank"><span className="link2">온라인사이트</span></a>에서 신청 가능합니다.
                                        </div>
                                        <div className="question">
                                            낱권은 어디서 구매할 수 있나요?
                                        </div>
                                        <div className="answer">
                                            대형서점과 편의점, 가판, 온라인 서점등에서 구매할 수 있습니다.
                                            <br />
                                            <br />
                                            <div className="link1">
                                                <a href="http://www.bandinlunis.com/search/search.do?q=%C7%D1%B0%DC%B7%B921" target="_blank" rel="noopener noreferrer">
                                                    <Image src={bandiImg} alt={"반디앤루니스"} title={"반디앤루니스"} width={linkwidth} height={linkheight} />
                                                </a>
                                                <span className="split">
                                                    <Image src={splitImg} alt={"}"} title={"}"} width={1} height={linkheight} />
                                                </span>
                                                <a href="http://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord=%C7%D1%B0%DC%B7%B921&SortOrder=5" target="_blank" rel="noopener noreferrer">
                                                    <Image src={aladinImg} alt={"알라딘"} title={"알라딘"} width={linkwidth} height={linkheight} />
                                                </a>
                                                <span className="split">
                                                    <Image src={splitImg} alt={"}"} title={"}"} width={1} height={linkheight} />
                                                </span>
                                                <a href="http://bsearch.interpark.com/dsearch/book.jsp?query=%C7%D1%B0%DC%B7%B921" target="_blank" rel="noopener noreferrer">
                                                    <Image src={interparkImg} alt={"인터파크"} title={"인터파크"} width={linkwidth} height={linkheight} />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="question">
                                            지난호는 어디서 구매할 수 있나요?
                                        </div>
                                        <div className="answer">
                                            02-710-0544로 연락해 발행호수와 필요한 부수 재고를 먼저 확인 후 구매하실 수 있습니다. 본사로 직접 방문해 구매하시거나 온라인으로 입금해 우편으로 받아 보실 수 있습니다.
                                        </div>
                                        <div className="question">
                                            구독 중인 주소지를 변경하고 싶습니다.
                                        </div>
                                        <div className="answer">
                                            고색센터 1566-9595로 연락해 구독자 성함과 연락처, 주소 등을 확인 후 변경하실 수 있습니다.
                                        </div>
                                        <div className="question">
                                            잡지는 어떻게 배송되나요?
                                        </div>
                                        <div className="answer">
                                            한겨레21은 직접 배송과 우체국 배송으로 나눠 독자님께 집지를 보내드리고 있습니다.
                                            직접 배송은 우체국 보다 빠르지만 대행 업체 사정으로 일부 지역만 해당되며 많은 독자님께 혜택을 드리지 못하고 있습니다.
                                            우체국 배송은 2014년 9월부터 전국 우체국의 토요휴무제 전면 시행으로 토요일에서 부득이하게 월요일 새벽에 접수하는 것으로 변경되었습니다.
                                            이에 우편집중국간 이동을 줄이고자 일부 지역은 해당 지역 우편집중국에 직접 접수하고 있습니다.
                                            독자님게 불편을 드려 진심으로 죄송합니다. 빠른 시일 내에 보다 빠르게 받아보실 수 있도록 더 나은 방법을 마련하겠습니다.
                                            문의 1566-9595
                                            <div className="subtitle">
                                                우체국 배송 흐름
                                            </div>
                                            <div className="delivery">
                                                <Image src={deliveryImg} alt={"우체국배송흐름"} title={"우체국배송흐름"} width={770} height={110} />
                                            </div>
                                        </div>
                                        <div className="question">
                                            정기구독료를 카드로 결제했는데 미납되었다고 합니다.
                                        </div>
                                        <div className="answer">
                                            카드 결제는 카드사의 프로그램으로 연결되어 승인됩니다.
                                            카드사와 정산 프로그램 상의 미납이며 실제로는 결제가 완료된 것입니다.
                                            일정기간(약 한달)이 지나면 전산에서도 결제가 승인된 것으로 처리 됩니다.
                                            구독 신청 시 확인 이메일을 보내드리니 문의사항은 고객센터 1566-9595로 연락 부탁드립니다.
                                        </div>
                                        <div className="question">
                                            잡지를 신청했는데 책이 오지 않아요. 어떻게 해야 하나요?
                                        </div>
                                        <div className="answer">
                                            정상적인 결제가 이뤄졌으나 잡지가 오지 않는 경우 배달과정 중 발생하는 오류일 경우가 있습니다.
                                            저희 고객센터 1566-9595로 연락 주시면 빠른 시간내에 조치를 취하겠습니다.
                                        </div>
                                        <div className="question">
                                            지로용지를 분실하였습니다. 다시 받을 수는 없나요?
                                        </div>
                                        <div className="answer">
                                            고객센터 1566-9595로 연락 주시면 독자 확인 후 처리해드리겠습니다.
                                        </div>
                                        <div className="question">
                                            구독신청을 지로로 결제해왔는데 계좌이체나 카드 결제로 안될까요?
                                        </div>
                                        <div className="answer">
                                            고객센터 1566-9595로 연락 주시면 독자 확인 후 처리해드리겠습니다.
                                        </div>
                                        <div className="question">
                                            기사를 제보하고 싶습니다. 어디서 제보할 수 있나요?
                                        </div>
                                        <div className="answer">
                                            <a href="http://contribute.hani.co.kr/input/h21_opinion_2015.hani" target="popwin_share" onclick="javascript:return popup_share(this,'500px','500px');"><span className="link2">홈페이지</span></a> 또는
                                            해당 <Link href="/arti/INTRODUCTION/1.html"><a><span className="link2">기자의 전자우편</span></a></Link>으로 제보하실 수 있습니다.<br />
                                        </div>
                                        <div className="question">
                                            지면 PDF를 보고 싶습니다. 어디서 확인할 수 있을까요?
                                        </div>
                                        <div className="answer">
                                            <a href="http://h21pdf.hani.co.kr/PaperList.aspx" target="_blank" rel="noopener noreferrer"><span className="link2">PDF 보기</span></a>에서 확인할 수 있습니다.
                                            PDF 보기는 유료서비스이지만 정기구독자는 인증 확인 후 무료로 열람하실 수 있습니다.
                                        </div>
                                        <div className="question">
                                            정기구독자 인증은 어떻게 하나요?
                                        </div>
                                        <div className="answer">
                                            <Link href="/arti/SUBSCRIPTION/1.html"><a><span className="link2">홈페이지</span></a></Link>에서 구독자 성함과 지역으로 검색해서 인증할 수 있습니다.
                                            또한 정기구독자 인증을 위해선 인터넷한겨레 온라인 회원으로 먼저 가입이 되어있어야 합니다.<br /><br />
                                            ※ 홈페이지에서 정기구독자 성함과 지역으로 검색해 일치하는 독자를 선택하고 전화승인을 요청하시면 고객센터에 입력된 전화번호와 일치하면 자동승인 처리됩니다.
                                            단 전화번호가 일치하지 않는 경우는 고객센터 1566-9595로 문의 부탁드립니다.
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