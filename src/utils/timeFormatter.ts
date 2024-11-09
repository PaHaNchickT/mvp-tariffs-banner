const timeFormatter = (secondsLeft: number) => {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor(secondsLeft / 60) - hours * 60;
    const seconds = secondsLeft - minutes * 60 - hours * 3600;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default timeFormatter;
