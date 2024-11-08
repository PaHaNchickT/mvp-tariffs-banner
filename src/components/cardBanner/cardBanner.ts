import { TItem } from '../../types/types';

import './cardBanner.css';
import './cardBannerWrapper.css';

export default class CardBanner {
    itemData: TItem;

    constructor(itemData: TItem) {
        this.itemData = itemData;
    }

    render() {
        const banner = document.createElement('div');
        banner.className = `card__banner card-${this.itemData.id}__banner`;

        const textWrapper = document.createElement('div');
        textWrapper.className = 'card__banner__text-wrapper';

        const title = document.createElement(this.itemData.banner.title.tag);
        title.textContent = this.itemData.banner.title.textContent;

        const subTitle = document.createElement('p');
        subTitle.textContent = this.itemData.banner.subTitle;

        const button = document.createElement('button');
        button.textContent = this.itemData.banner.button;
        button.onclick = () => console.log(this.itemData.titleWrapper.title.textContent);

        textWrapper.append(title, subTitle);
        banner.append(textWrapper, button);

        return banner;
    }
}
