export default class BindDirection extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();
    }


    // Used for the Once-Off binding
    preLoad(){
        this.setProperty("preTextFirstname", "Enter your FIRST name here");
        this.setProperty("preTextLastname", "Enter your LAST name here");
        this.setProperty('headerText', "This is the headerText");
    }

    // Used for the Two-Way Binding
    showResult(){
        this._element.querySelector(".cellNumber").textContent = "Your contact number is: " + " " + this.getProperty("cellNumber");
    }
    }