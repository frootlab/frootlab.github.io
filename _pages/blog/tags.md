---
layout: blog
navid: blog
title: Blog
title-layout: inset
short-title: Tag
image-meta:
  cloudinary: pixabay/3357642-edit
  orientation: landscape
sections: true
description: "An archive of all blog posts sorted by tag"
permalink: /blog/tags.html
---

{% assign bag = site.data.categories | where: "type", "blog" | join: '|' %}

{% capture tags %}
  {% for post in site.posts %}
    {% if bag contains post.category %}
      {% for tag in post.tags %}{{ tag }}|{% endfor %}
    {% endif %}
  {% endfor %}
{% endcapture %}

{% assign array = tags | split: '|' %}
{% assign tags = array[1] | strip %}
{% for item in array %}
  {% assign token = item | strip %}
  {% unless tags contains token %}
    {% capture tags %}{{ tags }}|{{ token }}{% endcapture %}
  {% endunless %}
{% endfor %}

{% assign tags = tags | strip | split: '|' | compact | sort %}

{% for tag in tags %}
<div id="{{ tag }}" class="hidden">
  <section class="dark-grey">
    <h3>{{ tag }}</h3>
  </section>
  <section class="grey">
    {% include blog/preview.html layout="cards" tag=tag type="blog" %}
  </section>
</div>
{% endfor %}
