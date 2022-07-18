import { useRouter } from "next/router"
import { SVC_PATH } from "@/lib/constants";
import Link from 'next/link';

export default function Navigation_page({ totalpage, page }) {

    const btn_pre = SVC_PATH + '/image/bt_pre.png';
    const btn_next= SVC_PATH + '/image/bt_next.png';

    const router = useRouter();
    let router_url = router.asPath;
    const url = router_url.split('?');

    const count_l = 5;
    const count_r = 4;
    let start;
    let end;

    switch (totalpage > 1) {
        case totalpage <= (2 * count_l + 1):
            start = 1;
            end = totalpage;
            break;
        case (page - count_l) <= 0:
            start = 1;
            end = 1 + count_l + count_r;
            break;
        case (page + count_r) >= totalpage:
            start = totalpage - (count_l + count_r);
            end = totalpage;
            break;
        default:
            if (totalpage > 1) {
                start = (page - count_l);
                end = (page + count_r);
            } else {
                start = 1;
                end = 1;
            }
            break;
    }
    let hasPre = (start > 1);
    let hasNext = (end < totalpage);
    
    const pageArr = () => {
        let pageArray = [];
        for (let i = start; i <= end; i++) {
            pageArray.push(i);
        }
        const data = pageArray.map((number, index) => (
            <li key={index}>
                {
                    number == page
                        ? <strong>{number}</strong>
                        : <Link href={`${url[0]}/?cline=${number}`}><a>{number}</a></Link>
                }
            </li>
        ))
        return data;
    }

    return (
        <nav className="navigation_page">
            <ul className="navigation_page">
                {
                    hasPre && <li><Link href={`${url[0]}/?cline=${start - 1}`}><img src={`${btn_pre}`} alt="이전 페이지" title="이전 페이지" /></Link></li>
                }
                {pageArr()}
                {
                    hasNext && <li><Link href={`${url[0]}/?cline=${end + 1}`}><img src={`${btn_next}`} alt="다음 페이지" title="다음 페이지" /></Link></li>
                }
            </ul>
        </nav>
    )
}