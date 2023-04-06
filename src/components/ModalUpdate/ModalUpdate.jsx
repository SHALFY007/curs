import './ModalUpdate.css'
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Input, Button } from '@mui/material';


function ModalUpdate(props) {

    const modalRef = useRef(null)
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const sourceRef = useRef(null)
    const dispatch = useDispatch()
    const [title, setTitle] = useState('Title')
    const [description, setDescription] = useState('Description')
    const [source, setSource] = useState('Source')
    const [newL, setNewL] = useState('')

    const {news} = useSelector(store => store.news)

    const updateNew = () => {
        dispatch({type:"UPDATE_NEWS", payload:{id:props.id, edit:{
            id: props.id,
            title: titleRef.current.querySelector('input').value,
            description: descriptionRef.current.querySelector('input').value,
            source: sourceRef.current.querySelector('input').value,
            img: newL.img,
            date: new Date().toDateString()
        }}})
    }

    const close = () => {
        modalRef.current.style.display = 'none'
        console.log(props.id)
    }

    useEffect(() => {
        let obj = news.filter(el => el.id == props.id )[0]
        setNewL(obj)
        setTitle(obj.title)
        setDescription(obj.description)
        setSource(obj.source)
    }, [props.id])

    return (
        <div className="modal-update" style={{display: "none"}} ref={modalRef}>
            <div className="modal-update-container">
                <h1 className="modal-update-header">Update new</h1>
                <Input
                style={{width: "100%", marginBottom:"15px"}}
                placeholder={title}
                ref={titleRef}></Input>
                <Input
                style={{width: "100%", marginBottom:"15px"}}
                placeholder={description}
                ref={descriptionRef}></Input>
                <Input
                style={{width: "100%", marginBottom:"15px"}}
                placeholder={source}
                ref={sourceRef}></Input>
                <Button
                variant="outlined"
                onClick={updateNew}>Update</Button>
                <svg onClick={close} className="modal-exit" xmlns="http://www.w3.org/2000/svg" version="1.1" id="cross-15" width="15px" height="15px" viewBox="0 0 15 15">
                    <path d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1&#10;&#9;c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1&#10;&#9;c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1&#10;&#9;c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1&#10;&#9;C2.2404,1.0029,2.4701,1.0998,2.64,1.27z"/>
                </svg>
            </div>
        </div>
    )
}

export default ModalUpdate