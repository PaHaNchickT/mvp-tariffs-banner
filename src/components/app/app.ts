import MAIN_CONTENT from '../../constants/const-main-content';
import PageTitle from '../pageTitle/pageTitle';
import CardItem from '../cardItem/cardItem';

import './app-general.sass';
import './app-resp-1440.sass';
import './app-resp-1024.sass';
import './app-resp-744.sass';

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
