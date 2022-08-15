import { companyData } from "./company-data.js";

export default class InflationManager extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();
        const template = this._element.querySelector('#compData');
        crsbinding.inflationManager.register('company-data', template);
    }

    disconnectedCallback() {
        crsbinding.inflationManager.unregister('company-data');
    }

    displayData () {
        const fragment = crsbinding.inflationManager.get('company-data', companyData);

        this._element.querySelector('#employeeList').appendChild(fragment);
    }

}