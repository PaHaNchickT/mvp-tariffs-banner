import { TItem } from '../../types/types';

import './cardSubBanner.css';

export default class CardSubBanner {
    itemData: TItem;

    constructor(itemData: TItem) {
        this.itemData = itemData;
    }

    render() {
        const subBanner = document.createElement('div');
        subBanner.className = `card__sub-banner card-${this.itemData.id}__sub-banner`;

        const cardImg = document.createElement('div');
        cardImg.className = `card_sub-banner__card-img card_sub-banner__card-${this.itemData.id}-img`;

        const title = document.createElement('p');
        title.textContent = this.itemData.subBanner!.title;
        title.className = 'card_sub-banner__title';

        const hint = new Image();
        hint.src =
            'https://raw.githubusercontent.com/PaHaNchickT/mvp-tariffs-banner/refs/heads/develop/src/public/icons/hint-icon.svg';
        hint.className = 'card_sub-banner__hint';

        subBanner.append(cardImg, title, hint);

        return subBanner;
    }
}
