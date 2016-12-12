import { initialize, pageview } from 'react-ga'
import { config } from 'config'

initialize(config.googleAnalytics);

exports.onRouteUpdate = (state, page, pages) => {
  pageview(state.pathname);
};
