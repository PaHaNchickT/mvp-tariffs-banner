import { TItem } from '../../types/types';

import './card-sub-banner-general.sass';
import './card-sub-banner-resp.sass';

export default class CardSubBanner {
    itemData: TItem;

    hintBtn;

    constructor(itemData: TItem, hintBtn: HTMLElement) {
        this.itemData = itemData;
        this.hintBtn = hintBtn;
    }

    render() {
        const subBanner = document.createElement('div');
        subBanner.className = `card__sub-banner card-${this.itemData.id}__sub-banner`;

        const cardImg = document.createElement('div');
        cardImg.className = `card_sub-banner__card-img card_sub-banner__card-${this.itemData.id}-img`;

        const title = document.createElement('p');
        title.textContent = this.itemData.subBanner!.title;
        title.className = 'card_sub-banner__title';

        subBanner.append(cardImg, title, this.hintBtn);

        return subBanner;
    }
}
