import GENERAL_IMG_PATH from '../../constants/const-img-path';
import TEXT_CONTENT from '../../constants/const-text-content';
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
        this.hintMsg.textContent = TEXT_CONTENT.hintMsg;

        return this.hintMsg;
    }

    renderHintBtn() {
        this.hintBtn.className = 'card_sub-banner__hint';

        const hint = new Image(0, 0);
        hint.alt = 'hint-button-image';
        hint.src = GENERAL_IMG_PATH.hintImg;

        this.hintBtn.append(hint);

        return this.hintBtn;
    }
}
