import Mixpanel from "mixpanel";

const analytics = Mixpanel.init(process.env.MIXPANEL_TOKEN);

export default analytics;
