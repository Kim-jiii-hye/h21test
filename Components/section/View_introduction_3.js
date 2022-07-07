import { SVC_PATH } from "@/lib/constants";
import Image from "next/image";

export default function View_introduction_3() {

    const imgad0 = SVC_PATH + '/image/introduction/ad0.png';
    const imgad1 = SVC_PATH + '/image/introduction/ad1.png';
    const imgad2 = SVC_PATH + '/image/introduction/ad2.png';
    const imgad3 = SVC_PATH + '/image/introduction/ad3.png';
    const imgad4 = SVC_PATH + '/image/introduction/ad4.png';
    const imgad5 = SVC_PATH + '/image/introduction/ad5.png';

    const imgwidth = 292;
    const imgheight = 183;

    return (
        <div className="introduction_3">
            <div className="ad	ad_left">
                <div className="ad1">
                    <Image src={ imgad0 } width={ imgwidth } height={ imgheight } />
                    <div className="price">
                        표지2 : 6,000,000원<br />
                        표지2 대면 : 6,000,000원, 첫 페이지 대면
                    </div>
                </div>
            </div>
            <div className="ad	ad_right">
                <div className="ad1">
                    <Image src={ imgad1 } width={ imgwidth } height={ imgheight } />
                    <div className="price">
                        표지3 : 5,000,000원, 뒷면 앞
                    </div>
                </div>
            </div>
            <div className="clear"></div>
            <div className="ad	ad_left">
                <div className="ad1">
                    <Image src={ imgad2 } width={ imgwidth } height={ imgheight } />
                    <div className="price">
                        표지4 : 10,000,000원
                    </div>
                </div>
            </div>
            <div className="ad	ad_right">
                <div className="ad1">
                    <Image src={ imgad3 } width={ imgwidth } height={ imgheight } />
                    <div className="price">
                        목차 대면 : 5,000,000원
                    </div>
                </div>
            </div>
            <div className="clear"></div>
            <div className="ad	ad_left">
                <div className="ad1">
                    <Image src={ imgad4 } width={ imgwidth } height={ imgheight } />
                    <div className="price">
                        칼럼 대면 : 4,000,000원, 편집장 칼럼 대면
                    </div>
                </div>
            </div>
            <div className="ad	ad_right">
                <div className="ad1">
                    <Image src={ imgad5 } width={ imgwidth } height={ imgheight } />
                    <div className="price">
                        내지 : 3,000,000원, 기사와 함께 보는 광고
                    </div>
                </div>
            </div>
            <div className="clear"></div>
            <div className="ad_etc">
                센터 : 7,000,000원, 2페이지 스프레드<br />
                1/2 페이지 : 1,500,000원<br />
                1/3 페이지 : 1,200,000원<br />
                <br />
                ※ 부가가치세 별도, 원색기준(단색도 동일 단가 적용), 판형 : 가로 205㎜ × 세로 260㎜<br />
                광고문의 : <strong>02-710-0578</strong> (FAX 02-710-0555)
            </div>
        </div>
    )
}