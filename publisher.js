import * as redis from "redis";

const client = redis.createClient();

const playload = { type: "test-message" };

client.publish("channel", "message");
