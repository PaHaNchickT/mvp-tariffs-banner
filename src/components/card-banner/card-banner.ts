import { TItem } from '../../types/types';

import './card-banner-general.sass';
import './card-banner-resp.sass';
import './card-banner-wrapper-general.sass';
import './card-banner-wrapper-resp.sass';

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
            this.subTitle.textContent = this.itemData.banner.subTitleAlt;
        } else {
            this.subTitle.textContent = this.itemData.banner.subTitle;
        }
    }

    buttonDisabling() {
        this.choiceButton.disabled = true;
        this.choiceButton.ariaDisabled = 'true';
    }

    render() {
        const banner = document.createElement('div');
        banner.className = `card__banner card-${this.itemData.id}__banner`;

        const textWrapper = document.createElement('div');
        textWrapper.className = 'card__banner__text-wrapper';

        const title = document.createElement(this.itemData.banner.title.tag);
        title.textContent = this.itemData.banner.title.textContent;
        title.ariaLabel = this.itemData.banner.title.textContent;

        this.subTitle.textContent = this.itemData.banner.subTitle;
        if (this.itemData.id === 2) this.textContentUpdater();

        this.choiceButton.textContent = this.itemData.banner.button;
        this.choiceButton.onclick = () => console.log(this.itemData.titleWrapper.title.textContent);
        this.choiceButton.role = this.itemData.banner.buttonRole;
        this.choiceButton.ariaLabel = this.itemData.banner.button;
        this.choiceButton.ariaDisabled = 'false';

        textWrapper.append(title, this.subTitle);
        banner.append(textWrapper, this.choiceButton);

        return banner;
    }
}
