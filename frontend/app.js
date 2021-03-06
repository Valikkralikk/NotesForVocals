import Header from './view/header.js';
import CompositionsList from './view/CompositionsList.js';
import Compositors from './view/Compositors.js';
import Footer from './view/Footer.js';

const header = document.getElementById('content-header'),
      content = document.getElementById('content-body'),
      footer = document.getElementById('content-footer'),
      footerHTML = new Footer(),
      headerHTML = new Header();

function setContent(hash){
    switch (hash) {
        case 'compositions':
            return new CompositionsList();
            break;
        
        default:
            return new Compositors();
    }
}


function router(){
    let contentHTML = setContent(location.hash.split('/')[1]);

    headerHTML.render().then(html=>{
        header.innerHTML = html;
        headerHTML.getData().then(data=>headerHTML.afterRender(data).then(res=>res()));
    });
    footerHTML.render().then(html=>footer.innerHTML = html);

    contentHTML.render().then(html=>{
        content.innerHTML = html;
        contentHTML.afterRender();
    });
}



window.addEventListener('load',router);
window.addEventListener('hashchange',router);