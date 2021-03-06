let data = require ('../data/dataBase.json');
data.sort((a,b)=>a.fullName>b.fullName&&1||-1);

class Compositiors{
    createCardsList(){
        const list = data.map(item=>{
            return`
            <div class="content__item">
                <a href='#/compositions/${item.name}'>
                <img src="${item.image}" alt="${item.name}" class="image">
                <p class="title">${item.fullName}</p>
                </a>
            </div>`
        });
        return list.join('')
    }

    render(){
        return new Promise(resolve=>{
            resolve(`
                <div class="grid">
                    ${this.createCardsList()}
                </div>
            `)
        })
    }

    afterRender(){
        
    }
}

module.exports = Compositiors;