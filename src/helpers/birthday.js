import { reduceNumber } from './number';

export const processBirthday = (birthday) => {
    let splitted = birthday.split('-');
    return {
        original: birthday,
        numStr: birthday.replace(/\D/g, ''),
        day: parseInt(splitted[0]),
        month: parseInt(splitted[1]),
        year: parseInt(splitted[2]),
        dayNumber: reduceNumber(splitted[0]),
    };
};
