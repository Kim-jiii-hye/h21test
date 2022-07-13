import Link from "next/link";

export default function Dot_title({ title, url }) {
    return (
        <article className="dot_title">
            <div className="title0">
                <div className="title1">
                    <Link href={`${url}`}>
                        <a><h6>· {title}</h6></a>
                    </Link>
                </div>
            </div>
        </article>
    )
}