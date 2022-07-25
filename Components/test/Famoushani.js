import Link from "next/link";
import Image_thumbnail from "@/item/Image_thumbnail";

export default function Famoushani({data})
{
    const url = data.svcurl;
    const mainimg = data.image;
    const title = data.title;
    return (
         <article className="item_home_sub" style={{float: 'left'}}>
            <div className="article0">
                <div className="article1">
                    <div className="image_on">
                        <div className="group0">
                            <div className="group1">
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