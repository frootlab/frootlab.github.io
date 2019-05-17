---
layout: posts
navid: blog
title: Blog
description: "An archive of all posts sorted by tag"
permalink: /tags.html
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags_list = site_tags | split:',' | sort %}

{% for item in (0..site.tags.size) %}
{% unless forloop.last %}
{% capture label %}{{ tags_list[item] | strip_newlines }}{% endcapture %}

<div id="{{ label }}" class="post-group">
<h2 class="post-group-title">
  <i class="fas fa-tag" style="transform: scale(0.9); vertical-align: bottom;"></i>
  <span style="padding-left: 0.2em;">{{ label }}</span>
</h2>
<div class="post-group-content">

{% for i in (0..1) %}
{% assign j = 1 | minus: i  %}
{% for post in site.tags[label] %}
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

{% endunless %}{% endfor %}
