import moment from 'moment';
import { reduceNumber, reduceNumberRange } from './number';
import _ from 'underscore';

/**
 *
 * @param {number} year Year in integer
 * @returns {number}
 */
export const getWorldYearNumber = (year) => reduceNumberRange(`${year}`, 1, 9);

/**
 *
 * @returns {number} current WYN
 */
export const getCurrentWorldYearNumber = () =>
    getWorldYearNumber(moment().get('year'));

/**
 *
 * @param {number} year
 * @param {number} birthMonth
 * @param {number} birthDay
 * @returns {number}
 */
export const getPersonalYearNumber = (year, birthMonth, birthDay) => {
    let wyn = getWorldYearNumber(year);
    let reducedMonth = reduceNumber(`${birthMonth}`);
    let reducedDay = reduceNumberRange(`${birthDay}`, 1, 9);

    return reduceNumberRange(`${wyn + reducedMonth + reducedDay}`, 1, 9);
};

/**
 *
 * @param {number} birthMonth
 * @param {number} birthDay
 * @returns {number}
 */
export const getCurrentPersonalYearNumber = (birthMonth, birthDay) =>
    getPersonalYearNumber(moment().get('year'), birthMonth, birthDay);

/**
 *
 * @param {number} rulingNumber from 2 to 11, and 22
 * @returns {number[]}
 */
export const getPeakAges = (rulingNumber) =>
    _.range(36 - rulingNumber, 36 - 2 + 27, 9);

/**
 *
 * @param {number} birthYear
 * @param {number[]} peakAges
 * @returns {number[]}
 */
export const getPeakYears = (birthYear, peakAges) =>
    peakAges.map((e) => birthYear + e);

/**
 *
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @returns {number[][]} pyramid foot to peak
 */
export const getPyramids = (day, month, year) => {
    let reducedDay = reduceNumberRange(`${day}`, 1, 9);
    let reducedMonth = reduceNumberRange(`${month}`, 1, 9);
    let reducedYear = reduceNumberRange(`${year}`, 1, 9);

    let pyramids = [];
    pyramids.push([reducedMonth, reducedDay, reducedYear]);
    pyramids.push([
        reduceNumber(`${reducedMonth + reducedDay}`),
        reduceNumber(`${reducedDay + reducedYear}`),
    ]);
    pyramids.push([pyramids[1].reduce((acc, curr) => acc + curr, 0)]);
    pyramids.push([reducedMonth + reducedYear]);
    return pyramids;
};
