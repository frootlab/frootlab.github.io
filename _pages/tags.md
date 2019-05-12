---
layout: tags
title: Tag Archive
description: "An archive of posts sorted by tag."
permalink: /tags.html
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags_list = site_tags | split:',' | sort %}

{% for item in (0..site.tags.size) %}{% unless forloop.last %}
{% capture label %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
 <h2 id="{{ label }}" class="tag-heading">
   <span style="color: #008200;"> {{ label }}</span>
 </h2>
 <ul class="posts-list" style="margin-top: 30px; margin-bottom: 50p;">
   {% for post in site.tags[label] %}{% if post.title != null %}
   <li style="border: 0px; padding: 0px;">
     <a href="{{ site.url }}{{ post.url }}" class="post-title"
       style="margin-top:9px;" title="{{ post.title }}">
       <span>{{ post.title | markdownify | remove: "<p>" | remove: "</p>" }}</span>
     </a>
     <span class="date">{{ post.date | date: '%d %b %Y' }}</span>
   </li>
   {% endif %}{% endfor %}
 </ul>
{% endunless %}{% endfor %}
