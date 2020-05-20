import React, { Component } from 'react'
import PicUpload from './PicUpload';
import firebase from 'firebase/app';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: {}
        }

    }


    render() {
        const storage = firebase.storage();
        const storageRef = storage.ref();
        // Create a reference under which you want to list
        var listRef = storageRef.child('images/');
        const data = []
        // Find all the prefixes and items.
        listRef.listAll().then((res) => {
            res.prefixes.forEach(function (folderRef) {
                // All the prefixes under listRef.
                // You may call listAll() recursively on them.
                folderRef.getDownloadURL().then((url=>{
                    console.log('folderRef',folderRef,url)
                }))
            });
            res.items.forEach((itemRef) => {
                // All the items under listRef.
                
                // images.push(itemRef)
                itemRef.getDownloadURL().then((url) => {
                    console.log(url)
                    data.push(url.toString())
                   
                }, console.log('urls', data))
                
            });
        }).catch(function (error) {
            // Uh-oh, an error occurred!
            alert('OOps, error occured :' ,error)
        });
        // this.setState({images:data})


        // console.log(data)
        // const datas=[data.data()]
        return (
            <div className="container">

                <div className="container m-4">
                    <div className="container">
                        <ul>
                            {console.log('render', data, typeof (data))}
                            {data.length>0 ? data.map(url => {
                                return (<li>
                                    <img src={url} alt="firebaseStorageImage" />
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
