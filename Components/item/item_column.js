import Link from "next/link";
import Image_thumbnail from "@/item/Image_thumbnail";

export default function Item_column({ list }) {
    const img = list.img;
    const ho = list.columnsn;
    const url = `/arti/COLUMN/${ho}`;
    const title = list.title;
    const ho_st = list.ho_st;
    const ho_fin = list.ho_fin;

    const data = list.data;

    return (
        <li>
            <article className="item_column">
                <div className="article0">
                    <div className="article1">
                        {
                            (img)
                                ?
                                <>
                                    <div className="image0">
                                        <div className="image1">
                                            <Link href={`${url}`}>
                                                <a><Image_thumbnail imagesdata={img} /></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="image_on">
                                        <div className="group0">
                                            <div className="group1">
                                            </div>
                                        </div>
                                        <div className="title0">
                                            <div className="title1">
                                                <Link href={`${url}`}>
                                                    <a><h5>{title}</h5></a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="magazine_no0">
                                            <div className="magazine_no1">
                                                <Link href={`${url}`}>
                                                    <a>제 {ho_st}호 ~ {ho_fin ? `제 ${ho_fin}` : ''}</a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="list0">
                                            <div className="list1">
                                                <ul>
                                                    {
                                                        data.map((i, index) => (
                                                            <li key={index}>
                                                                <article><Link href={i.url}><a>[제 {i.ho}호]{i.title}</a></Link></article>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <div className="image_ff">
                                    <div className="group0">
                                        <div className="group1">
                                        </div>
                                    </div>
                                    <div className="title0">
                                        <div className="title1">
                                            <Link href={`${url}`}>
                                                <a><h5>{title}</h5></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="magazine_no0">
                                        <div className="magazine_no1">
                                            <Link href={`${url}`}>
                                                <a>제 {ho_st}호 ~ {ho_fin ? `제 ${ho_fin}` : ''}</a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="list0">
                                        <div className="list1">
                                            <ul>
                                                {
                                                    data.map((i, index) => (
                                                        <li key={index}>
                                                            <article><Link href={i.url}><a>[제 {i.ho}호]{i.title}</a></Link></article>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </article>
        </li>
    )
}