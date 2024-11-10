import MAIN_CONTENT from '../../constants/const-main-content';
import PageTitle from '../pageTitle/pageTitle';
import CardItem from '../cardItem/cardItem';

import './app.sass';

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
