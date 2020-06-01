import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from '../../config/firebaseConfig';

const PicUpload = (props) => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [images, setImages] = useState([])

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload =async () => {
        // const images=[]
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            }
            ,
            () => {
                
                props.renderParent();
                console.log('renderParent ke neeche')
            }
        );

        await props.renderParent();
        
        
    };

    

    return (
        <div className="container section">
            <progress className="center-align" value={progress} max="100" />
            <br />
            <br />
            <input type="file" onChange={handleChange} />
            <button onClick={()=>handleUpload()}>Upload</button>
            <br />
            <br />
            
            {/* <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" height="100" width='100'/> */}
        </div>
    );
};

export default PicUpload