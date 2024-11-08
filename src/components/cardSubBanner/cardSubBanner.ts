import { TItem } from '../../types/types';

export default class CardSubBanner {
    itemData: TItem;

    constructor(itemData: TItem) {
        this.itemData = itemData;
    }

    render() {
        const subBanner = document.createElement('div');

        const title = document.createElement('p');
        title.textContent = this.itemData.subBanner!.title;

        const button = document.createElement('button');
        button.textContent = '?';
        button.onclick = () => console.log('???');

        subBanner.append(title, button);

        return subBanner;
    }
}
