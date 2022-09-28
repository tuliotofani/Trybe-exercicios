const wakeup = () => 'Acordando!!';

const cofeBreak = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!'

const doingThings = (things) => {
    const result = things();
    console.log(result);
}
// doingThings(wakeup);
// doingThings(cofeBreak);