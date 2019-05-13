---
layout: posts
title: Tags
description: "An archive of all posts sorted by tag"
permalink: /tags.html
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags_list = site_tags | split:',' | sort %}

{% for item in (0..site.tags.size) %}{% unless forloop.last %}
{% capture label %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
<h2 id="{{ label }}" class="tag-heading">
  <i class="fa fa-tag" aria-hidden="true"></i>
  {{ label }}
</h2>
<ul class="posts-list-tight">
  {% for post in site.tags[label] %}{% if post.title != null %}
  {% assign this_category = post.category | downcase %}
  {% if this_category == 'corporate' %}
    {% assign btnclass = 'btn btn_green' %}
  {% elsif this_category == 'science' %}
    {% assign btnclass = 'btn btn_blue' %}
  {% else %}
    {% assign btnclass = 'btn' %}
  {% endif %}
  <li>
    <a href="{{ site.url }}{{ post.url }}" class="{{ btnclass }}" title="{{ post.title }}">
      {{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}
    </a>
    <span class="date">{{ post.date | date: '%d %b %Y' }}</span>
  </li>
  {% endif %}{% endfor %}
</ul>
{% endunless %}{% endfor %}
