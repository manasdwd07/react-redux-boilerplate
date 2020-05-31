import React, { Component } from 'react';
import PicUpload from './PicUpload';
import firebase from 'firebase/app';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            update: false
        }       
    }

    async componentDidMount() {
        const storage = firebase.storage();
        const storageRef = storage.ref();
        
        var listRef = storageRef.child('images/');
        const data = [];

        await listRef.listAll().then((res) => {
            res.items.forEach((itemRef) => {
                // All the items under listRef.

                // images.push(itemRef)
                itemRef.getDownloadURL().then((url) => {
                    data.push(`${url}`)
                    this.setState({ images: data })
                })
            });

        }).catch(function (error) {
            alert('OOps, error occured :', error)
        });
    }

    render() {
        return (
            <div className="container">

                <div className="container m-4">
                    <div className="container">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-title">
                                    <h5 className="center-align">Explore these below images...</h5>
                                </div>
                            </div>
                            <div className="card-content">
                                <ul>
                                    {this.state.images ? this.state.images.map(url => {
                                        return (<li className="center-align">
                                            {console.log(url)}
                                            <img src={url} alt="firebaseStorageImage" height='200' width='300' /><br /><br />
                                        </li>)
                                    })
                                        : null}
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="section card">
                        <div className="card-content">
                            <div className="card-title">
                                Upload your image now ...
                            </div>
                        </div>
                        <div className="card-content">
                            <PicUpload />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery