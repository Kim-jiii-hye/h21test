import useSWR from 'swr';
import Item_article from "../item/Item_article";

export default function List_article_section(){
    
    const listdata = useSWR('/api/list');
    const list = listdata.data.data;

    return (
        <ul	className="list_article">
            {
                list && 
                list.map((i, index) => (
                    <Item_article list={i} key={index}/>
                ))
            }
	    </ul>
    )
}