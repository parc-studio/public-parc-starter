/**
 * utils.js — Pure utility functions
 *
 * Rules:
 *   - No DOM access
 *   - No state access
 *   - No side effects
 *   - Every function is testable in isolation
 */

window.App = window.App || {};

App.utils = {

  /**
   * Clamp a number between min and max.
   * @param {number} value
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  },

  /**
   * Generate a random ID string.
   * @param {number} length
   * @returns {string}
   */
  randomId(length = 8) {
    return Math.random().toString(36).substring(2, 2 + length);
  },

  /**
   * Format a date as YYYY-MM-DD.
   * @param {Date} date
   * @returns {string}
   */
  formatDate(date) {
    return date.toISOString().split('T')[0];
  }

};
