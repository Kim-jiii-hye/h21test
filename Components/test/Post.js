export default function Post({post}){
    return (
        <div className="body" style={{backgroundColor:'lightgray', marginBottom: '50px'}}>
            <h3>{post.title}</h3>
            <div>{post.prologue}</div>
        </div>
    )
}