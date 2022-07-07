import Head from "next/head";
import { MAINURL, SVC_PATH, SVC_PATH_21 } from '@/lib/constants';
export default function MainSeo() {
    const share_title = 'null';
    const share_image = 'null';
    const share_url = 'null';
    const share_desc = 'null';
    const head_title = 'null';

    return (
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
            <meta name="keywords" content="한겨레21, 한겨레" />
            <meta name="copyright" content="Hankyoreh, Inc" />
            <meta name="writer" content="" />
            <meta name="title" content={`${share_title}`} />
            <meta name="image" content={`${share_image}`} />
            <meta name="publish" content="" />
            
            {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
            <title>{head_title}</title>
            <meta property="og:url" content={`${share_url}`} />
            <meta property="og:site" content={`${share_url}`} />
            <meta property="og:title" content={`${share_title}`} />
            <meta property="og:image" content={`${share_image}`} />
            <meta property="og:description" content={`${share_desc}`} />
            <link rel="canonical" href={`${share_url}`} />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="stylesheet" href={`${SVC_PATH}/css/h21.css`} type="text/css" />
            <link rel="stylesheet" href="//img.hani.co.kr/section-image/21/support/banner_support.css" type="text/css" />
            <script src={`${SVC_PATH}/js/lib/html5ie.js`}></script>
            <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
            {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"	></script> */}
            <script src={`${SVC_PATH_21}/js/utils.js`}></script>
            <script src="//www.hani.co.kr/section-homepage/svc/js/google_analytics.js"></script>
            <script type="text/javascript" src="//www.hani.co.kr/hani/api/hani_cnt/hani_cnt_loader.hani"></script>



            <link rel="stylesheet" href="https://img.hani.co.kr/section-image/22/bn_support/bn2022_event.css"/>
            
        </Head>
    )
}