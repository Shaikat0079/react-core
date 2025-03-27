export default function Post({post}){
    console.log(post)
    const {title,body}=post;
    return (
        <div className="card" style={{margin:"20px"}}>
            <p>{title}</p>
            <h3 style={{color:"cadetblue"}}>{body}</h3>

        </div>
    )
}