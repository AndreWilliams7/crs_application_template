export default class Binding extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();
    }

    showResult(){
        this._element.querySelector("#fullName").textContent = this.getProperty("firstName") + " " + this.getProperty("lastName"); 
    }

    updateInputValue(){
        this._element.querySelector(".inputResult").textContent = "The value that changed is :" + " " + this._element.querySelector(".inputValue").value; 
    }
}