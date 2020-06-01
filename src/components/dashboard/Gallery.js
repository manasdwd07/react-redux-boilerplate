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

    renderParent=async ()=>{
         this.forceUpdate();
        await this.setState({update:true})
        console.log('inside forceUpdate')
    }

    render() {
        return (
            <div className="container-fluid">

                
                        <div className="card">
                            <div className="card-content">
                                <div className="card-title">
                                    <h5 className="center-align">Welcome to gallery. Explore to see some amazing feature gadgets, selfies from our users and much more. You can upload your own image below :)</h5>
                                </div>
                            </div>
                            <div className="card-content row" >

                                
                                    {this.state.images ? this.state.images.map(url => {
                                        return (
                                            <div className="col s12 m6">
                                                <img src={url} alt="firebaseStorageImage" height='300' width='500' /> <br /><br />
                                            </div>
                                        )
                                    })
                                        : null}
                                



                            </div>
                        </div>
                    
                    <div className="section card">
                        <div className="card-content">
                            <div className="card-title">
                                Upload your image now ...
                            </div>
                        </div>
                        <div className="card-content">
                            <PicUpload renderParent={this.renderParent}/>
                        </div>

                    </div>
                {/* </div> */}
            </div>
        )
    }
}

export default Gallery