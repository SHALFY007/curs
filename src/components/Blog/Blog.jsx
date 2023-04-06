import "./Blog.css"
import Navslide from "../Navslide/Navslide"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState, useRef } from "react"
import { Input, Checkbox, Button } from '@mui/material';
import Modal from "../../Modal/Modal";
import ModalUpdate from "../ModalUpdate/ModalUpdate";
import Navigation from '../Navigation/Navigation'

function Blog() {

    const dispatch = useDispatch()
    const [layout, setLayout] = useState()
    const news = useSelector(store => store.news)
    const [select, setSelect] = useState()
    const defaultRef = useRef(null)
    const blockRef = useRef(null)
    const [isFavourite, setIsFavourite] = useState(false);
    const [search, setSearch] = useState([])
    const [updateId, setUpdateId] = useState(1)

    let selectId = 1

    const activate = (e) => {
        e.currentTarget.classList.toggle('favourite-active')
    }

    const open = () => {
        document.querySelector('.modal').style.display = 'block'
    }

    const updateOpen = (e) => {
        setUpdateId(e.currentTarget.parentElement.parentElement.id)
        console.log(e.currentTarget.parentElement.parentElement.id)
        document.querySelector('.modal-update').style.display = 'block'
    }

    const createLayout = (data, cl=false) => {
        let classN;
        isFavourite ? classN="new-block-favourite favourite-active" : classN="new-block-favourite"
        if (cl) {
            classN="new-block-favourite"
        }
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
                    <svg onClick={updateOpen} className="new-block-up" width="6" height="26" viewBox="0 0 6 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#D0D5DD"/>
                        <circle cx="3" cy="13" r="3" fill="#D0D5DD"/>
                        <circle cx="3" cy="23" r="3" fill="#D0D5DD"/>
                    </svg>
                    <svg className={classN} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={activate}>
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

        setLayout(newL)
    }

    const deleteNew = () => {
        dispatch({type: "REMOVE_NEWS", payload: selectId})
    }

    const createSelected = (obj) => {

        let layout =  <div className="blog-news-select" ref={blockRef}>
                <img src={obj.img} alt="img"/>
                <h1 className="blog-news-select-header">{obj.title}</h1>
                <p className="blog-news-select-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatum perspiciatis obcaecati? Quibusdam saepe dolorem facilis esse corrupti praesentium asperiores amet deserunt, unde quisquam nemo labore recusandae nam necessitatibus reiciendis.</p>
                <p className="blog-news-select-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatum perspiciatis obcaecati? Quibusdam saepe dolorem facilis esse corrupti praesentium asperiores amet deserunt, unde quisquam nemo labore recusandae nam necessitatibus reiciendis.</p>
                <Button variant="contained" 
                color="error"
                onClick={deleteNew}>DELETE</Button>
                </div>
                console.log(layout)
        setSelect(layout)
    }

    const setSelected = (e) => {
        let id = e.currentTarget.id
        selectId = +id
        if (id) {
            let el = news.news.filter(obj => obj.id == id)
            createSelected(el[0])
        }

    }

    const changeTitle = (e) => {
        let title = e.target.value
        let arr = []

        console.log(search)

        search.forEach(el => {
            if (el) {
                arr.push(news.news.filter(e => e.id == el))
            }
        })

        let filtered;
        
        console.log(arr)

        console.log(isFavourite)

        isFavourite ?  filtered = arr.filter(el => el[0].title.startsWith(title)) : filtered =  news.news.filter(el => el.title.startsWith(title))
        console.log(filtered)
        if (isFavourite) {
            filtered = filtered.map((el) => {
                return el[0]
            })
        }
        isFavourite ? createLayout(filtered) : createLayout(filtered)
        
    }

    const resultChange = (e) => {
        let els = defaultRef.current.querySelectorAll('.new-block-favourite')

        if(e.target.checked) {
            els.forEach(el => {
                if (!el.classList.contains('favourite-active')) {
                    el.parentElement.parentElement.classList.add('hide')
                } else {
                    console.log(search)
                    setSearch([...search, search.push(el.parentElement.parentElement.id)])
                }
            })
            setIsFavourite(true)
        } else {
            els.forEach(el => {
                if (!el.classList.contains('favourite-active')) {
                    el.parentElement.parentElement.classList.remove('hide')
                }
            })
            setIsFavourite(false)
            createLayout(news.news, true)
        }
    }

    useEffect(() => {
        createLayout(news.news)
    }, [news])

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
                            <Button
                            style={{width: "578px", height: "90px", marginBottom: "15px"}}    
                            variant="outlined"
                            onClick={open}
                            className="blog-button-ad"
                            >Add new</Button>
                        </div>
                    </div>
                    {select}
                </div>
            </main>
            <Modal></Modal>
            <ModalUpdate id={updateId}></ModalUpdate>
            <div className="blog-nav">
            <Navigation></Navigation>
            </div>
            
        </div>
    )
}

export default Blog