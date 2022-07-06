import { SVC_PATH } from "@/lib/constants"
import Image from "next/image";


export default function View_search_form() {

    const searchbtn = SVC_PATH + '/image/button_search1.png';
    const searchbtn3 = SVC_PATH + '/image/button_search3.png';

    return (
        <div id="search_form">
            <div className="open_search">
                <a href="http://search.hani.co.kr/Search" title="검색" target="_blank" data-is-opened="F">
                    <Image src={ searchbtn } alt="검색" title="검색" width={20} height={20} />
                </a>
            </div>
            <div className="form_search" style={{height:'0', opacity:'0'}}>
                <div className="form0">
                    <div className="form1">
                        <form name="frmsearch" method="get" action="http://121.254.212.141:8000/h21">
                            <input type="hidden" name="command" value="query" />
                            <input type="hidden" name="media" value="magazine" />
                            <input type="text" name="searchword" value="" title="검색어" className="text" />
                            <input type="image" src={searchbtn3} className="button" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}