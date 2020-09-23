## Quick tip: Create a JSON feed with 11ty

In this example, we create a little JSON feed with the following snippet: 

```text
---
permalink: '/my-cool-feed.json'
---
{
  "posts": [
    {% for item in collections.posts %}
      {
        "title": "{{ item.data.title }}",
        "url": "{{ item.url }}"
      }{% if not loop.last %},{% endif %}
    {% endfor %}
  ]
}
```

Head over to the [full quick tip](https://piccalil.li/quick-tip/create-a-json-feed-with-11ty/) to learn more.
