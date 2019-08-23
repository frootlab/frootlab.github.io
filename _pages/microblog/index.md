---
layout: blog
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
---

<section class="dark-grey"><h3>Latest Posts</h3></section>
<section class="grey">{% include blog/preview.html limit=15 type="microblog" display="list" %}</section>
<section class="grey">
  <a href="/microblog/archive" title="News Archive"><img src="/images/svg/plus-ocean.svg" alt="plus" style="width: 2rem;"></a>
</section>
