---
title: Embedding Video
sidebar_position: 4
slug: /afc948b1-6876-4c68-b6ff-6a453f0689ad
---

import ReactPlayer from "react-player";

If docu-notion notices that you have embed a video it should convert that to code useable in Docusaurus by using [react-player](https://www.npmjs.com/package/react-player).


<ReactPlayer controls url="https://www.youtube.com/watch?v=FXIrojSK3Jo" />


docu-notion does the following when it detects a link to a video:

- Adds a `import ReactPlayer from "react-player";` to the markdown
- Inserts html like `<ReactPlayer controls url="https://www.youtube.com/watch?v=5M3nJrlf3p0&t=70s" />`

:::info

If your site is not based on `docu-notion-sample-site`, you may need to add ReactPlayer to your Docusaurus project:
`yarn add react-player` or `npm i react-player`

:::




:::caution

docu-notion can’t yet tell if the link points to video or not, so it currently just looks for patterns indicating youtube or vimeo.

:::



