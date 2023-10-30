import mixpanel from "./analytics.js";
import { getCookie } from "cookies-next";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  const distinctId = getCookie("distinctId", { req, res });

  let data = {
    "distinct_id": distinctId,
    ...body,
    ip: req.headers["x-real-ip"] || req.connection.remoteAddress,
  };
  delete data.name; //name is the event name, not a property

  //print the event if in development, otherwise send it to mixpanel
  if (process.env.NODE_ENV === "development"){
    //eslint-disable-next-line no-console
    console.log(body?.name || "dummy", data);
  } else {
    mixpanel.track(body?.name || "dummy", data);
  }

  res.status(200).end();
}
