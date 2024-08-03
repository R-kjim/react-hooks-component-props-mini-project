import Article from "./Article"

export default function ArticleList({posts}){
    console.log(posts)
    const postsFn=posts.map((post)=>{
       return(
        <div key={post.id}>
        <Article title={post.title} date={post.date} preview={post.preview}/>
        </div>
       )
    })
    return (
        <>
        <main>
        {postsFn}
        </main>
        
        </>
    )
}