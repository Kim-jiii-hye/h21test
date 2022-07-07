import useSWR from 'swr';
import List_rank_title from "@/section/List_rank_title";

export default function Box_list_popular2() {
    const hdata = useSWR('/api/famousdata');
    const htop = hdata.data.hanitop;
    return (
        <section id="section_list_popular_hani" className='box_list_rank_title'>
            <h4>한겨레 인기기사</h4>
            <ul>
                {
                    htop.map((i, index) => (
                        <List_rank_title rank={i} index={index} />
                    ))
                }
            </ul>
        </section>
    )
}