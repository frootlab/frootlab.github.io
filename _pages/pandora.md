---
layout: project
project: pandora
about: Universal Data Interface
background: images/back/garden.webp
permalink: /pandora.html
github: frootlab/pandora
---

<em>Articles</em>

{% for post in site.posts %}
  {% assign project_tag = page.project | capitalize %}
  {% if post.tags contains project_tag %}
  <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a><br>
  {% endif %}
{% endfor %}

<br><em>Current Development Status</em>: <b>Pre-Alpha</b>

<br><em>Installation</em>

    $ pip install pandb

<br><em>Documentation</em>:
[online](https://pandora.readthedocs.io/en/latest/) |
[PDF](https://readthedocs.org/projects/pandora/downloads/pdf/latest/) |
[EPUB](https://readthedocs.org/projects/pandora/downloads/epub/latest/) |
[ZIP (HTML)](https://readthedocs.org/projects/pandora/downloads/htmlzip/latest/)

<br><em>License</em>:
[GPLv3 license](https://www.gnu.org/licenses/gpl.html)
