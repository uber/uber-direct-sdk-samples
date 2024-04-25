# Uber Direct JS SDK Examples

There are two folders of examples:

- `js` - Basic examples using the `node` command
- `next.js` - Web examples for Next.JS

## Setup

- Install SDK: `npm install @uber-direct`
- Set environment variables - To use the Uber Direct JS SDK, you must authenticate with a client ID and secret. To make API calls, you'll also need a customer token. Set these as environment variables.

```
export UBER_DIRECT_CLIENT_ID=your_client_id
export UBER_DIRECT_CLIENT_SECRET=your_client_secret
export UBER_DIRECT_CUSTOMER_ID=your_customer_token
```

- Run examples

### Run examples

```sh
# Fetch Access Token
node examples/auth/basic.js

# Create Delivery Quote
node examples/deliveries/create-quote/basic.js
# Create Delivery
node examples/deliveries/create-delivery/basic.js
# Get Delivery
node examples/deliveries/get-delivery/basic.js
# List Deliveries
node examples/deliveries/list-deliveries/basic.js
# Update Delivery
node examples/deliveries/update-delivery/basic.js
# Cancel Delivery
node examples/deliveries/cancel-delivery/basic.js
```
