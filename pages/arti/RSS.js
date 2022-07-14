import { WEB_URL } from "@/lib/constants";
import HeaderVer2 from "@/Components/HeaderVer2";
import Link from "next/link";
import MainSeo from "@/Components/seo/MainSeo";
import Navigation_section from "@/Components/section/Navigation_section";

export default function RSS() {
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
                                    <span className="path_not_last"><Link href="/"><a>HOME</a></Link></span> &gt;
                                    <span className="path_last">RSS</span>
                                </div>
                            </div>
                        </nav>
                        <div id="introduction_contents" className="etc_contents_menu">
                            <div className="contents0">
                                <div className="menu">
                                    <ul className="menu1">
                                        <li>
                                            <strong>RSS</strong>
                                            <span className="split">|</span>
                                        </li>
                                    </ul>
                                </div><div className="contents1">
                                    <div className="introduction_1">
                                        <p>
                                            <span lang="EN-US">
                                                <strong>한겨레21 RSS 서비스</strong>
                                                <br />
                                                RSS (Really Simple Syndication 또는 Rich Site Summary)서비스는
                                                이메일과 유사한 RSS 리더의 설치를 통해 네티즌 여러분이 원하는 ‘한겨레21 뉴스를
                                                보다 빠르고, 보다 편리하게 받아볼 수 있는 서비스’ 입니다.
                                                <br />
                                                매주 새로운 한겨레21의 주요 기사를 RSS 서비스로 편리하게 받아보세요.
                                                한겨레21 RSS는 매주 금요일 업데이트 됩니다.
                                                <br /><br />
                                            </span>
                                        </p>
                                        <p>
                                            <span>
                                                <strong>한겨레21 RSS 서비스 주소</strong>
                                            </span>
                                        </p>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <th>&nbsp;</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>전체기사</th>
                                                    <td><a href={`${WEB_URL}/rss/`} target="_blank">http://h21.hani.co.kr/rss/</a></td>
                                                </tr>
                                                <tr>
                                                    <th>표지이야기</th>
                                                    <td><a href={`${WEB_URL}/rss/cover/`} target="_blank">http://h21.hani.co.kr/rss/cover/</a></td>
                                                </tr>
                                                <tr>
                                                    <th>특집</th>
                                                    <td> <a href={`${WEB_URL}/rss/special/`} target="_blank">http://h21.hani.co.kr/rss/special/</a></td>
                                                </tr>
                                                <tr>
                                                    <th>정치</th>
                                                    <td><a href={`${WEB_URL}/rss/politics/`} target="_blank">http://h21.hani.co.kr/rss/politics/</a></td>
                                                </tr>
                                                <tr>
                                                    <th>경제</th>
                                                    <td><a href={`${WEB_URL}/rss/economy/`} target="_blank">http://h21.hani.co.kr/rss/economy/</a></td>
                                                </tr>
                                                <tr>
                                                    <th>사회</th>
                                                    <td><a href={`${WEB_URL}/rss/society/`} target="_blank">http://h21.hani.co.kr/rss/society/</a></td>
                                                </tr>
                                                <tr>
                                                    <th>세계</th>
                                                    <td><a href={`${WEB_URL}/rss/world/`} target="_blank">http://h21.hani.co.kr/rss/world/</a></td>
                                                </tr>
                                                <tr>
                                                    <th>문화</th>
                                                    <td><a href={`${WEB_URL}/rss/culture/`} target="_blank">http://h21.hani.co.kr/rss/culture/</a></td>
                                                </tr>
                                                <tr>
                                                    <th>멀티미디어</th>
                                                    <td><a href={`${WEB_URL}/rss/photo/`} target="_blank">http://h21.hani.co.kr/rss/photo/</a></td>
                                                </tr>
                                                <tr>
                                                    <th>커뮤니티</th>
                                                    <td><a href={`${WEB_URL}/rss/reader/`} target="_blank">http://h21.hani.co.kr/rss/reader/</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p>
                                            <span><br /></span>
                                        </p>
                                        <p>
                                            <strong>RSS 서비스 알기</strong>
                                            <br />
                                            XML(버튼표기) 버튼이 있는 웹사이트는 RSS 서비스를 지원합니다.
                                            외에도 RSS, RSS RSS 2.0, RSS ENTRIES,
                                            (모두 버튼 표기)syndication this site 등으로 표시되어 있습니다.
                                            RSS 리더를 사용하면 자동으로 RSS 서비스를 찾아줍니다.
                                            <br />
                                            인터넷 한겨레에서는 네티즌이 가장 많이 사용하는 국내의 대표적인 RSS 서비스인 '연모' 프로그램을 서비스 합니다.
                                            <br /><br />
                                        </p>
                                        <p>
                                            <strong>연모 프로그램 다운로드</strong>
                                            <br />
                                            기존에 연모가 설치되어 있다면
                                            제어판에서 프로그램 추가삭제에서 기존에 깔려 있던 연모를 삭제하신후 설치하시면
                                            한겨레 전용 RSS를 만나실 수 있습니다.
                                            <br />
                                            <a href="http://www.hani.co.kr/rss_install/HaniYmInstall.exe" target="_blank">[연모 다운로드]</a>
                                            <br />
                                            권장사항 마이크로소프트 윈도우 98/ME/2000/XP 모두 지원
                                        </p>
                                        <br />
                                        <br />
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