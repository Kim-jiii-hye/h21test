import Link from "next/link";
import useSWR from 'swr'
import Dot_title from "@/item/Dot_title";

export default function Box_list_column() {
    const data = useSWR('/api/kisa');
    const column_data = data.data.column_info;
    const title = column_data.title;
    const url = '/arti/COLUMN/' + data.data.column_sn;
    const column_list = column_data.data;

    return (
        <section id="section_article_column" className="box_list_dot_title">
            <h4><Link href={`${url}`}><a>{title}</a></Link></h4>
            <ul className="dot_title">
                {
                    column_list.map((i, index) => (
                        <Dot_title title={i.title} url={i.url} />
                    ))
                }

            </ul>
        </section>
    )
}