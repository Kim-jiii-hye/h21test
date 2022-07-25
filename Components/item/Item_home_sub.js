import { SVC_PATH } from "@/lib/constants";
import sectionlist from "@/lib/sectionlist";
import Image from "next/future/image";
import Link from "next/link";
import Image_thumbnail from "./image_thumbnail";

export default function Item_home_sub({ homesubdata }) {
    
    const title = homesubdata.title;
    const mainimg = homesubdata.img;
    const url = homesubdata.url;
    const titleheader = homesubdata.titleheader;
    const titleheaderurl = homesubdata.titleheaderurl;

    const arrow_right = SVC_PATH + '/image/arrow_right_small.png';

        const notitleheader = () => {
        if (!titleheader || !titleheaderurl) {
            const parts = url.split('/');
            const notitle = sectionlist[parts[2]]['kr'];
            const notitleurl = sectionlist[parts[2]]['url'];
            return (
                    <a href={notitleurl}>
                        {notitle}
                        <Image src={arrow_right} width={5} height={10} layout="raw" />
                    </a>
            );
        }
    }

    return (
        <article className="item_home_sub">
            <div className="article0">
                <div className="article1">
                    <div className="image_on">
                        <div className="group0">
                            <div className="group1">
                                {
                                    titleheader
                                        ? <a href={titleheaderurl}>
                                            {titleheader}
                                            <Image src={arrow_right} width={5} height={10} layout="raw"/>
                                        </a>
                                        : notitleheader()
                                }
                            </div>
                        </div>
                    </div>
                    <div className="image0">
                        <div className="image1">
                            <Link href={ url }>
                                <a><Image_thumbnail imagedata={ mainimg }/></a>
                            </Link>
                        </div>
                    </div>
                    <div className="image_on">
                        <div className="title0">
                            <div className="title1">
                                <Link href={url}>
                                    <a><h6 dangerouslySetInnerHTML={{__html:title}}></h6></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article_border">
                    <div className="line"></div>
                </div>
            </div>
        </article>
    )
}