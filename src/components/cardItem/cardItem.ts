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

        const bannersWrapper = document.createElement('div');
        bannersWrapper.className = `card__banner-wrapper card-${this.itemData.id}__banner-wrapper`;

        bannersWrapper.append(new CardBanner(this.itemData).render());
        if (this.itemData.isSubBanner) bannersWrapper.append(new CardSubBanner(this.itemData).render());

        itemWrapper.append(
            new CardTitleWrapper(this.itemData).render(),
            bannersWrapper,
            new CardList(this.itemData).render()
        );

        cardWrapper.append(itemWrapper);
        return cardWrapper;
    }
}
