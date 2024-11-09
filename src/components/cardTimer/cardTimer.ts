import './cardTimer.css';

export default class CardTimer {
    timer = document.createElement('div');

    constructor(startTime: string) {
        this.timer.textContent = startTime;
        this.timer.className = 'card__timer';
    }

    timeUpdate(currentTime: string) {
        this.timer.textContent = currentTime;
    }

    render() {
        return this.timer;
    }
}
