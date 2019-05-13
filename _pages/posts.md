---
layout: posts
title: Posts
description: "An archive of all posts sorted by date"
permalink: /posts.html
---

<h2>Posts</h2>
<ul class="posts-list-tight">
  {% for post in site.posts %}
  {% assign this_category = post.category | downcase %}
  {% if this_category == 'corporate' %}
    {% assign btnclass = 'btn btn_green' %}
  {% elsif this_category == 'science' %}
    {% assign btnclass = 'btn btn_blue' %}
  {% else %}
    {% assign btnclass = 'btn' %}
  {% endif %}
  <li>
      <a class="{{ btnclass }}"  href="{{ site.url }}{{ post.url }}" title="{{ post.title }}" style="margin-top:6px;">
        {{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}
      </a>
      <span class="date">{{ post.date | date: '%d %b %Y' }}</span>
  </li>
  {% endfor %}
</ul>
