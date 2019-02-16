---
title: Test Feed Subscriber
layout: layouts/base.njk
---


## Data from external feeds

This site subscribes to updates of the data hosted at:

```
https://data-feeds.netlify.com/
```

It was last deployed, most likely due to an update in a [data source](https://data-feeds.netlify.com), at <time>`{{ site.buildTime | dateDisplay('HH:mm') }} on {{ site.buildTime | dateDisplay('DDD') }}`</time>


## We can see the latest announcements

<ul>
{% for item in breaking.slice(0,5) -%}
<li><b>{{ item.title }}</b> - {{ item.text | safe }}</li>
{%- endfor -%}
</ul>


## Some Recent Twitter Love

<ul class="listing">
{%- for item in love.slice(0,5) -%}
  <li>
    <a href="">{{ item.text }}</a>
  </li>
{%- endfor -%}
</ul>


## And upcoming events

<ul class="listing">
{%- for item in events.future -%}
  <li>
    <a href="{{ item.eventUrl }}">{{ item.eventName }}</a> - {{ item.name}}
  </li>
{%- endfor -%}
</ul>









