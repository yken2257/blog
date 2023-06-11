---
title: "GitHub Actionsを使ってプッシュごとにCloudflare Pagesにデプロイする方法"
description: "GitHub Actionsを使ってプッシュごとにCloudflare Pagesにデプロイする手順について"
pubDate: "June 10 2023"
---

Cloudflareが公式に「[Cloudflare Pages GitHub Action](https://github.com/cloudflare/pages-action)」というGitHub Actionsを公開しているので、それを使ってGitHub Actions経由でプッシュごとにCloudflare Pagesにデプロイする手順をまとめます。
基本的にはCloudflare公式ページに記載されている手順に従って進めます。
- https://github.com/cloudflare/pages-action
- https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/

# Step 1: Cloudflareの認証情報をGitHubのSecretsに登録する
Cloudflare Pages GitHub Actionを使うためには、Cloudflareの認証情報（Account IDとAPI Token）が必要です。
## APIトークンの取得
[作成画面](https://dash.cloudflare.com/profile/api-tokens)にアクセスすると色々な権限が設定できますが、Cloudflare Pages GitHub Actionを使うだけなら、Cloudflare Pagesの権限があれば十分です。
「Custom token」から、Pagesの編集権限だけを付与したトークンを作成します。

## Account IDの取得
Account IDは、CloudflareのダッシュボードのURLに含まれています。
`https://dash.cloudflare.com/<ACCOUNT_ID>`

## GitHubのSecretsに登録
GitHubのリポジトリの「Settings」→「Secrets」から、以下の2つのSecretsを登録します。

# Step 2: GitHub Actionsの設定
GitHub Actionsの設定は、以下のようになります。
Cloudflareの[公式ドキュメント](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)のままです。
```yaml
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    name: Deploy to Cloudflare Pages
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      # Run your project's build step
      - name: Build
        run: npm install && npm run build
      - name: Publish
        uses: cloudflare/pages-action@1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: YOUR_PROJECT_NAME # e.g. 'my-project'
          directory: YOUR_DIRECTORY_OF_STATIC_ASSETS # e.g. 'dist'
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```
# Step 3: デプロイ
GitHub Actionsの設定が完了したら、GitHubにプッシュするだけでCloudflare Pagesにデプロイされます🎉