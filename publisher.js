import * as redis from "redis";

const client = redis.createClient();

const playload = { type: "test-message" };

await client.publish("channel", "message");
