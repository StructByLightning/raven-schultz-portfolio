/**
 * Sends analytics data to a specified API endpoint. The purpose of this function
 * is to collect certain browser-related metrics and user-defined data
 * and send them to a server for analysis purposes.
 *
 * @param {string} name - The primary name or identifier for the tagging event.
 * @param {Object} data - Additional data to be sent with the analytics event (default is an empty object).
 */
export default function tag(name, data = {}){
  let body = {
    name,
    ...data,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    endpoint: window.location.pathname,
    domain: window.location.hostname,
    queryString: window.location.search.replace(/^\?/, ""),
  };

  let apiUrl = "/api/69b9c7becf924e4ab83077f4c8187da8";

  //Check if the browser supports the `sendBeacon` method. This is a modern API
  //for sending small bits of data to a server without waiting for a response.
  if (!navigator.sendBeacon){
    navigator.sendBeacon(apiUrl, JSON.stringify(body));
  } else {
    fetch(apiUrl, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "text/plain", //it's json but we want the post to be the same as beacon's
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
      keepalive: true,
    });
  }
}

