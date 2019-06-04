---
layout: blog
navid: blog
title: Blog
short-title: Blog
cloudinary: paper/collage
description: "An archive of all posts sorted by date"
permalink: /blog/index.html
redirect_from: /blog.html
---

<h2 class="section-title">Latest Posts</h2>
<div class="grid">

{% for post in site.posts limit:10 %}

{% if post.cloudinary %}
  {% assign preview = "https://res.cloudinary.com/frootlab/image/upload/c_thumb,w_300,g_face/" | append: post.cloudinary | append: ".webp" %}
{% elsif post.preview %}
  {% assign preview = site.url | append: post.preview %}
{% elsif post.image %}
  {% assign preview = site.url | append: post.image %}
{% else %}
  {% assign preview = site.url | append: post.image %}
{% endif %}

{% assign catid = post.categories | first | downcase %}
{% if catid == 'corporate' %}{% assign color = 'blue' %}
{% elsif catid == 'science' %}{% assign color = 'green' %}
{% elsif catid == 'technology' %}{% assign color = 'red' %}
{% else %}{% assign color = 'grey' %}
{% endif %}

<div class="cell">
  <span class="label">{{ post.date | date: '%d %b %Y' }}</span>
  <a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">
  <div class="card">
    <div class="ribbon-box">
      <div class="ribbon-wrapper">
          <div class="{{ color }}-ribbon">{{ catid }}</div>
      </div>
    </div>
    <div class="card-image" style="
      background: url({{ preview }}) no-repeat;
      background-size: cover;"></div>
    <div class="card-text card-text-{{ color }}">
        {{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}
    </div>
  </div>
  </a>
</div>

{% endfor %}

</div>
