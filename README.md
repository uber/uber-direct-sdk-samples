# Uber Direct JS SDK Samples

This repo contains reference applications for the [Uber Direct JS SDK](https://www.npmjs.com/package/uber-direct). You can download these examples locally and test them out to understand how the SDK works.

There are two folders of sample apps:

- `[vanilla-js](/vanilla-js/)` - Basic examples using the `node` command
- `[next.js](/next.js/)` - Web examples for Next.JS

## Setup

- Install SDK: `npm install uber-direct`
- Set environment variables - To use the Uber Direct JS SDK, you must authenticate with a client ID and secret. To make API calls, you'll also need a customer token. Set these as environment variables.

```
export UBER_DIRECT_CLIENT_ID=your_client_id
export UBER_DIRECT_CLIENT_SECRET=your_client_secret
export UBER_DIRECT_CUSTOMER_ID=your_customer_token
```
