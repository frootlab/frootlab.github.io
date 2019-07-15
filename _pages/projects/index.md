---
layout: form
navid: projects
title: Projects
title-layout: inset
sections: true
description: Gallery of Projects
permalink: /projects/index.html
redirect_from: /projects.html
image:
  cloudinary: pixabay/3357642-edit
  orientation: landscape
links:
  - name: Pandora
    url: /pandora
    title: Pandora
  - name: Nemoa
    url: /nemoa
    title: Nemoa
  - name: Motley
    url: /motley
    title: Motley
  - name: flib
    url: /flib
    title: flib
---

<section class="dark-grey"><h3>Featured Projects</h3></section>
<section class="white">{% include projects/preview.html display="cards" featured=true %}</section>

<section class="dark-grey"><h3>Further Projects</h3></section>
<section class="white">{% include projects/preview.html display="cards" featured=false %}</section>
