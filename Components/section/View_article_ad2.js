import Script from "next/script";

export default function View_article_ad2() {
    return (
        <section id="ad-side01" className="side-ad">
            <h4 className="hidden"></h4>
            <div className="visual-ad">
                <div className="ad600">
                    <Script type="text/javascript" src="https://adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@x01?kisano=<?=$section_data;?>"></Script>
                </div>
                <div className="ad320">
                    <Script type="text/javascript" src="https://adservice.hani.co.kr/RealMedia/ads/adstream_jx.ads/magazine/@x11?kisano=<?=$section_data;?>"></Script>
                </div>
            </div>
        </section>

    )
}