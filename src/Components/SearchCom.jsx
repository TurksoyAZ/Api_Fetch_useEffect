import { useEffect, useState } from "react"
import Neuigkeit from "./Neuigkeit"

import './SearchCom.scss'


function SearchCom() {


    const [data, setData] = useState([])
    const keyApi = 'a30cce76cde24f36bf04c2eff53c050b'

    const [search, setSearch] = useState('')

    //Api ziehen
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=apple&apiKey=${keyApi}`)
            .then(res => res.json())
            .then(res => {
                setData(res.articles)
            })
    }, [])

    //für Suchfunktion
    const searchItems = (items) => {
        return items.filter((e) => e.title.toLowerCase().includes(search))
    }

    console.log(data);
    console.log(search)

    return (
        <section className="containerSearchCom">

            <article className="inputBox">
                <h1>Neuigkeit</h1>
                <input type="text" placeholder='Search....' onChange={(e) => setSearch(e.target.value)} />
            </article>

            <article className="searchBox">
                <Neuigkeit data={data} searchItems={searchItems} />
            </article>
        </section>
    )
}

export default SearchCom
