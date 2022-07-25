import Link from "next/link";
import useSWR from 'swr'
import Image_thumbnail from "@/item/image_thumbnail";

export default function Item_home_top() {
    
    const { data } = useSWR('/api/main');
    const main_top_data = data.data.top[0];
    
    return (
        <article className="item_home_top">
            <div className="article0">
                <div className="article1">
                    <div className="title0">
                        <div className="title1">
                            <Link href={ main_top_data.url }>
                                <a><h6 dangerouslySetInnerHTML={{__html:main_top_data.title}}></h6></a>
                            </Link>
                        </div>
                    </div>
                    <div className="image0">
                        <div className="image1">
                            <Image_thumbnail imagedata={ main_top_data.img }/>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}