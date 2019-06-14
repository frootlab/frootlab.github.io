---
layout: blog
title: Blog
title-layout: inset
short-title: Category
cloudinary: pixabay/3357642-edit
image-orientation: landscape
sections: true
description: "An archive of all posts sorted by category"
permalink: /blog/categories.html
redirect_from: /categories.html
navid: blog
---

{% for category in site.categories %}
{% assign name = category | first %}

<div id="{{ name }}" class="hidden">
<section class="dark-grey"><h3>{{ name }}</h3></section>
<section class="grey">
<div class="grid" style="padding: 1rem 0;">

{% for post in category.last %}

{% assign readtime = post.content | number_of_words | divided_by: 180 | plus: 0.5 | round %}
{% assign offset = post.title | number_of_words | times: 2 %}
{% assign cutoff = 35 | minus: offset %}

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
{% if catid == 'corporate' %}
  {% assign color = 'blue' %}
{% elsif catid == 'science' %}
  {% assign color = 'green' %}
{% elsif catid == 'technology' %}
  {% assign color = 'red' %}
{% else %}
  {% assign color = 'grey' %}
{% endif %}

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

<div class="cell"></div>
<div class="cell"></div>

</div>
</section>
</div>

{% endfor %}
