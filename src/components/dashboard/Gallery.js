import React from 'react'

function Gallery(props) {
    const images=props.images
    return (
        <div>
            {/* Remove the below comment section once you get images from firebase storage */}
            {/* {images.map(el=>{
                return (
                    el
                )
            })} */}
            <pre>
            IMAGE
            IMAGE
            IMAGE
            IMAGE
            </pre>
        </div>
    )
}

export default Gallery
