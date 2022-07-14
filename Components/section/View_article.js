import useSWR from 'swr';
import Huwon_event from '@/item/Huwon_event';
export default function View_article() {
    const kisadata = useSWR('/api/kisa');
    const kisa = kisadata.data;
    const kisabody = kisa.body;
    const img = kisa.img.data;

    let bodydataRes;
    function stringToImg(i, num) {
        bodydataRes = i.replace(`[%%IMAGE${num}%%]`, `<div class="image0"><div class="image1" style={maxWidth:"659px;"}><div class="image2"><img src=${img[num - 1].url} /></div><div class="desc">${img[num - 1].desc}</div></div>`);
        if (img.length == num) {
            return bodydataRes;
        }
        num++;
        return stringToImg(bodydataRes, num);
    }
    stringToImg(kisabody, 1);
    return (
        <article>
            <div className="article_tools">

            </div>
            <div className="article_body" style={{ fontSize: '16px' }}>
                <div className="text" dangerouslySetInnerHTML={{ __html: bodydataRes }}></div>
                {/* <Huwon_event /> */}
            </div>
        </article>
    )
}