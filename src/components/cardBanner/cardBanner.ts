import { TItem } from '../../types/types';

import './cardBanner.css';
import './cardBannerWrapper.css';

export default class CardBanner {
    itemData: TItem;

    subTitle = document.createElement('p');

    choiceButton = document.createElement('button');

    constructor(itemData: TItem) {
        this.itemData = itemData;

        if (itemData.id === 2) window.addEventListener('resize', this.textContentUpdater.bind(this));
    }

    textContentUpdater() {
        const windowWidth = window.innerWidth;

        if (windowWidth < 1440 && windowWidth >= 744) {
            this.subTitle.textContent = 'Единоразовый платеж';
        } else {
            this.subTitle.textContent = this.itemData.banner.subTitle;
        }
    }

    buttonDisabling() {
        this.choiceButton.disabled = true;
    }

    render() {
        const banner = document.createElement('div');
        banner.className = `card__banner card-${this.itemData.id}__banner`;

        const textWrapper = document.createElement('div');
        textWrapper.className = 'card__banner__text-wrapper';

        const title = document.createElement(this.itemData.banner.title.tag);
        title.textContent = this.itemData.banner.title.textContent;

        this.subTitle.textContent = this.itemData.banner.subTitle;
        if (this.itemData.id === 2) this.textContentUpdater();

        this.choiceButton.textContent = this.itemData.banner.button;
        this.choiceButton.onclick = () => console.log(this.itemData.titleWrapper.title.textContent);

        textWrapper.append(title, this.subTitle);
        banner.append(textWrapper, this.choiceButton);

        return banner;
    }
}
