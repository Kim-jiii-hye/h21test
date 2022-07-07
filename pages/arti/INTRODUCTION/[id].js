import HeaderVer2 from "@/Components/HeaderVer2";
import MainSeo from "@/Components/seo/MainSeo";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export default function Index() {

    const router = useRouter();
    const pagenum = router.query.id;

    const callDynamicPage = () => {
        if(pagenum){
            const pagetype = pagenum.slice('.html')[0]; //1.html이면 1 가져옴
            const DynamicComponent = dynamic(() => import(`@/Components/section/View_introduction_${pagetype}`));
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
                        <div id="introduction_contents" className="etc_contents_menu">
                            <div className="contents0">
                                <div className="menu">
                                    <ul className="menu1">
                                        
                                    </ul>
                                </div>
                                <div className="contents1">
                                    { callDynamicPage() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}