---
layout: form
navid: contact
title: Contact
short-title: Contact
cloudinary: unsplash/710800
image-orientation: portrait
permalink: /contact.html
twitter: frootlab
github: frootlab
keybase: frootlab
---

## Email
<div class="contact-form-container">  
  <form id="contact-form" class="panel" method="POST"
    action="https://formspree.io/contact@frootlab.org">
    <fieldset>
      <input type="text" name="name" placeholder="Name (required)" tabindex="1" required autofocus>
    </fieldset>
    <fieldset>
      <input type="email" name="email" placeholder="Email (required)" tabindex="2" required>
    </fieldset>
    <fieldset>
      <input type="tel" name="tel" placeholder="Phone Number" tabindex="3" >
    </fieldset>
    <fieldset>
      <input type="url" name="url" placeholder="Web Site" tabindex="4">
    </fieldset>
    <fieldset>
      <textarea name="message" placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button type="submit" value="Send" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>

## Community
{% include links/social.html %}
