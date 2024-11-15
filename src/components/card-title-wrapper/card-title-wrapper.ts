import { TItem } from '../../types/types';

import './card-title-wrapper-general.sass';
import './card-title-wrapper-resp.sass';

export default class CardTitleWrapper {
    itemData: TItem;

    subTitle = document.createElement('p');

    constructor(itemData: TItem) {
        this.itemData = itemData;

        window.addEventListener('resize', this.textContentUpdater.bind(this));
    }

    textContentUpdater() {
        const windowWidth = window.innerWidth;

        if (windowWidth < 1440 && windowWidth >= 1024) {
            this.subTitle.textContent = this.itemData.titleWrapper.subTitleAlt;
        } else {
            this.subTitle.textContent = this.itemData.titleWrapper.subTitle;
        }
    }

    render() {
        const titleWrapper = document.createElement('div');
        titleWrapper.className = `card__title-wrapper card-${this.itemData.id}__title-wrapper`;

        const icon = new Image(0, 0);
        icon.alt = `tariff-icon-0${this.itemData.id}`;
        icon.src = this.itemData.titleWrapper.img;

        const textWrapper = document.createElement('div');
        textWrapper.className = 'card__title-wrapper__text-wrapper';

        const title = document.createElement(this.itemData.titleWrapper.title.tag);
        title.textContent = this.itemData.titleWrapper.title.textContent;
        title.ariaLabel = this.itemData.titleWrapper.title.textContent;

        this.textContentUpdater();

        textWrapper.append(title, this.subTitle);
        titleWrapper.append(icon, textWrapper);

        return titleWrapper;
    }
}
