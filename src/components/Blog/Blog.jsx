import "./Blog.css"
import Navslide from "../Navslide/Navslide"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState, useRef } from "react"
import { Input, Checkbox } from '@mui/material';

function Blog() {

    const dispatch = useDispatch()
    const [layout, setLayout] = useState()
    const news = useSelector(store => store.news)
    const favourites = useSelector(store => store.favourite.favourite)
    const [favLayout, setFavLayout] = useState()
    const [select, setSelect] = useState()
    const defaultRef = useRef(null)
    const favouriteRef = useRef(null)
    const [isFavourite, setIsFavourite] = useState(false);

    const activate = (e) => {

        let id = e.currentTarget.parentElement.parentElement.id
        let el = news.news.filter(obj => obj.id == id)

        if (!e.currentTarget.classList.contains('favourite-active')) {    
            dispatch({type: "ADD_FAVOURITE", payload: el[0]})
        } else {
            dispatch({type: "REMOVE_FAVOURITE", payload: id})
        }

        console.log(e.currentTarget.parentElement.parentElement)
        if (e.currentTarget.parentElement.parentElement.classList.contains('favourite')) {
            document.getElementById(id).querySelector('.new-block-favourite').classList.toggle('favourite-active')

        }

        e.currentTarget.classList.toggle('favourite-active')
        
    }

    const createElement = (a) => {
        const newL = a.map( a => {
            return <div className="news-block favourite" id={a.id} key={a.id} onClick={setSelected}>
            <div className="new-img-block">
                <img src={a.img} alt="photo" className="new-img"/>
            </div>
            <div className="new-block-right">
                <h2 className="new-block-header">
                    {a.title}
                </h2>
                <p className="new-block-description">
                    {a.description} 
                </p>
                <p className="new-block-source">
                    {a.source}
                </p>
                <p className="new-block-date">
                    {a.date}
                </p>
                <svg className="new-block-favourite favourite-active" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={activate}>
                    <g clipPath="url(#clip0_307_207)">
                    <path d="M17.3333 1.33337H6.66659C6.31296 1.33337 5.97383 1.47385 5.72378 1.7239C5.47373 1.97395 5.33325 2.31309 5.33325 2.66671V21.2867C5.33304 21.551 5.41136 21.8093 5.55828 22.029C5.70519 22.2487 5.91406 22.4197 6.15838 22.5204C6.40269 22.6212 6.67143 22.647 6.93047 22.5947C7.1895 22.5424 7.42716 22.4143 7.61325 22.2267L11.9733 17.88L16.3933 22.28C16.5801 22.4658 16.8178 22.592 17.0763 22.6428C17.3348 22.6935 17.6026 22.6666 17.8458 22.5653C18.089 22.464 18.2968 22.293 18.4429 22.0737C18.5889 21.8544 18.6668 21.5968 18.6666 21.3334V2.66671C18.6666 2.31309 18.5261 1.97395 18.2761 1.7239C18.026 1.47385 17.6869 1.33337 17.3333 1.33337Z"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_307_207">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            </div>
        })
        setFavLayout(newL)
    }

    const createLayout = (data) => {
        const newL = data.map( a => {
            return <div className="news-block" id={a.id} key={a.id} onClick={setSelected}>
                <div className="new-img-block">
                    <img src={a.img} alt="photo" className="new-img"/>
                </div>
                <div className="new-block-right">
                    <h2 className="new-block-header">
                        {a.title}
                    </h2>
                    <p className="new-block-description">
                        {a.description} 
                    </p>
                    <p className="new-block-source">
                        {a.source}
                    </p>
                    <p className="new-block-date">
                        {a.date}
                    </p>
                    <svg className="new-block-favourite" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={activate}>
                        <g clipPath="url(#clip0_307_207)">
                        <path d="M17.3333 1.33337H6.66659C6.31296 1.33337 5.97383 1.47385 5.72378 1.7239C5.47373 1.97395 5.33325 2.31309 5.33325 2.66671V21.2867C5.33304 21.551 5.41136 21.8093 5.55828 22.029C5.70519 22.2487 5.91406 22.4197 6.15838 22.5204C6.40269 22.6212 6.67143 22.647 6.93047 22.5947C7.1895 22.5424 7.42716 22.4143 7.61325 22.2267L11.9733 17.88L16.3933 22.28C16.5801 22.4658 16.8178 22.592 17.0763 22.6428C17.3348 22.6935 17.6026 22.6666 17.8458 22.5653C18.089 22.464 18.2968 22.293 18.4429 22.0737C18.5889 21.8544 18.6668 21.5968 18.6666 21.3334V2.66671C18.6666 2.31309 18.5261 1.97395 18.2761 1.7239C18.026 1.47385 17.6869 1.33337 17.3333 1.33337Z"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_307_207">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                </div>
        })

        isFavourite? setFavLayout(newL) : setLayout(newL)
    }

    const createSelected = (obj) => {

        let layout =  <div className="blog-news-select">
                <img src={obj.img} alt="img"/>
                <h1 className="blog-news-select-header">{obj.title}</h1>
                <p className="blog-news-select-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatum perspiciatis obcaecati? Quibusdam saepe dolorem facilis esse corrupti praesentium asperiores amet deserunt, unde quisquam nemo labore recusandae nam necessitatibus reiciendis.</p>
                <p className="blog-news-select-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatum perspiciatis obcaecati? Quibusdam saepe dolorem facilis esse corrupti praesentium asperiores amet deserunt, unde quisquam nemo labore recusandae nam necessitatibus reiciendis.</p>

                </div>
        setSelect(layout)
    }

    const setSelected = (e) => {
        let id = e.currentTarget.id

        if (id) {
            let el = news.news.filter(obj => obj.id == id)
            createSelected(el[0])
        }

    }

    const changeTitle = (e) => {
        let title = e.target.value

        let filtered;

        isFavourite? filtered= favourites.filter(el => el.title.startsWith(title)) : filtered = news.news.filter(el => el.title.startsWith(title))

        createLayout(filtered)
    }

    const resultChange = (e) => {
        if(e.target.checked) {
            favouriteRef.current.style.display = 'block'
            defaultRef.current.style.display = 'none'
            setIsFavourite(true)
        } else {
            favouriteRef.current.style.display = 'none'
            defaultRef.current.style.display = 'block'
            setIsFavourite(false)
        }
    }

    useEffect(() => {
        createElement(favourites)
    }, [favourites])

    useEffect(() => {
        let obj = news.news[0]
        let data = news.news

        createLayout(data)
        createSelected(obj)
    }, [])

    return(
        <div className="blog">
            <Navslide />
            <main className="blog-main">
                <h1 className="blog-header">AgriNews Daily</h1>
                <div className="blog-filters">
                <Input
                        style={{width:'20%', marginLeft: '39px', marginBottom: '20px'}}
                        placeholder="Title"
                        onChange={changeTitle}
                ></Input>
                <h3 className="blog-filters-txt">Only favourite</h3>
                <Checkbox onChange={resultChange} />
                </div>


                <div className="blog-news">
                    <div className="blog-news-block">
                        <div className="default" ref={defaultRef}>
                            {layout}
                        </div>
                        <div className="favourite-only" ref={favouriteRef} style={{display:'none'}}>
                        {favLayout}
                        </div>
                    </div>
                    {select}
                </div>
            </main>
        </div>
    )
}

export default Blog