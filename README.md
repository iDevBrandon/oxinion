# OXINION

A location-based social networking service to share local opinions you have.

## Features

Similar as seek and hide game

- Upload opinions on the map
- Get reward if you go there

## Tech Stack

**Client:** Next, React, CSS Module

**Server:** Node, MongoDB

## Roadmap

- Additional browser support

- Add more integrations

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## API Reference

## Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

## Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## add(num1, num2)

Takes two numbers and returns the sum.

## Inspired By

<https://www.geoguessr.com/>

## Authors

- [@iDevBrandon](https://www.twitter.com/iDevBrandon)
