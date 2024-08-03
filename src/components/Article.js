export default function Article({title,date,preview}){


    return (
        <>
        <article>
        <h3>{title}</h3>
        {date? <small>{date}</small>:<small>{date='January 1, 1970'}</small>}
        <p>{preview}</p>
        </article>
        </>
    )
}