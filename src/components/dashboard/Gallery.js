import React, { Component } from 'react'
import PicUpload from './PicUpload';
import firebase from 'firebase/app';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }

    }


    render() {
        const storage = firebase.storage();
        const storageRef = storage.ref();
        // Create a reference under which you want to list
        var listRef = storageRef.child('images/');
        const data = [];
        const images1=[];
        // Find all the prefixes and items.
        listRef.listAll().then((res) => {
            res.items.forEach((itemRef) => {
                // All the items under listRef.
                
                // images.push(itemRef)
                itemRef.getDownloadURL().then((url) => {
                    data.push(url.toString())
                    
                })

                console.log(data)

                data.map(el=>{
                    images1.push(el)
                })

                console.log(images1)
                
            });
            
        }).catch(function (error) {
            // Uh-oh, an error occurred!
            alert('OOps, error occured :' ,error)
        });  
        return (
            <div className="container">

                <div className="container m-4">
                    <div className="container">
                        <ul>
                            
                            {data ? data.map(url => {
                                return (<li>
                                    <img src={url} alt="firebaseStorageImage" height='100' width='100'/>
                                </li>)
                                
                            })
                                : null}


                        </ul>


                    </div>



                    <div className="section">
                        <PicUpload />
                    </div>

                </div>




            </div>
        )
    }
}

export default Gallery
