Claude Design website version of SL, hosted on Vercel.

## Homepage build

The homepage (`Website V2/index.html`) loads a precompiled, minified React bundle
from `Website V2/assets/js/app.<hash>.min.js`. After editing `app.jsx`,
`icons.jsx`, or `phone-screens.jsx`, rebuild it:

```sh
cd "Website V2"
cat icons.jsx <(echo) phone-screens.jsx <(echo) app.jsx > /tmp/bundle.jsx
npx esbuild /tmp/bundle.jsx --loader:.jsx=jsx --minify --target=es2018 --outfile=assets/js/app.min.js
HASH=$(md5 -q assets/js/app.min.js | cut -c1-8)
mv assets/js/app.min.js "assets/js/app.$HASH.min.js"
```

Then update the `<script>` tag in `index.html` to the new hashed filename and
delete the old bundle. React itself is self-hosted in `assets/js/` (production
UMD builds, long-cached).
