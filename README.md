# docker-ip6

> Running IP6 Node server and testing in Docker

[![CircleCI](https://circleci.com/gh/bahmutov/docker-ip6.svg?style=svg)](https://circleci.com/gh/bahmutov/docker-ip6)

```
npm install
npm test
```

## Docker commands

build

```
docker build -t gleb/docker-ip6 .
```

run

```
docker run --name ip6 -p 6500:6500 -it gleb/docker-ip6 /bin/bash
```

stop

```
docker rm ip6
```

## Notes

Inside Docker container, should bind to `0.0.0.0:6500` (ip4) to receive traffic
via mapped port `-p 6500:6500`. Same for ip6 is `::`.
