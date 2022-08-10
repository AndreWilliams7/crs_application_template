import { data } from './app/collection-render/render-data.js';


export class collectionRender extends HTMLElement{
    async connectedCallback(){
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        this.setAttribute("role", "list");
        this.data = data;

        requestAnimationFrame(() =>{
            const template = this.querySelector("#listData");

            const fragment =  document.createDocumentFragment();
            for(let i=0; i<this.data.length; i++){
                const instance = template.textContent.cloneNode(true);
                fragment.appendChild(instance);
            }
            this.appendChild(fragment);
        })
    }

    preLoad(){
        this.setProperty("staticHeader", "Static Data Collection");
    }



    disconnectedCallback(){
    }

    renderData(){
        this._element.querySelector("#listData").textContent = this.data;
    }
}

customElements.define("collection-render", collectionRender);