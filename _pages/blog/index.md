---
layout: blog
navid: blog
title: Blog
short-title: Blog
cloudinary: pixabay/3357642
image-orientation: landscape
sections: true
description: "An archive of all posts sorted by date"
permalink: /blog/index.html
redirect_from: /blog.html
---

<section class="white"><h2>Latest Posts</h2></section>
<section>
<div class="grid">

{% for post in site.posts limit:10 %}

{% assign readtime = post.content | number_of_words | divided_by: 180 | plus: 0.5 | round %}

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

{% assign offset = post.title | number_of_words | times: 2 %}
{% assign cutoff = 35 | minus: offset %}

<div class="cell">
  <a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">
  <div class="card">
    <div class="ribbon-box">
      <div class="ribbon-wrapper">
          <div class="{{ color }}-ribbon">{{ catid }}</div>
      </div>
    </div>
    <div class="card-image" style="background-image: url({{ preview }});"></div>
    <div class="card-content">
      <div class="label">{{ post.date | date: '%d %b %Y' }} &nbsp;&bull;&nbsp; {{ readtime }} min</div>
      <div class="card-title">{{ post.title | markdownify | strip_html }}</div>
      <div class="card-text">{{ post.excerpt | strip_html | truncatewords: cutoff}}</div>
    </div>
  </div>
  </a>
</div>

{% endfor %}

</div>
</section>
