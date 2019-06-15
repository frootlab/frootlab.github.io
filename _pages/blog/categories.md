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
  <section class="dark-grey">
    <h3>{{ name }}</h3>
  </section>
  <section class="grey">
    {% include posts/preview.html category=name%}
  </section>
</div>
{% endfor %}
