import HeaderVer2 from "@/Components/HeaderVer2";
import Navigation_section from "@/Components/section/Navigation_section";
import MainSeo from "@/Components/seo/MainSeo";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Index() {

    const router = useRouter();
    const pagenum = router.query.id;

    const page_name_list = ['소개', '한겨레21소개', '제작과정', '광고안내'];
    const page_name_list_cnt = page_name_list.length - 1;

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
                        <Navigation_section 
                            data0 = {pagenum && page_name_list[0]}
                            data1 = {pagenum && page_name_list[parseInt(pagenum.slice('.html')[0])]}
                            type = {'other'}
                        />
                        <div id="introduction_contents" className="etc_contents_menu">
                            <div className="contents0">
                                <div className="menu">
                                    <ul className="menu1">
                                        {
                                            pagenum &&
                                            page_name_list.map((i, index)=> (
                                                (index > 0) &&
                                                <li key={index}>
                                                    {
                                                        (parseInt(pagenum.slice('.html')[0]) == index)
                                                        ? <strong>{i}</strong>
                                                        : <Link href={`/arti/INTRODUCTION/${index}.html`}><a>{i}</a></Link>
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