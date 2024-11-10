import MAIN_CONTENT from '../../constants/const-main-content';
import PageTitle from '../page-title/page-title';
import CardItem from '../card-item/card-item';

import './app-general.sass';
import './app-resp.sass';

export default class App {
    start() {
        const itemsWrapper = document.createElement('section');

        MAIN_CONTENT.forEach((item) => {
            itemsWrapper.appendChild(new CardItem(item).render());
        });

        const main = document.createElement('main');
        main.append(new PageTitle().render(), itemsWrapper);

        document.body.append(main);
    }
}
