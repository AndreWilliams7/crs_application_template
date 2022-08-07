export default class FormBind extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();
        // this.colorDiv = this._element.querySelector('.block');
        // this.colorHandler = this.colorChange.bind(this);
        // this.addEventListener('click', this.colorHandler);
    }

    requestAnimationFrame(){
        this.colorDiv = this._element.querySelector('.block');
        this.colorHandler = this.colorChange.bind(this);
        this.addEventListener('click', this.colorHandler);
    }

    preLoad(){
        this.setProperty("firstName", "Andre");
        this.setProperty("lastName", "Williams");
        this.setProperty("ageValue", " 0");
    }

    firstNameChanged(...args){
        console.log(args)
    }

    lastNameChanged(...args){
        console.log(args)
    }

    async show(){
        alert("This is  " + this.getProperty("firstName") + " " + this.getProperty("lastName")); 
    }

    async colorChange(){
        this._element.querySelector(".block").style.backgroundColor = "#f70202"
    }

    // async displayRangeValue(event){
    //     this.age = this._element.querySelector('.slider').value;
    //     this._element.querySelector("#result").textContent = this.age;
    //     console.log(this.age);

    
    // }
    // async ageValueChanged(event){
    //     event.target.textContent
    //     this._element.querySelector("#result").textContent = this.age;
    //     console.log(this.age);

    // }

    

    disconnectedCallback() {
        this.removeEventListener('click', this.colorHandler);
        this.colorHandler = null;
    }
}