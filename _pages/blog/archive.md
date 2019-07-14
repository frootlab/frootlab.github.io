---
layout: blog
navid: blog
title: Blog
title-layout: inset
short-title: Archive
image:
  cloudinary: pixabay/3357642-edit
  orientation: landscape
sections: true
description: "An archive of all posts sorted by date"
permalink: /blog/archive.html
redirect_from: /archive.html
---

{% assign posts = site.posts %}
{% assign groups = posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% assign years = groups | map: "name" | sort | reverse %}

{% for year in years %}
<section class="dark-grey">
  <h3>{{ year }}</h3>
</section>
<section class="grey">
  {% include posts/preview.html year=year %}
</section>
{% endfor %}
