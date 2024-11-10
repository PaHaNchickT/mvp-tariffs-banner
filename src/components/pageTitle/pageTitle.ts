import TITLE_CONTENT from '../../constants/const-title-content';

import './pageTitle-general.sass';
import './pageTitle-resp-1440.sass';
import './pageTitle-resp-1024.sass';
import './pageTitle-resp-744.sass';

export default class PageTitle {
    render() {
        const titleWrapper = document.createElement('div');
        titleWrapper.className = 'main-title';

        TITLE_CONTENT.forEach((itemData) => {
            const item = document.createElement(itemData.tag);
            item.textContent = itemData.textContent;
            item.className = itemData.className;

            titleWrapper.append(item);
        });

        return titleWrapper;
    }
}
