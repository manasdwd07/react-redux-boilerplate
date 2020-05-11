import iphone from '../../assets/images/iphone.webp';
import oneplus7 from '../../assets/images/oneplus7pro.jpg';


const initialState={
    projects:[
        {id:1,title:'iphonex',image:"/static/media/iphone.2678d203.webp",content:'blah blah blah'},
        {id:1,title:'iphonex',image:"/static/media/iphone.2678d203.webp",content:'blah blah blah'},
        {id:1,title:'oneplus7pro',image:"/static/media/oneplus7pro.2faef4b2.jpg",content:'blah blah blah'},
        {id:1,title:'oneplus7pro',image:"/static/media/oneplus7pro.2faef4b2.jpg",content:'blah blah blah'}
    ]
}

const projectReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT': 
            console.log('Created project',action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Create project error',action.err)
            return state;
        default:return state

    }
    
}

export default projectReducer