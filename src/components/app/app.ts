import MAIN_CONTENT from '../../constants/const-main-content';
import PageTitle from '../pageTitle/pageTitle';
import TariffItem from '../tariffItem/tariffItem';

export default class App {
    start() {
        const itemsWrapper = document.createElement('section');

        MAIN_CONTENT.forEach((item) => {
            itemsWrapper.appendChild(new TariffItem(item).render());
        });

        const main = document.createElement('main');
        main.append(new PageTitle().render(), itemsWrapper);

        document.body.append(main);
    }
}
