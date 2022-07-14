import Link from "next/link";
import sectionlist from "@/lib/sectionlist";
import sectionOriginal from "@/lib/sectionOriginal";

export default function Navigation_section({ data0, data1, type }) {
    let data0_kr;
    {
        data0 ? data0_kr = sectionlist[data0]['kr'] : <></>
    }
    

    const kisaviewtype = () => {
        const changedata1 = sectionOriginal[data1]['url'];
        // changedata1.map((i, index) => (
            
        // ))
    }
    return (
        <nav id="navigation_section">
            <div className="navigation0">
                <div className="navigation1">
                    {
                        type == 'other'
                        ?
                        <>
                            <span className="path_not_last"><Link href="/"><a>HOME</a></Link></span> &gt;
                            {
                                data1 == ''
                                ? <span className="path_last">{data0}</span>
                                : <span className="path_not_last">{data0}</span>
                            }
                            &gt; <span className="path_last">{data1}</span>
                        </>
                        :
                        <>
                            <span className="path_not_last"><Link href="/arti"><a>전체</a></Link></span> &gt;
                            {
                                (data0 != 'SERIES')
                                && <><span className="path_not_last"><Link href="/arti/NEWS"><a>뉴스</a></Link></span>&gt;</>
                            }
                            {
                                data1 == ''
                                ? <span className="path_last"><Link href={`/arti/${data0}`}><a>{data0_kr}</a></Link></span>
                                : <span className="path_not_last"><Link href={`/arti/${data0}`}><a>{data0_kr}</a></Link></span>
                            }
                        </>
                    }
                </div>
            </div>
        </nav>
    )
}