import { SVC_PATH } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import View_search_form from "./section/View_search_form";

export default function HeaderVer2() {
    const mainImgLogo = SVC_PATH + '/image/logo_h21.png';
    return (
        <>
            <div id="title_bar">
                <div className="title0">
                    <div className="title1">
                        <div className="logo">
                            <Link href="/"><a><Image src={mainImgLogo} alt="한겨레21" title="한겨레21" width={110} height={30} /></a></Link>
                            <View_search_form />
                        </div>
                    </div>
                </div>
            </div>
            <nav id="navigation_section">
                <div className="navigation0">
                    <div className="navigation1">
                        <span className="path_not_last"><a href="/">HOME</a></span> &gt;
                        <span className="path_not_last">소개</span> &gt;
                        <span className="path_last"></span>
                    </div>
                </div>
            </nav>
        </>
    )
}