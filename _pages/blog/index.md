---
layout: blog
navid: blog
title: Blog
short-title: Blog
image: images/webp/hal-gatewood-613602-unsplash.webp
description: "An archive of all posts sorted by date"
permalink: /blog/index.html
redirect_from: /blog.html
---

<h2 class="section-title">Latest Posts</h2>
<div class="grid">

{% for post in site.posts limit:4 %}

{% if post.preview %}{% assign preview = post.preview %}
{% elsif post.image %}{% assign preview = post.image %}
{% else %}{% assign preview = post.image %}
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
      background: url({{ site.url }}/{{ preview }}) no-repeat;
      background-size: cover;"></div>
    <div class="card-text card-text-{{ color }}">
        {{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}
    </div>
  </div>
  </a>
</div>

{% endfor %}

</div>