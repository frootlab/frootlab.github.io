---
layout: blog
navid: blog
title: Blog
title-layout: inset
short-title: Blog
image-meta:
  cloudinary: pixabay/3357642-edit
  orientation: landscape
sections: true
description: An archive of all blog posts sorted by date
permalink: /blog/index.html
redirect_from: /blog.html
---

<section class="dark-grey">
  <h3>
    <ul class="tiny squared white icons" style="float: right; margin-top: -0.3em;">
      {% include links/create.html name="rss" uid="/feed/corporate.xml" %}
    </ul>
    <b>Corporate</b>
  </h3>
  <p>Articles about us and our projects</p>
</section>

<section class="grey">
  {% include blog/preview.html layout="cards" limit=3 type="blog" category="corporate" %}
</section>

<section class="grey">
  <ul class="small centered white icons">
    {% include links/create.html name="more" uid="/blog/archive" title="Blog Archive" %}
  </ul>
</section>

<section class="dark-grey">
  <h3>
    <ul class="tiny squared white icons" style="float: right; margin-top: -0.3em;">
      {% include links/create.html name="rss" uid="/feed/science.xml" %}
    </ul>
    <b>Science</b>
  </h3>
  <p>Articles about pure and applied data science</p>
</section>

<section class="grey">
  {% include blog/preview.html layout="cards" limit=3 type="blog" category="science" %}
</section>

<section class="grey">
  <ul class="small centered white icons">
    {% include links/create.html name="more" uid="/blog/archive" title="Blog Archive" %}
  </ul>
</section>
