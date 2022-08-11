import { data } from "./render-data.js";


export class collectionRender extends HTMLElement{
    async connectedCallback(){
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        // await this.renderData();
        

        requestAnimationFrame(() =>{
            const template = this.querySelector("#listData");

            const fragment =  document.createDocumentFragment();
            for(let obj of data){
                const instance = template.content.cloneNode(true);
                instance.querySelector("[data-id='firstName']").append(obj.firstName);
                instance.querySelector("[data-id='lastName']").append(obj.lastName);
                instance.querySelector("[data-id='age']").append(obj.age);
                // instance.append(obj.lastName);
                // instance.append(obj.age);

                fragment.appendChild(instance);

                
            }
            this.appendChild(fragment);

            const unorderedList =  document.querySelector("#displayList");
            unorderedList.appendChild(fragment);
        })

        
    }




    disconnectedCallback(){
    }

    // async renderData(){
    //     const template = this.querySelector("#listData");

    //     const fragment =  document.createDocumentFragment();
    //     for(let obj of data){
    //         const instance = template.content.cloneNode(true);

    //         instance.querySelector("[data-id = 'firstName']").textContent = obj.firstName;
    //         instance.querySelector("[data-id = 'lastName']").textContent = obj.lastName;
    //         instance.querySelector("[data-id = 'age']").textContent = obj.age;
            
    //         fragment.appendChild(instance);
    //     }

    //         const unorderedList =  document.querySelector("#displayList");
    //         unorderedList.appendChild(fragment);
    //     }
    }


customElements.define("collection-render", collectionRender);