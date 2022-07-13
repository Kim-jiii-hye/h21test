import { useRouter } from 'next/router';
import useSWR from 'swr';
import Item_article from "@/item/Item_article";
import Item_series from '@/item/Item_series';

export default function List_article_section(){
    
    const listdata = useSWR('/api/list');
    const list = listdata.data.data;
    const seriesdata = listdata.data;
    const chktype = listdata.data.title;
    
    return (
        <>
        {
            chktype == 'seriesing_1'
            ? 
            <ul className="list_series">
            {
                seriesdata && 
                <Item_series list={seriesdata} />
            }
            </ul>
            :
            <ul	className="list_article">
            {
                list && 
                list.map((i, index) => (
                    <Item_article list={i} key={index}/>
                ))
            }
	        </ul>
        }
        </>
    )
}