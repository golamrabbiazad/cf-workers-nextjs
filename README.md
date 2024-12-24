# Next.js on CF Workers 🎉

First, run the development server:

```bash
# install project dependencies.
bun i

# run on local env
bun run preview:worker
```

Open [http://localhost:8771](http://localhost:8771) with your browser to see the result.

## Cloudflare integration

Besides the script mentioned above `c3` has added a few extra scripts that allow you to integrate the application with the [Cloudflare Workers](https://workers.cloudflare.com/) environment, these are:

- `build:worker` to build the application for Workers using the [`@opennextjs/cloudflare`](https://github.com/opennextjs/opennextjs-cloudflare) CLI
- `dev:worker` to locally preview your Workers application using the [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI
- `deploy:worker` to deploy your Workers application using the [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI

After doing this you can run the `dev` or `preview` script and visit the `/api/hello` route to see the example in action.

Finally, if you also want to see the example work in the deployed application make sure to add a `MY_KV_NAMESPACE` binding to your Pages application in its [dashboard kv bindings settings section](https://dash.cloudflare.com/?to=/:account/pages/view/:pages-project/settings/functions#kv_namespace_bindings_section). After having configured it make sure to re-deploy your application.
