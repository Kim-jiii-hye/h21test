export default function Navigation_section({ data0, data1 }) {
    return (
        <nav id="navigation_section">
            <div className="navigation0">
                <div className="navigation1">
                    <span className="path_not_last"><a href="/">HOME</a></span> &gt;
                    {
                        data1 == ''
                        ? <span className="path_last">{data0}</span>
                        : <span className="path_not_last">{data0}</span> 
                    }
                    &gt; <span className="path_last">{data1}</span>
                </div>
            </div>
        </nav>
    )
}