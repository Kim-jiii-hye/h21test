import Link from "next/link";

export default function View_subscription({ bookdata }) {

    const current_book = bookdata.data[0];
    const past_book = bookdata.data[1]

    const c_coverimg = current_book.coverimg;
    const c_ho = current_book.ho;
    const c_date = current_book.startdt;

    const p_ho = past_book.ho;

    return (
        <div id="section_subscription">
            <div className="subscription0">
                <div className="subscription1">
                    <div className="subscription2">
                        <div className="image0">
                            <div className="image1">
                                <img src={ c_coverimg } title={`제 ${c_ho}호`} alt={`제 ${c_ho}호`} />
                            </div>
                        </div>
                        <div className="text0">
                            <div className="info0">
                                <div className="magazine_no">제 {c_ho}호</div>
                                <div className="date">{ c_date }</div>
                                <div className="list"><Link href={`/arti/HO/${c_ho}.html`}>차례보기</Link></div>
                            </div>
                            <div className="link0">
                                <div className="link1"><Link href={`/arti/HO/${p_ho}.html`}>지난호보기</Link></div>
                                <div className="link1"><a href="https://smartstore.naver.com/hankyoreh21" target="_blank" rel="noopener noreferal">낱권구입</a></div>
                                <div className="link2"><Link href="/arti/SUBSCRIPTION/1.html">구독신청</Link></div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
