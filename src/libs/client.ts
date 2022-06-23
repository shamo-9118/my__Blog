import { createClient } from 'microcms-js-sdk'; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "shomablog", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "cdbf1874111f4b549c47732c03f5c9c90531",
});