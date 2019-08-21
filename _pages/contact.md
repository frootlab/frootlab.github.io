---
layout: form
navid: contact
title: Contact
short-title: Contact
image:
  cloudinary: unsplash/710800
  orientation: portrait
sections: true
permalink: /contact.html
social:
  - name: twitter
    user: frootlab
  - name: mastodon
    user: frootlab@mastodon.social
  - name: github
    user: frootlab
  - name: keybase
    user: frootlab
---

<section class="dark-grey"><h3>Community</h3></section>
<section class="grey"><div style="padding:1rem 0;">{% include links/social.html class="white" %}</div></section>

<section class="dark-grey"><h3>Email</h3></section>
<section class="grey">
<div class="contact-form-container" style="padding: 1rem 0;">  
  <form id="contact-form" method="POST"
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
</section>
