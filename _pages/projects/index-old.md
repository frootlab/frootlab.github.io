---
layout: page
navid: projects
title: Projects
sections: true
description: "Gallery of active Projects"
permalink: /projects/index-old.html
redirect_from: /projects-old.html
image:
  cloudinary: pixabay/3357642
  orientation: landscape
---

<ul class="projects-menu">
  {% for item in site.projects %}
    <li>
      <a href="{{ item.url }}" title="{{ item.title }}">
        <span>{{ item.title }}</span>
      </a>
    </li>
  {% endfor %}
</ul>
