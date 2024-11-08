import { TItem } from '../../types/types';

export default class CardTitleWrapper {
    itemData: TItem;

    constructor(itemData: TItem) {
        this.itemData = itemData;
    }

    render() {
        const titleWrapper = document.createElement('div');
        titleWrapper.className = `card__title-wrapper card-${this.itemData.id}__title-wrapper`;

        const icon = new Image();
        icon.src = this.itemData.titleWrapper.img;

        const title = document.createElement(this.itemData.titleWrapper.title.tag);
        title.textContent = this.itemData.titleWrapper.title.textContent;

        const subTitle = document.createElement('p');
        subTitle.textContent = this.itemData.titleWrapper.subTitle;

        titleWrapper.append(icon, title, subTitle);

        return titleWrapper;
    }
}
