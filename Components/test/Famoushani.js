import Link from "next/link";

export default function Famoushani({ data }) {
    const ho = data.ho;
    const startdt = data.startdt;
    const coverimg = data.coverimg;

    return (
        <div>
            <div className="top">
                <div className="no">제 {ho}호</div>
                <div className="date">{startdt}</div>
            </div>
            <div className="middle">
                <div className="image">
                    <Link href={`/${ho}`}>
                    <div className="image0" style={{ width:'300px', height:'300px', backgroundImage: `url(${coverimg})`}}><div className="image_ratio"></div></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}