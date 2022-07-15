import useSWR from 'swr'

export default function View_article_head() {
    const data = useSWR('/api/kisa');
    const header_data = data.data;
    const title = header_data.title;
    const subtitle = header_data.subtitle;
    const ho = header_data.ho;
    const wdate = header_data.wdate;
    const mdate = header_data.mdate;
    
    return (
        <header className="article_head">
            <h5><a href="/arti/SERIES/"></a></h5>
            <h1>{title}</h1>
            <h3><div dangerouslySetInnerHTML={{__html: subtitle}}></div></h3>
            <div className="info"><div className="magazine_no">제 {ho}호</div></div>
            <div className="datebox"> 등록 : {wdate} 수정: {mdate} </div>
        </header>
    )
}