import TIMER_CONFIG from '../../constants/const-timer-config';
import { TItem } from '../../types/types';
import timeFormatter from '../../utils/timeFormatter';
import CardBanner from '../cardBanner/cardBanner';
import CardHint from '../cardHint/cardHint';
import CardList from '../cardList/cardList';
import CardSubBanner from '../cardSubBanner/cardSubBanner';
import CardTimer from '../cardTimer/cardTimer';
import CardTitleWrapper from '../cardTitleWrapper/cardTitleWrapper';

import './cardItem.css';

export default class CardItem {
    itemData: TItem;

    cardTimer = new CardTimer(timeFormatter(TIMER_CONFIG.seconds));

    cardBanner;

    hintInstance = new CardHint();

    constructor(itemData: TItem) {
        this.itemData = itemData;
        this.cardBanner = new CardBanner(this.itemData);
    }

    timerController() {
        let secondsLeft = TIMER_CONFIG.seconds;

        const timerId = setInterval(() => {
            secondsLeft -= 1;
            this.cardTimer.timeUpdate(timeFormatter(secondsLeft));

            if (secondsLeft === 0) {
                clearInterval(timerId);
                this.cardBanner.buttonDisabling();
            }
        }, 1000);
    }

    render() {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = `card card-${this.itemData.id}`;

        const itemWrapper = document.createElement('div');
        itemWrapper.className = `card__wrapper card-${this.itemData.id}__wrapper`;

        const bannersWrapper = document.createElement('div');
        bannersWrapper.className = `card__banner-wrapper card-${this.itemData.id}__banner-wrapper`;

        bannersWrapper.append(this.cardBanner.render());
        if (this.itemData.isSubBanner)
            bannersWrapper.append(
                new CardSubBanner(this.itemData, this.hintInstance.renderHintBtn()).render(),
                this.hintInstance.renderHintMsg()
            );

        if (this.itemData.isTimer) {
            this.timerController();
            itemWrapper.appendChild(this.cardTimer.render());
        }

        itemWrapper.append(
            new CardTitleWrapper(this.itemData).render(),
            bannersWrapper,
            new CardList(this.itemData).render()
        );

        cardWrapper.append(itemWrapper);
        return cardWrapper;
    }
}
