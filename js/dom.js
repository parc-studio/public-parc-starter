/**
 * dom.js — DOM query/create/update helpers
 *
 * Rules:
 *   - This is the ONLY file that reads or writes the DOM
 *   - Expose render functions that other files call
 *   - Keep each render function focused on one component
 */

window.App = window.App || {};

App.dom = {

  /**
   * Shorthand for querySelector.
   * @param {string} selector
   * @returns {Element|null}
   */
  $(selector) {
    return document.querySelector(selector);
  },

  /**
   * Shorthand for querySelectorAll (returns real Array).
   * @param {string} selector
   * @returns {Element[]}
   */
  $$(selector) {
    return [...document.querySelectorAll(selector)];
  },

  /* ---- Render functions ---- */

  /**
   * Update the counter display.
   */
  renderCounter() {
    const el = App.dom.$('#counter-display');
    if (el) {
      el.textContent = App.state.get('count');
    }
  }

};
