---
layout: form
navid: home
sections: true
title: Frootlab
subtitle: Smart Analytics
title-layout: inset
permalink: /index.html
image:
  cloudinary: pixabay/3357642-edit
  orientation: landscape
links:
  - name: Projects
    url: /projects
    title: Projects at Frootlab
  - name: Blog
    url: /blog
    title: Frootlab Blog
  - name: About
    url: /about
    title: About Us
---

<section class="dark-grey"><h3>Next generation AutoML and Data-Warehousing</h3></section>
<section class="white">{% include projects/preview.html display="cards" featured=true limit=3 %}</section>
<section class="grey">
<a href="/projects" title="Projects"><img src="/images/svg/plus-ocean.svg" alt="plus" style="width: 2rem;"></a>
</section>

<section class="dark-grey"><h3>Pure and applied Data Science</h3></section>
<section class="grey">{% include blog/preview.html limit=3 %}</section>
<section class="grey">
  <a href="/blog" title="Blog"><img src="/images/svg/plus-ocean.svg" alt="plus" style="width: 2rem;"></a>
</section>
<section></section>
