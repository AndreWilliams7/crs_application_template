export default class HtmlCssTesting extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        // this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        await super.connectedCallback();
        console.log("Testing");
    }

    disconnectedCallback() {
        
    }

    async test() {
        console.log("Testing");
    }
}
