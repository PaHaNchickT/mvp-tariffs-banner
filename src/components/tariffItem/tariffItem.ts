export default class TariffItem {
    itemData: string;

    constructor(itemData: string) {
        this.itemData = itemData;
    }

    render() {
        const test = document.createTextNode(this.itemData);

        return test;
    }
}
