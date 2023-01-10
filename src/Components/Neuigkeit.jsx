


function Neuigkeit({ data, searchItems }) {

    return (
        <>
            {searchItems(data).map((e, i) => {
                return (
                    <div key={i}>
                        <img src={e.urlToImage} alt={e.title} />
                        <h2>{e.title}</h2>
                        <h2>{e.content}</h2>
                        <h2>{e.publishedAt}</h2>
                        <a href={e.url} target="_blank" rel="noreferrer">Read more...</a>
                    </div>
                )
            })}

        </>
    )
}

export default Neuigkeit
