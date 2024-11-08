import { TItem } from '../../types/types';

export default class CardBanner {
    itemData: TItem;

    constructor(itemData: TItem) {
        this.itemData = itemData;
    }

    render() {
        const banner = document.createElement('div');

        const title = document.createElement(this.itemData.banner.title.tag);
        title.textContent = this.itemData.banner.title.textContent;

        const subTitle = document.createElement('p');
        subTitle.textContent = this.itemData.banner.subTitle;

        const button = document.createElement('button');
        button.textContent = this.itemData.banner.button;
        button.onclick = () => console.log(this.itemData.titleWrapper.title.textContent);

        banner.append(title, subTitle, button);

        return banner;
    }
}
