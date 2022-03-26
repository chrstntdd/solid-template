# Solid Template

A starting point for web apps

## Featured

- [bun](https://bun.sh/) for a quick JS runtime
- solid-js for the view
- vanilla-extract
- vite
  - Bundles deps for dev and production
  - Copies the `public` dir to `/dist`
  - [https in local dev](https://web.dev/how-to-use-local-https/#setup)
- pnpm
  - internal modules used with the scope `@private_org/` from `~/pkgs`
- playwright
  - Covers e2e testing on localhost

## Initial setup

1. Clone repo
2. Bootstrap internal packages

```shell
$ pnpm prep
```

3. Start the main app from the root

```shell
$ pnpm  -F ./apps/main dev
```

## E2E tests

1. Run the app in development

```shell
$ pnpm  -F ./apps/main dev
```

2. Run the e2e test

```shell
$  pnpm -F ./apps/main-e2e test
```
