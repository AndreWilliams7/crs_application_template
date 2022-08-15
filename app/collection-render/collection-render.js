import { data } from "./render-data.js";


export class collectionRender extends HTMLElement{
    async connectedCallback() {
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());        

        requestAnimationFrame(() =>{
            const template = this.querySelector("#listData");
            const fragment =  document.createDocumentFragment();

            for(let obj of data){
                const instance = template.content.cloneNode(true);
                instance.querySelector("[data-id='firstName']").append(obj.firstName);
                instance.querySelector("[data-id='lastName']").append(obj.lastName);
                instance.querySelector("[data-id='age']").append(obj.age);

                fragment.appendChild(instance);
            }

            this.appendChild(fragment);

            const unorderedList =  document.querySelector("#displayList");
            unorderedList.appendChild(fragment);
        })

    }

    disconnectedCallback() {

    }

}


customElements.define("collection-render", collectionRender);