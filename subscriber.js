import * as redis from "redis";

const client = redis.createClient();

const listener = (message, channel) => console.log(message, channel);

await client.subscribe("channel", listener);
