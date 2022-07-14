import { useRouter } from 'next/router';
import useSWR from 'swr';
import Item_article from "@/item/Item_article";
import Item_series from '@/item/Item_series';
import Item_column from '../item/item_column';

export default function List_article_section(){
    
    const listdata = useSWR('/api/list');
    const list = listdata.data.data;
    const seriesdata = listdata.data;
    const chktype = listdata.data.title;

    const chkt = () => {
        switch(chktype){
            case 'seriesing_1':
                return seriesdata &&
                    <Item_series list={seriesdata} />
            case 'columning_1':
                return seriesdata &&
                    <ul className='list_column'>
                        {
                        list.map((i, index) => (
                            <Item_column list={i} key={index}/>
                        ))
                        }
                    </ul>
            default:
                return list && 
                    list.map((i, index) => (
                        <Item_article list={i} key={index}/>
                    ))
        }
    }

    return (
        <>
            {chkt()}
        </>
    )
}