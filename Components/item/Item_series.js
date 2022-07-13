import Image_thumbnail from "@/item/Image_thumbnail";
import Link from "next/link";

export default function Item_series({ list }) {

    const outsidedata = list.data;

    return (
        <>
            {
                outsidedata.map((i, index) => (
                    <li key={index}>
                        <article className="item_series">
                            <div className="article0">
                                <div className="article1">
                                    <div className="image_ff">
                                        <div className="group0">
                                            <div className="group1">
                                            </div>
                                        </div>
                                        <div className="title0">
                                            <div className="title1">
                                                <Link href={`/arti/SERIES/${i.seriessn}`}>
                                                    <a><h5>{i.title}</h5></a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="magazine_no0">
                                            <div className="magazine_no1">
                                                <Link href={`/arti/SERIES/${i.seriessn}`}>
                                                    <a>제 {i.ho_st}호 ~ {i.ho_fin ? `제 ${i.ho_fin}호` : ``}</a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="list0">
                                            <div className="list1">
                                                <ul>
                                                    {
                                                        i.data &&
                                                        i.data.map((detaildata, idx) => (
                                                            <li key={idx}>
                                                                <article>
                                                                    <Link href={`${detaildata.url}`}><a>[제{detaildata.ho}]{detaildata.title}</a></Link>
                                                                </article>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </li>
                ))
            }
        </>
    )
}