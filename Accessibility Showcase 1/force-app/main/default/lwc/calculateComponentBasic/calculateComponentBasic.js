import { LightningElement } from 'lwc';

import CALC_ICON from "@salesforce/resourceUrl/Calc_Icon";

export default class CalculateComponentBasic extends LightningElement {

    calculatorIconUrl = CALC_ICON + ".jpg";

    valueFirst = 0;
    valueSecond = 0;
    calculationResultLabel;

    handleFirstInputChange(event) {

        this.valueFirst = event.target.value;
    }

    handleSecondInputChange(event) {

        this.valueSecond = event.target.value;
    }

    handleCalculateClick(event) {
        this.calculationResultLabel = this.valueFirst * this.valueSecond;
    }
}