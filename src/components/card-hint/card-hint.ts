import './card-hint-general.sass';
import './card-hint-resp.sass';

export default class CardHint {
    hintBtn = document.createElement('button');

    hintMsg = document.createElement('div');

    constructor() {
        this.hintBtn.onclick = () => {
            if (this.hintMsg.classList.contains('hint-msg-vis')) {
                this.hintMsg.classList.remove('hint-msg-vis');
            } else {
                this.hintMsg.classList.add('hint-msg-vis');
            }
        };
        this.hintBtn.onblur = () => this.hintMsg.classList.remove('hint-msg-vis');
    }

    renderHintMsg() {
        this.hintMsg.className = 'hint-msg';
        this.hintMsg.textContent =
            'Для Вашего спокойствия мы гарантируем возврат оплаты в случае отсутствия списания долгов после процедуры.';

        return this.hintMsg;
    }

    renderHintBtn() {
        this.hintBtn.className = 'card_sub-banner__hint';

        const hint = new Image(0, 0);
        hint.alt = 'hint-button-image';
        hint.src =
            'https://raw.githubusercontent.com/PaHaNchickT/mvp-tariffs-banner/refs/heads/develop/src/public/icons/hint-icon.svg';

        this.hintBtn.append(hint);

        return this.hintBtn;
    }
}
