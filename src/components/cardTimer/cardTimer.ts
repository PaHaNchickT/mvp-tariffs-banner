import './cardTimer.css';

export default class CardTimer {
    render() {
        const timer = document.createElement('div');
        timer.textContent = '22:36:10';
        timer.className = 'card__timer';

        return timer;
    }
}
