import GENERAL_IMG_PATH from '../../constants/const-img-path';
import TEXT_CONTENT from '../../constants/const-text-content';
import './card-hint-general.sass';
import './card-hint-resp.sass';

export default class CardHint {
    hintBtn = document.createElement('button');

    hintMsg = document.createElement('div');

    constructor() {
        this.hintBtn.onclick = () => {
            const isMsgVis = this.hintMsg.classList.contains('hint-msg-vis');
            this.hintMsg.ariaHidden = `${isMsgVis}`;
            this.hintBtn.ariaPressed = `${!isMsgVis}`;
            this.hintBtn.ariaExpanded = `${!isMsgVis}`;

            if (isMsgVis) {
                this.hintMsg.classList.remove('hint-msg-vis');
            } else {
                this.hintMsg.classList.add('hint-msg-vis');
            }
        };
        this.hintBtn.onblur = () => {
            this.hintMsg.classList.remove('hint-msg-vis');

            this.hintMsg.ariaHidden = 'true';
            this.hintBtn.ariaPressed = 'false';
            this.hintBtn.ariaExpanded = 'false';
        };
    }

    renderHintMsg() {
        this.hintMsg.className = 'hint-msg';
        this.hintMsg.textContent = TEXT_CONTENT.hintMsg;
        this.hintMsg.id = 'message';
        this.hintMsg.role = 'dialog';
        this.hintMsg.ariaHidden = 'true';

        return this.hintMsg;
    }

    renderHintBtn() {
        this.hintBtn.className = 'card_sub-banner__hint';
        this.hintBtn.role = TEXT_CONTENT.hintBtnRole;
        this.hintBtn.ariaLabel = TEXT_CONTENT.hintBtnLabel;
        this.hintBtn.ariaHasPopup = 'dialog';
        this.hintBtn.ariaPressed = 'false';
        this.hintBtn.ariaExpanded = 'false';
        this.hintBtn.setAttribute('aria-controls', 'message');

        const hint = new Image(0, 0);
        hint.alt = 'hint-button-image';
        hint.src = GENERAL_IMG_PATH.hintImg;

        this.hintBtn.append(hint);

        return this.hintBtn;
    }
}
