/**
 *
 * @param {string} numStr
 * @returns {number}
 */
export const getRulingNumber = (numStr) => {
    let num = reduceNumber(numStr);
    if (num <= 11 || num === 22) {
        return num;
    }

    return reduceNumber(`${num}`);
};

/**
 *
 * @param {string} numStr
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
export const reduceNumberRange = (numStr, from, to) => {
    let num = numStr;
    do {
        num = `${reduceNumber(num)}`;
    } while (num < from || num > to);
    return parseInt(num);
};

export const reduceNumber22 = (numStr) => {
    let num = numStr;
    do {
        num = `${reduceNumber(num)}`;
    } while (num < 1 || (num > 11 && num !== 22));
    return parseInt(num);
};

/**
 *
 * @param {string} numStr
 * @returns {number}
 */
export const reduceNumber = (numStr) =>
    [...numStr].reduce((acc, curr) => acc + parseInt(curr), 0);

export const formatNumber = (num) => (num === 22 ? '22/4' : `${num}`);
