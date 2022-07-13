import Link from "next/link";
import useSWR from 'swr'
import Dot_title from "@/item/Dot_title";

export default function Box_list_series() {
    const data = useSWR('/api/kisa');
    const series_data = data.data.series_info;
    const title = series_data.title;
    const url = '/arti/SERIES/' + data.data.series_sn;
    const series_list = series_data.data;

    return (
        <section id="section_article_series" className="box_list_dot_title">
            <h4><Link href={`${url}`}><a>{title}</a></Link></h4>
            <ul className="dot_title">
                {
                    series_list.map((i, index) => (
                        <Dot_title title={i.title} url={i.url} key={index}/>        
                    ))
                }
                
            </ul>
        </section>
    )
}