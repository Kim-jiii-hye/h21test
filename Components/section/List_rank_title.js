import Link from "next/link";

export default function List_rank_title({ rank, index }) {

    const title = rank.title;
    const url = rank.url;
    const num = index + 1;

    return (
        <li>
            <article className="rank_title">
                <div className="rank0">
                    <div className="rank1">
                        { num }
                    </div>
                </div>
                <div className="title0">
                    <div className="title1">
                        <Link href={ url }><a><h6>{ title }</h6></a></Link>
                    </div>
                </div>
            </article>
        </li>
    )
}