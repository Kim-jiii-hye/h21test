import HeaderVer2 from "@/Components/HeaderVer2";
import Navigation_section1 from "@/Components/section/Navigation_section1";
import MainSeo from "@/Components/seo/MainSeo";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter();
    const pagenum = router.query.id;

    const callDynamicPage = () => {
        if(pagenum){
            const pagetype = pagenum.slice('.html')[0]; //1.html이면 1 가져옴
            const DynamicComponent = dynamic(() => import(`@/Components/section/View_subscription_${pagetype}`));
            return <DynamicComponent />
        }
    }
    return (
        <>
            <MainSeo />
            <div id="viewMain">
                <div className="main0">
                    <div className="main1">
                        <HeaderVer2 />
                        <Navigation_section1 />
                        <div id="subscription_contents" className="etc_contents_menu">
                            <div className="contents0">
                                <div className="menu">
                                    <ul className="menu1">
                                        <li><a href="/arti/SUBSCRIPTION/8.html" onclick="javascript:return checkLoginAndMove('https%3A%2F%2Fh21.hani.co.kr%2Farti%2FSUBSCRIPTION%2F8.html');">정기독자 인증</a></li>
                                    </ul>
                                </div>
                                <div className="contents1">
                                    {callDynamicPage()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}