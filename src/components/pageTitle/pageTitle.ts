import TITLE_CONTENT from '../../constants/const-title-content';

export default class PageTitle {
    render() {
        const titleWrapper = document.createElement('div');

        TITLE_CONTENT.forEach((itemData) => {
            const item = document.createElement(itemData.tag);
            item.textContent = itemData.textContent;

            titleWrapper.append(item);
        });

        return titleWrapper;
    }
}
