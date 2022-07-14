import HeaderVer2 from "@/Components/HeaderVer2";
import Navigation_section from "@/Components/section/Navigation_section";
import MainSeo from "@/Components/seo/MainSeo";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter();
    const pagenum = router.query.id;

    const page_name_list = ["정기구독", "정기구독 신청", "구독정보 조회", "회원구독", "비회원 구독", "해외 구독", "연장 구독", "간편 구독", "정기독자 인증" ];
    const page_name_list_cnt = page_name_list.length - 1;

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
                        <Navigation_section 
                            data0 = {pagenum && page_name_list[0]}
                            data1 = {pagenum && page_name_list[parseInt(pagenum.slice('.html')[0])]}
                            type = {'other'}
                        />
                        <div id="subscription_contents" className="etc_contents_menu">
                            <div className="contents0">
                                <div className="menu">
                                    <ul className="menu1">
                                        {
                                            pagenum &&
                                            page_name_list.map((i, index)=> (
                                                (index == 1 || index == 2 || index == 8) &&
                                                
                                                <li key={index}>
                                                    {
                                                        (parseInt(pagenum.slice('.html')[0]) == index)
                                                        ? <strong>{i}</strong>
                                                        : <Link href={`/arti/SUBSCRIPTION/${index}.html`}><a>{i}</a></Link>
                                                    }
                                                    {
                                                        page_name_list_cnt != index && <span className="split">|</span>
                                                    }
                                                </li>
                                            ))
                                        }
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