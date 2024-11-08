import { TItem } from '../../types/types';

export default class CardItem {
    itemData: TItem;

    constructor(itemData: TItem) {
        this.itemData = itemData;
    }

    createTitleWrapper() {
        const titleWrapper = document.createElement('div');

        const title = document.createElement(this.itemData.titleWrapper.title.tag);
        title.textContent = this.itemData.titleWrapper.title.textContent;

        const subTitle = document.createElement('p');
        subTitle.textContent = this.itemData.titleWrapper.subTitle;

        titleWrapper.append(new Image(), title, subTitle);

        return titleWrapper;
    }

    createBanner() {
        const banner = document.createElement('div');

        const title = document.createElement(this.itemData.banner.title.tag);
        title.textContent = this.itemData.banner.title.textContent;

        const subTitle = document.createElement('p');
        subTitle.textContent = this.itemData.banner.subTitle;

        const button = document.createElement('button');
        button.textContent = this.itemData.banner.button;
        button.onclick = () => console.log(this.itemData.titleWrapper.title.textContent);

        banner.append(title, subTitle, button);

        return banner;
    }

    createSubBanner() {
        const subBanner = document.createElement('div');

        const title = document.createElement('p');
        title.textContent = this.itemData.subBanner!.title;

        const button = document.createElement('button');
        button.textContent = '?';
        button.onclick = () => console.log('???');

        subBanner.append(title, button);

        return subBanner;
    }

    createList() {
        const ul = document.createElement('ul');

        this.itemData.ul.forEach((listItem) => {
            const li = document.createElement('li');
            li.textContent = listItem;

            ul.append(li);
        });

        return ul;
    }

    render() {
        const cardWrapper = document.createElement('div');

        cardWrapper.append(this.createTitleWrapper(), this.createBanner());
        if (this.itemData.isSubBanner) cardWrapper.append(this.createSubBanner());
        cardWrapper.append(this.createList());

        return cardWrapper;
    }
}
