---
layout: form
navid: home
cloudinary: pixabay/2462431-dark
image-orientation: landscape
cloudinary: pixabay/3357642
image-orientation: landscape
sections: true
logo: /images/svg/Frootlab-Logo-v2.3-3d.svg
logo-alt: Frootlab Logo
title: Frootlab
subtitle: Smart Analytics
title-layout: inset
permalink: /index.html
links:
  - pandora:
    url: /projects/pandora
    name: Pandora
    title: Pandora Database Proxy
  - nemoa:
    url: /projects/nemoa
    name: Nemoa
    title: Nemoa AutoML
  - motley:
    url: /projects/motley
    name: Motley
    title: Motley Algorithm Repository
---

<section class="dark-grey">
  <h3>Next generation AutoML and Data-Warehousing</h3>
</section>
<section class="white">
<div style="display: flex; justify-content: space-around; padding-top: 16pt;">
    <div style="flex: 33%; margin: 0 24pt; padding: 16pt 0; text-align: center;">
      <img style="height: 180px;" src="https://res.cloudinary.com/frootlab/image/upload/undraw/undraw_server_status_5pbv">
      <p><strong><a href="/projects/pandora">Pandora</a></strong></p>
      <p>
        Equip your existing data applications with a universal data plug
      </p>
    </div>
    <div style="flex: 33%; margin: 0 24pt; padding: 16pt 0; text-align: center;">
      <img style="height: 180px;" src="https://res.cloudinary.com/frootlab/image/upload/undraw/professor.svg">
      <p><strong><a href="/projects/nemoa">Nemoa</a></strong></p>
      <p>
        Use rapid prototyping for your enterprise analytical applications
      </p>
    </div>
    <div style="flex: 33%; margin: 0 24pt; padding: 16pt 0; text-align: center;">
      <img style="height: 180px;" src="https://res.cloudinary.com/frootlab/image/upload/undraw/undraw_Data_points_ubvs.svg">
      <p><strong><a href="/projects/motley">Motley</a></strong></p>
      <p>
        Discover a new approach for collaborative data science
      </p>
    </div>
</div>
</section>
<section class="grey">
<a href="/projects"><img src="/images/svg/plus.svg" style="width: 2rem;"></a>
</section>

<section class="dark-grey"><h3>Pure and applied Data Science</h3></section>
<section class="grey">


<div class="grid" style="padding: 1rem 0;">

{% for post in site.posts limit:3 %}

{% assign readtime = post.content | number_of_words | divided_by: 180 | plus: 0.5 | round %}
{% assign offset = post.title | number_of_words | times: 2 %}
{% assign cutoff = 35 | minus: offset %}

{% if post.cloudinary %}
  {% assign preview = "https://res.cloudinary.com/frootlab/image/upload/c_thumb,w_300,g_face/" | append: post.cloudinary | append: ".webp" %}
{% elsif post.preview %}
  {% assign preview = site.url | append: post.preview %}
{% elsif post.image %}
  {% assign preview = site.url | append: post.image %}
{% else %}
  {% assign preview = site.url | append: post.image %}
{% endif %}

{% assign catid = post.categories | first | downcase %}
{% if catid == 'corporate' %}{% assign color = 'blue' %}
{% elsif catid == 'science' %}{% assign color = 'green' %}
{% elsif catid == 'technology' %}{% assign color = 'red' %}
{% else %}{% assign color = 'grey' %}
{% endif %}

<div class="cell">
  <a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">
  <div class="card">
    <div class="ribbon-box">
      <div class="ribbon-wrapper">
          <div class="{{ color }}-ribbon">{{ catid }}</div>
      </div>
    </div>
    <div class="card-image" style="background-image: url({{ preview }});"></div>
    <div class="card-content">
      <div class="label">{{ post.date | date: '%d %b %Y' }} &nbsp;&bull;&nbsp; {{ readtime }} min</div>
      <div class="card-title">{{ post.title | markdownify | strip_html }}</div>
      <div class="card-text">{{ post.excerpt | strip_html | truncatewords: cutoff}}</div>
    </div>
  </div>
  </a>
</div>

{% endfor %}

</div>

</section>
<section class="grey">
<a href="/blog"><img src="/images/svg/plus.svg" style="width: 2rem;"></a>
</section>
<section></section>
