import Script from "next/script"

export default function List_home_ad() {
    return (
        <section id="section_home_ad" className="home_ad">
            <h4 className="hidden">광고</h4>
            <div className="table_home_ad">
                <div className="ad728">
                    <Script type="text/javascript" src="//adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@Top1"></Script>
                </div>
                <div className="ad320">
                    <Script type="text/javascript"src="//adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@Top3?section=h21"></Script>
                </div>
            </div>
        </section>
    )
}
