import { TItem } from '../../types/types';

export default class CardList {
    itemData: TItem;

    constructor(itemData: TItem) {
        this.itemData = itemData;
    }

    render() {
        const ul = document.createElement('ul');
        ul.className = `card__list card-${this.itemData.id}__list`;

        this.itemData.ul.forEach((listItem) => {
            const li = document.createElement('li');
            li.textContent = listItem;

            ul.append(li);
        });

        return ul;
    }
}
