import { initialize, pageview } from 'react-ga'

initialize('UA-88597333-1');

exports.onRouteUpdate = (state, page, pages) => {
  pageview(state.pathname);
};
