import { TItem } from '../../types/types';
import CardBanner from '../cardBanner/cardBanner';
import CardList from '../cardList/cardList';
import CardSubBanner from '../cardSubBanner/cardSubBanner';
import CardTitleWrapper from '../cardTitleWrapper/cardTitleWrapper';

import './cardItem.css';

export default class CardItem {
    itemData: TItem;

    constructor(itemData: TItem) {
        this.itemData = itemData;
    }

    render() {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = `card card-${this.itemData.id}`;

        const itemWrapper = document.createElement('div');
        itemWrapper.className = `card__wrapper card-${this.itemData.id}__wrapper`;

        itemWrapper.append(new CardTitleWrapper(this.itemData).render(), new CardBanner(this.itemData).render());
        if (this.itemData.isSubBanner) itemWrapper.append(new CardSubBanner(this.itemData).render());
        itemWrapper.append(new CardList(this.itemData).render());

        cardWrapper.append(itemWrapper);
        return cardWrapper;
    }
}
