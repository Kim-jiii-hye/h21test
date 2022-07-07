import useSWR from 'swr';
import List_rank_title from "@/section/List_rank_title";

export default function Box_list_popular1() {
    const h21data = useSWR('/api/famousdata');
    const h21top = h21data.data.h21top;
    return (
        <section id="section_list_popular_h21" className="box_list_rank_title">
            <h4>한겨레21 인기기사</h4>
            <ul>
                {
                    h21top.map((i, index) => (
                        <List_rank_title rank={i} index={index}/>
                    ))
                }
                
            </ul>
        </section>
    )
}