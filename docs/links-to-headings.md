---
title: Links to Headings with slug
sidebar_position: 5
slug: /links-to-headings
---



[link_to_page](8d50668e-7b0f-4326-a345-93fcf0919c49)


Inline link to [heading2OfOranges](/oranges)


However, the official API currently delivers the following without any indication of a link:


 heading1


Instead, we just get the “heading1” text:


```javascript
{
    "object": "block",
    "id": "6ba9e108-ecf4-462c-aecf-bcf23defe143",
    "parent": {
      "type": "page_id",
      "page_id": "acffdc8c-b6a9-4f62-ab7f-fe01146b039a"
    },
    "created_time": "2023-01-12T23:41:00.000Z",
    "last_edited_time": "2023-01-16T23:10:00.000Z",
    "created_by": {
      "object": "user",
      "id": "11fb7f16-0560-4aee-ab88-ed75a850cfc4"
    },
    "last_edited_by": {
      "object": "user",
      "id": "11fb7f16-0560-4aee-ab88-ed75a850cfc4"
    },
    "has_children": false,
    "archived": false,
    "type": "paragraph",
    "paragraph": {
      "rich_text": [
        {
          "type": "text",
          "text": { "content": " heading1", "link": null },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": " heading1",
          "href": null
        }
      ],
      "color": "default"
    }
  },
```

