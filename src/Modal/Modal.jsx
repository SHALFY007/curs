import "./Modal.css"
import { useRef, useState } from "react"
import { Input, Button } from '@mui/material';
import { useDispatch } from "react-redux"

function Modal() {

    const modalRef = useRef(null)
    const imgRef = useRef(null)
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const sourceRef = useRef(null)
    const textRef = useRef(null)
    const dispatch = useDispatch()
    const [id, setId] = useState(5)

    const close = () => {
        modalRef.current.style.display = 'none'
    }

    const createNew = () => {
        dispatch({type:"ADD_NEWS", payload: {
            id: id,
            title: titleRef.current.querySelector('input').value,
            description: descriptionRef.current.querySelector('input').value,
            source: sourceRef.current.querySelector('input').value,
            img: imgRef.current.querySelector('input').value,
            date: new Date().toDateString()
        }})
        setId(id+1)
    }

    return (
        <div className="modal" ref={modalRef} style={{display: 'none'}}>
            <div className="modal-container">
                <h1 className="modal-header">Create new</h1>
                <Input
                style={{width: "100%", marginBottom:"5px"}}
                placeholder="Image(URL)"
                ref={imgRef}></Input>
                <Input
                style={{width: "100%", marginBottom:"5px"}}
                placeholder="Title"
                ref={titleRef}></Input>
                <Input
                style={{width: "100%", marginBottom:"5px"}}
                placeholder="Description"
                ref={descriptionRef}></Input>
                <Input
                style={{width: "100%", marginBottom:"5px"}}
                placeholder="Source"
                ref={sourceRef}></Input>
                <Input
                style={{width: "100%", marginBottom:"5px"}}
                placeholder="Text"
                ref={textRef}></Input>
                <Button
                variant="outlined"
                onClick={createNew}>Add</Button>
            <svg onClick={close} className="modal-exit" xmlns="http://www.w3.org/2000/svg" version="1.1" id="cross-15" width="15px" height="15px" viewBox="0 0 15 15">
                <path d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1&#10;&#9;c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1&#10;&#9;c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1&#10;&#9;c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1&#10;&#9;C2.2404,1.0029,2.4701,1.0998,2.64,1.27z"/>
            </svg>
            </div>
        </div>
    )
}

export default Modal