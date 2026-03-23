/**
 * app.js — Entry point. Wires events and initializes the app.
 *
 * Rules:
 *   - This is the ONLY file that calls addEventListener
 *   - Delegates clicks via data-action attributes
 *   - Calls App.dom render functions in response to state changes
 */

window.App = window.App || {};

/**
 * Map of data-action values → handler functions.
 * Add new actions here when you add features.
 */
const actions = {

  'increment-counter'() {
    App.state.set('count', App.state.get('count') + 1);
  },

  'decrement-counter'() {
    App.state.set('count', App.state.get('count') - 1);
  },

  'reset-counter'() {
    App.state.set('count', 0);
  }

};

/**
 * Handle all clicks via event delegation.
 */
function handleClick(e) {
  const actionEl = e.target.closest('[data-action]');
  if (!actionEl) return;

  const actionName = actionEl.getAttribute('data-action');
  if (actions[actionName]) {
    actions[actionName](e);
  }
}

/**
 * Route state changes to the right render function.
 */
function handleStateChange(e) {
  const { key } = e.detail;

  if (key === 'count') {
    App.dom.renderCounter();
  }
}

/**
 * Initialize the app. Called once on page load.
 */
function init() {
  // Event delegation — one listener for all clicks
  document.addEventListener('click', handleClick);

  // State change listener — re-render when state updates
  document.addEventListener('state-change', handleStateChange);

  // Initial render
  App.dom.renderCounter();

  console.log('App initialized');
}

// Boot
init();
