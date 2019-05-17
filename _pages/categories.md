---
layout: posts
title: Blog
description: "An archive of all posts sorted by category"
permalink: /categories.html
---

{% for category in site.categories %}
{% assign name = category | first %}

<div id="{{ name }}" class="post-group">
<h2 class="post-group-title">{{ name }}</h2>
<div class="post-group-content">

{% for i in (0..1) %}
{% assign j = 1 | minus: i  %}
{% for post in category.last %}
{% assign mod = forloop.index | modulo: 2 %}
{% if mod == j %}

{% if post.preview %}
{% assign preview = post.preview %}
{% elsif post.image %}
{% assign preview = post.image %}
{% else %}
{% assign preview = post.image %}
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

<div class="post-preview">
<a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">
<span class="post-preview-header">{{ post.date | date: '%d %b %Y' }}</span>
<div class="post-preview-content" style="
  background: url({{ site.url }}/{{ preview }}) no-repeat;
  background-size: cover; ">
  <div class="ribbon-box">
    <div class="ribbon-wrapper">
        <div class="{{ color }}-ribbon">{{ catid }}</div>
    </div>
  </div>
  <div class="{{ color }}-post-preview-text">
      {{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}
  </div>
</div>
</a>
</div>

{% endif %}
{% endfor %}
{% endfor %}

</div>
</div>

{% endfor %}
