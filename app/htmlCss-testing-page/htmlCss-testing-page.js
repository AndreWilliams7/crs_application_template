export default class HtmlCssTesting extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        // this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        await super.connectedCallback();
        console.log("Testing");
        this.gridWindow = document.getElementById("grid-window");

        requestAnimationFrame(() => {
            this.drawGrid(3, 8);
        });
    }

    disconnectedCallback() {
        
    }

    async test() {
        console.log("Testing");
    }

    async drawGrid(rows, cols) {
        this.gridWindow.style.setProperty("--grid-rows", rows);
        this.gridWindow.style.setProperty("--grid-cols", cols);

        for(let i = 0; i < rows*cols; i++){
            let cell = document.createElement("div");
            cell.innerText = (i +1);
            this.gridWindow.appendChild(cell).className = "grid-item";
        }
    }

    
}
