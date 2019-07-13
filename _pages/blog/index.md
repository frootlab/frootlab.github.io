---
layout: blog
navid: blog
title: Blog
title-layout: inset
short-title: Blog
cloudinary: pixabay/3357642-edit
image-orientation: landscape
sections: true
description: "An archive of all posts sorted by date"
permalink: /blog/index.html
redirect_from: /blog.html
---

<section class="dark-grey">
  <h3>Latest Posts</h3>
</section>
<section class="grey">
  {% include posts/preview.html limit=6 %}
</section>
<section class="grey">
  <a href="/blog/archive" title="Blog Archive"><img src="/images/svg/plus-ocean.svg" alt="plus" style="width: 2rem;"></a>
</section>
