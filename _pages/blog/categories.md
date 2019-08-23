---
layout: blog
title: Blog
title-layout: inset
short-title: Category
image-meta:
  cloudinary: pixabay/3357642-edit
  orientation: landscape
sections: true
description: "An archive of all blog posts sorted by category"
permalink: /blog/categories.html
redirect_from: /categories.html
navid: blog
---

{% assign bag = site.data.categories | where: "type", "blog" %}

{% for cat in bag %}
<div id="{{ cat.id }}" class="hidden">
  <section class="dark-grey">
    <h3>{{ cat.name }}</h3>
  </section>
  <section class="grey">
    {% include blog/preview.html category=cat.id %}
  </section>
</div>
{% endfor %}
