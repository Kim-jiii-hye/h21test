import Link from "next/link";
import Image_thumbnail from "./Image_thumbnail";

export default function Item_article({ list }) {

    const ho = list.ho;
    const img = list.img;
    const prologue = list.prologue;
    const title = list.title;
    const url = list.url;
     
    return (
        <article className="item_article">
            <div className="article0">
                <div className="article1">
                    <div className="image0">
                        <div className="image1">
                            <Link href={`${url}`}><a><Image_thumbnail imagedata={img}/></a></Link>
                        </div>
                    </div>
                    <div className="image_on">
                        <div className="group0">
                            <div className="group1">
                                {/* 경우에 따라 나오고 안나오고 체크 필요 */}
                                {/* <Link href={`${url}`}><a>sectionname</a></Link> */}
                            </div>
                        </div>
                        <div className="title0">
                            <div className="title1">
                                <Link href={`${url}`}><h6>{title}</h6></Link>
                            </div>
                        </div>
                        <div className="magazine_no0">
                            <div className="magazine_no1">
                                <Link href={`${url}`}><a>제 {ho}호</a></Link>
                            </div>
                        </div>
                        <div className="prologue0">
                            <div className="prologue1">
                                <Link href={`${url}`}><a>{prologue}</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}