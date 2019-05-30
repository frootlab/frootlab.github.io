---
layout: blog
navid: blog
title: Blog
short-title: Tag
image: images/webp/hal-gatewood-613602-unsplash.webp
description: "An archive of all posts sorted by tag"
permalink: /blog/tags.html
redirect_from: /tags.html
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags_list = site_tags | split:',' | sort %}

{% for item in (0..site.tags.size) %}
{% unless forloop.last %}
{% capture title %}{{ tags_list[item] | strip_newlines }}{% endcapture %}

<div id="{{ title }}" class="section">
<h2 class="section-title">
  <i class="fas fa-tag" style="transform: scale(0.9); vertical-align: bottom;"></i>
  <span style="padding-left: 0.2em;">{{ title }}</span>
</h2>

<div class="grid">

{% for post in site.tags[title] %}

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

<div class="cell"></div>
<div class="cell"></div>

</div>
</div>

{% endunless %}{% endfor %}