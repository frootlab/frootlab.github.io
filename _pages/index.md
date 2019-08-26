---
layout: form
navid: home
sections: true
title: Frootlab
subtitle: Smart Analytics
title-layout: inset
permalink: /index.html
image-meta:
  cloudinary: pixabay/3357642-edit
  orientation: landscape
links:
  - name: Projects
    url: "#projects"
    title: Projects at Frootlab
  - name: Blog
    url: "#blog"
    title: Frootlab Blog
  - name: About
    url: /about
    title: About Us
---
<section class="dark-grey" id="projects">
  <h3><b>Projects</b></h3>
  <p>Next generation AutoML and Data-Warehousing</p>
</section>

<section>
  {% include projects/preview.html display="cards" featured=true limit=3 %}
</section>

<section class="grey">
  <ul class="small centered white icons">
    {% include links/create.html name="more" uid="/projects" title="Projects" %}
  </ul>
</section>

<section class="dark-grey" id="blog">
  <h3><b>Blog</b></h3>
  <p>Pure and applied Data Science</p>
</section>

<section>
  {% include blog/preview.html layout="cards" limit=3 type="blog" %}
  <ul class="small centered white icons">
    {% include links/create.html name="more" uid="/blog" title="Blog" %}
  </ul>
</section>

<section></section>
