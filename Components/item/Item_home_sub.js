import { SVC_PATH } from "@/lib/constants";
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
                                            <Image src={arrow_right} width={5} height={10}/>
                                        </a>
                                        : <>추가필요</>
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
                                    <a><h6>{title}</h6></a>
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