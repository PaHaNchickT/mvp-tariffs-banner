import { TItem } from '../../types/types';
import CardBanner from '../cardBanner/cardBanner';
import CardList from '../cardList/cardList';
import CardSubBanner from '../cardSubBanner/cardSubBanner';
import CardTitleWrapper from '../cardTitleWrapper/cardTitleWrapper';

export default class CardItem {
    itemData: TItem;

    constructor(itemData: TItem) {
        this.itemData = itemData;
    }

    render() {
        const cardWrapper = document.createElement('div');

        cardWrapper.append(new CardTitleWrapper(this.itemData).render(), new CardBanner(this.itemData).render());
        if (this.itemData.isSubBanner) cardWrapper.append(new CardSubBanner(this.itemData).render());
        cardWrapper.append(new CardList(this.itemData).render());

        return cardWrapper;
    }
}
