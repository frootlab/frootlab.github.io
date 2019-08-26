---
layout: form
navid: microblog
title: Microblog
title-layout: inset
short-title: Microblog
image-meta:
  cloudinary: pixabay/3357642-edit
  orientation: landscape
sections: true
description: An archive of all mikro posts sorted by date
permalink: /microblog/index.html
redirect_from: /microblog.html
links:
  - name: News
    url: "#news"
    title: News about frootlab
---

<section class="dark-grey" id="news">
  <h3>
    <ul class="tiny squared white icons" style="float: right; margin-top: -0.3em;">
      {% include links/create.html name="rss" uid="/feed/science.xml" %}
    </ul>
    <b>News</b>
  </h3>
  <p>Updates and announcements about us and our projects</p>
</section>
<section class="grey">
  {% include blog/preview.html limit=10 type="microblog" layout="magazine" %}
</section>
<section class="grey">
  <ul class="small centered white icons">
    {% include links/create.html name="more" uid="/microblog/archive" title="News Archive" %}
  </ul>
</section>

<section></section>
