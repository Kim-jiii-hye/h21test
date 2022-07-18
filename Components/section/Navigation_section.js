import Link from "next/link";
import sectionlist from "@/lib/sectionlist";
import sectionOriginal from "@/lib/sectionOriginal";
import { useRouter } from "next/router";

export default function Navigation_section({ data0, data1, type }) {
    const router = useRouter();
    const intro_chk = router.route.includes('INTRODUCTION');
    const subscrip_chk = router.route.includes('SUBSCRIPTION');
    const customer_chk = router.route.includes('CUSTOMER');

    // data0 데이터의 경우 소개와 구독 페이지는 sectionlist변경 필요 없음
    let data0_kr;
    {
        (intro_chk || subscrip_chk || customer_chk)
            ? data0_kr = data0 :
            data0 ? data0_kr = sectionlist[data0]['kr'] : <></>
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

                                {/* 기사페이지의 경우 data1으로 받는 데이터는 기사json의 sec임.
                            sec 문자열이 숫자인지 체크해 변경할 수 있도록 */}

                                {   
                                    console.log(parseInt(data1) == NaN)
                                }
                                
                            </>
                    }
                </div>
            </div>
        </nav>
    )
}