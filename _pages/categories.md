---
layout: posts
title: Categories
description: "An archive of all posts sorted by category"
permalink: /categories.html
---

{% for category in site.categories %}
{% assign name = category | first %}
<h2 id="{{ name }}" class="tag-heading">{{ name }}</h2>
{% assign catid = name | downcase %}
{% if catid == 'corporate' %}
  {% assign btnclass = 'btn btn_green' %}
{% elsif catid == 'science' %}
  {% assign btnclass = 'btn btn_blue' %}
{% else %}
  {% assign btnclass = 'btn' %}
{% endif %}
<ul class="posts-list-tight">
  {% for post in category.last %}
  <li>
    <span class="date">{{ post.date | date: '%d %b %Y' }}</span>
    <a href="{{ site.url }}{{ post.url }}" class="{{ btnclass }}" title="{{ post.title }}">
      <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;
      {{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}
    </a>
  </li>
  {% endfor %}
</ul>
{% endfor %}
