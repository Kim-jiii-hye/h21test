import { SVC_PATH } from "@/lib/constants";
import Link from "next/link";
import Image_thumbnail from "@/item/Image_thumbnail";
import Image from "next/future/image";
import sectionlist from "@/lib/sectionlist";

export default function Item_home_main({ homemaindata }) {

    const title = homemaindata.title;
    const mainimg = homemaindata.img;
    const url = homemaindata.url;
    const prologue = homemaindata.prologue;
    const titleheader = homemaindata.titleheader;
    const titleheaderurl = homemaindata.titleheaderurl;

    const arrow_right = SVC_PATH + '/image/arrow_right_small.png';

    const notitleheader = () => {
        if (!titleheader || !titleheaderurl) {
            const parts = url.split('/');
            const notitle = sectionlist[parts[2]]['kr'];
            const notitleurl = sectionlist[parts[2]]['url'];
            return (
                <Link href={notitleurl}>
                    <a>
                        {notitle}
                        <Image src={arrow_right} width={5} height={10} layout="raw" />
                    </a>
                </Link>
            );
        }
    }

    return (
        <article className="item_home_main">
            <div className="article0">
                <div className="article1">
                    <div className="image_on">
                        <div className="group0">
                            <div className="group1">
                                {
                                    titleheader
                                        ?
                                        <Link href={titleheaderurl}>
                                            <a>
                                                {titleheader}
                                                <Image src={arrow_right} width={5} height={10} layout="raw" />
                                            </a>
                                        </Link>
                                        : notitleheader()
                                }
                            </div>
                        </div>
                    </div>
                    <div className="image0">
                        <div className="image1">
                            <Link href={url}>
                                <a><Image_thumbnail imagedata={mainimg} /></a>
                            </Link>
                        </div>
                    </div>
                    <div className="image_on">
                        <div className="title0">
                            <div className="title1">
                                <Link href={url}><a>{title}</a></Link>
                            </div>
                        </div>
                        <div className="prologue0">
                            <div className="prologue1">
                                <Link href={url}><a>{prologue}</a></Link>
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