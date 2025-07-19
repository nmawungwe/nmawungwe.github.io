---
layout: page
title: Readings
permalink: /readings/
---

## Book Reviews

{% for review in site.reviews %}
  <h3><a href="{{ review.url | relative_url }}">{{ review.title }}</a></h3>
{% endfor %}

## Paper Reviews

{% for paper in site.papers %}
  <h3><a href="{{ paper.url | relative_url }}">{{ paper.title }}</a></h3>
{% endfor %}