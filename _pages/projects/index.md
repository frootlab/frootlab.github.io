---
layout: form
navid: projects
title: Projects
sections: true
description: "Gallery of active Projects"
permalink: /projects/index.html
redirect_from: /projects.html
cloudinary: pexels/323645
image-orientation: landscape
cloudinary: pixabay/3357642
image-orientation: landscape
title-layout: inset
backdrop: "linear-gradient(#0000004D, #00000000 20%), url(https://res.cloudinary.com/frootlab/image/upload/c_crop,w_0.5,h_1.0/c_scale,q_auto:good,w_960/pexels/323645.webp);"

---

<ul class="projects-menu" style="width: 100%; height: 500px;">
  {% for item in site.data.projects %}
    <li>
      <a href="{{ item.url }}" title="{{ item.title }}">
        <span>{{ item.title }}</span>
      </a>
    </li>
  {% endfor %}
</ul>
<section>
</section>
