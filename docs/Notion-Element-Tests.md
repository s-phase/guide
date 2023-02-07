---
title: Notion Element Tests
sidebar_position: 15
slug: /c4d333b3-75b3-4a0d-a084-305330a743ee
---

import ReactPlayer from "react-player";

:::tip

This is a normal Notion Callout

:::




## Columns {#3d728950b5cb4452b2a0c602c4b5ddc9}


There should be text on the left, and an apple on the right.


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.375)'}}>

A paragraph on the left.

Another paragraph.

</div><div className='notion-spacer' />

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.625)'}}>

![](./1528015832.png)



</div><div className='notion-spacer' />
</div>


## Embedded YouTube: {#1fe5d1edeb104acb8fbe6497becd809b}


<ReactPlayer controls url="https://www.youtube.com/watch?v=VjINuQX4hbM" />


## Heading Links {#f33ddf8c32884c5fb3d0d4c999b96245}


Though Docusaurus doesn’t allow linking to heading 1 within their system (see [linking to a heading 1](/oranges) still works through docu-notion if we just code it up the same way as the others.

- Link to a [heading 2](/oranges).
- Link to a [heading 3](/oranges).

## Tables {#75226710a4d346ab852d3032dab1f236}


| head 1        | head 2 |
| ------------- | ------ |
| who           | this   |
| what<br/>yeah | that   |

