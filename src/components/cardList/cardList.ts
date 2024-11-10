import { TItem } from '../../types/types';

import './card-list-general.sass';
import './card-list-resp.sass';

export default class CardList {
    itemData: TItem;

    partnerLi = document.createElement('li');

    constructor(itemData: TItem) {
        this.itemData = itemData;

        window.addEventListener('resize', this.textContentUpdater.bind(this));
    }

    textContentUpdater() {
        const windowWidth = window.innerWidth;

        if (windowWidth < 1440 && windowWidth >= 744) {
            this.partnerLi.textContent = 'Варианты рассрочки';
        } else {
            [this.partnerLi.textContent] = this.itemData.ul;
        }
    }

    render() {
        const ul = document.createElement('ul');
        ul.className = `card__list card-${this.itemData.id}__list`;

        this.itemData.ul.forEach((listItem, itemIndex) => {
            const li = document.createElement('li');

            li.textContent = listItem;
            if (!itemIndex && this.itemData.id === 2) {
                this.partnerLi = li;
                this.textContentUpdater();
            }

            ul.append(li);
        });

        return ul;
    }
}
