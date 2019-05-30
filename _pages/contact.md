---
layout: form
navid: contact
title: Connect with us
short-title: Contact
image: images/webp/dose-juice-1184429-unsplash.webp
permalink: /contact.html
twitter: frootlab
github: frootlab
keybase: frootlab
rss:
---

## Community
<div class="panel thin">
{% include links/social.html %}
</div>

## Email
<div class="contact-form-container">  
  <form id="contact-form" class="panel" action="mailto:contact@frootlab.org" enctype="text/plain" method="post">
    <fieldset>
      <input placeholder="Name (required)" type="text" tabindex="1" required autofocus>
    </fieldset>
    <fieldset>
      <input placeholder="Email (required)" type="email" tabindex="2" required>
    </fieldset>
    <fieldset>
      <input placeholder="Phone Number (optional)" type="tel" tabindex="3" required>
    </fieldset>
    <fieldset>
      <input placeholder="Web Site (optional)" type="url" tabindex="4" required>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
