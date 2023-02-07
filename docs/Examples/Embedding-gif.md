---
title: Embedding gif
sidebar_position: 5
slug: /d82399dc-c324-48ab-8d1a-2049056b0800
---



If you embed a gif in notion, it should be embedded in Docusaurus


## Imgur {#d73432fa58b44f9199e8c36556fef96d}


![](./1607379524.gif)


## Giffy,  {#1b4bdad47c064c43a438613d41cc8de6}


![](./705447076.gif)


When it detects an embedded gif, docu-notion does the following:

- Adds a `import GifPlayer from "react-gif-player";` to the markdown.
- Inserts html like `<GifPlayer gif="https://media.giphy.com/media/VhiAuDYHkNPydiNnOs/giphy.gif" />`

:::info

If your site is not based on `docu-notion-sample-site`, you may need to add react-gif-player to your Docusaurus project:
`yarn add react-gif-player` or `npm i react-gif-player`

:::



