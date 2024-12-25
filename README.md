# Next.js on CF Workers 🎉

![Build workflow](https://github.com/golamrabbiazad/cf-workers-nextjs/actions/workflows/ci.yml/badge.svg)

First, run the development server:

```bash
# install project dependencies.
bun i

# run on local env
bun run preview
```

Open [http://localhost:8787](http://localhost:8787) with your browser to see the result.

## Application scripts

- `build:worker` to build the application for Workers using the [`@opennextjs/cloudflare`](https://github.com/opennextjs/opennextjs-cloudflare) CLI
- `preview` to build and locally preview the application for Workers using the [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI
- `deploy` to deploy your Workers application using the [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI

After doing this you can run the `dev` or `preview` script and visit the `/api/hello` route to see the example in action.

Finally, if you also want to see the example work in the deployed application make sure to add a `MY_KV_NAMESPACE` binding to your Pages application in its [dashboard kv bindings settings section](https://dash.cloudflare.com/?to=/:account/pages/view/:pages-project/settings/functions#kv_namespace_bindings_section). After having configured it make sure to re-deploy your application.
