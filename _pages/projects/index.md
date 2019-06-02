---
layout: page
navid: projects
title: Projects
description: "Gallery of active Projects"
permalink: /projects/index.html
redirect_from: /projects.html
image-cloudinary: pexels-323645
---

<ul class="projects-menu">
  {% for item in site.data.projects %}
    {% capture image %}{{ item.image }}{% endcapture %}
    {% unless image contains 'http://' or image contains 'https://' %}
    {% capture image %}{{ site.url }}/{{ image }}{% endcapture %}
    {% endunless %}
    <li style="background:url({{ image }}) center center no-repeat;">
      <a href="{{ item.url }}">
        <span>{{ item.title }}</span>
      </a>
    </li>
  {% endfor %}
</ul>
