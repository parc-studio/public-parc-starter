/**
 * state.js — App state and state-change helpers
 *
 * Rules:
 *   - All app state lives in App.state.data
 *   - Mutate ONLY through App.state.set(key, value)
 *   - set() fires the 'state-change' custom event so dom.js can re-render
 *   - No DOM access in this file
 */

window.App = window.App || {};

App.state = {

  /** The current state object. Read from here, never write directly. */
  data: {
    count: 0
  },

  /**
   * Update a state value and notify listeners.
   * @param {string} key — top-level key in data
   * @param {*} value — new value
   */
  set(key, value) {
    const prev = App.state.data[key];
    App.state.data[key] = value;
    document.dispatchEvent(new CustomEvent('state-change', {
      detail: { key, value, prev }
    }));
  },

  /**
   * Get a state value.
   * @param {string} key
   * @returns {*}
   */
  get(key) {
    return App.state.data[key];
  }

};
