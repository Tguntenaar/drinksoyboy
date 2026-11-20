#!/bin/sh
set -e
cd "$(dirname "$0")"
npm run build
CLOUDFLARE_ACCOUNT_ID=0df9c0ffdddfbbaa2e9d11e0c6b70558 npx wrangler@4 deploy
