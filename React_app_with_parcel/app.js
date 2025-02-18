
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement('h1',{key:"head1"},"React App");
const heading2 = React.createElement('h2',{key:"head2"},"react app using parcel bundler");
const br = React.createElement('br');
const conatiner = React.createElement('div',{id:'container'},[heading1,br,heading2]);
const rootElement = document.getElementById('root');
let root = ReactDOM.createRoot(rootElement);
root.render(conatiner);

