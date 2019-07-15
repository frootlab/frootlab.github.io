---
layout: blog
navid: blog
title: Blog
title-layout: inset
short-title: Tag
image:
  cloudinary: pixabay/3357642-edit
  orientation: landscape
sections: true
description: "An archive of all posts sorted by tag"
permalink: /blog/tags.html
redirect_from: /tags.html
---

{% for tag in site.tags %}
{% assign name = tag | first %}
<div id="{{ name }}" class="hidden">
  <section class="dark-grey">
    <h3>{{ name }}</h3>
  </section>
  <section class="grey">
    {% include blog/preview.html tag=name%}
  </section>
</div>
{% endfor %}
