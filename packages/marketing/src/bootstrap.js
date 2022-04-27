import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//mount the application to start app
const mount = (el) =>{
    ReactDOM.render(
        <App />,
        el
    )
}
//if we are in development or isolation
//call mount immediately
if(process.env.NODE_ENV === 'development' ){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot);
    }
}
//if we are in the container
//export the function
export { mount }