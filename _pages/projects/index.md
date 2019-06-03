---
layout: page
navid: projects
title: Projects
description: "Gallery of active Projects"
permalink: /projects/index.html
redirect_from: /projects.html
cloudinary: pexels/323645
---

<ul class="projects-menu">
  {% for item in site.data.projects %}
    <li>
      <a href="{{ item.url }}" title="{{ item.title }}">
        <span>{{ item.title }}</span>
      </a>
    </li>
  {% endfor %}
</ul>
