<?php
/**
 * Title: Contact Section with Form and Social Links
 * Slug: miles-wordcamp-canada-2026-f612b15f/contact-section-with-form-and-social-links
 * Categories: 
 */
?>
<!-- wp:group {"align":"full","metadata":{"name":"Contact Section"},"className":"contact","tagName":"section"} -->
<section id="contact" class="wp-block-group alignfull contact">
  <!-- wp:group {"metadata":{"name":"Contact Inner"},"className":"contact-inner"} -->
  <div class="wp-block-group contact-inner">
    <!-- wp:group {"metadata":{"name":"Contact Left"},"className":"contact-left animate-on-scroll"} -->
    <div class="wp-block-group contact-left animate-on-scroll">
      <!-- wp:paragraph {"className":"section-index"} -->
      <p class="wp-block-paragraph section-index">05 //</p>
      <!-- /wp:paragraph -->

      <!-- wp:heading {"level":2,"className":"contact-title"} -->
      <h2 class="wp-block-heading contact-title"><span class="section-title-line">Let's Build</span><span class="section-title-line section-title-accent">Something</span></h2>
      <!-- /wp:heading -->

      <!-- wp:paragraph {"className":"contact-desc"} -->
      <p class="wp-block-paragraph contact-desc">Got a project in mind? Looking for WordPress expertise? Want to collaborate on something wild? Drop me a line — I read every message.</p>
      <!-- /wp:paragraph -->

      <!-- wp:group {"metadata":{"name":"Contact Details"},"className":"contact-details"} -->
      <div class="wp-block-group contact-details">
        <!-- wp:paragraph {"className":"contact-link-wrapper"} -->
        <p class="wp-block-paragraph contact-link-wrapper"><a href="mailto:hello@troychaplin.com" class="contact-link">hello@troychaplin.com</a></p>
        <!-- /wp:paragraph -->

        <!-- wp:group {"metadata":{"name":"Contact Social"},"className":"contact-social"} -->
        <div class="wp-block-group contact-social">
          <!-- wp:paragraph {"className":"contact-social-link-wrapper"} -->
          <p class="wp-block-paragraph contact-social-link-wrapper"><a href="#" class="contact-social-link">GitHub</a></p>
          <!-- /wp:paragraph -->

          <!-- wp:paragraph {"className":"contact-social-link-wrapper"} -->
          <p class="wp-block-paragraph contact-social-link-wrapper"><a href="#" class="contact-social-link">Twitter / X</a></p>
          <!-- /wp:paragraph -->

          <!-- wp:paragraph {"className":"contact-social-link-wrapper"} -->
          <p class="wp-block-paragraph contact-social-link-wrapper"><a href="#" class="contact-social-link">LinkedIn</a></p>
          <!-- /wp:paragraph -->

          <!-- wp:paragraph {"className":"contact-social-link-wrapper"} -->
          <p class="wp-block-paragraph contact-social-link-wrapper"><a href="#" class="contact-social-link">Dribbble</a></p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:group -->

    <!-- wp:group {"metadata":{"name":"Contact Form"},"className":"contact-form animate-on-scroll"} -->
    <div id="contact-form" class="wp-block-group contact-form animate-on-scroll">
      <!-- wp:group {"metadata":{"name":"Form Group"},"className":"form-group"} -->
      <div class="wp-block-group form-group">
        <!-- wp:paragraph {"className":"form-label-wrapper"} -->
        <p class="wp-block-paragraph form-label-wrapper"><label class="form-label">Name</label></p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"className":"form-input-wrapper"} -->
        <p class="wp-block-paragraph form-input-wrapper"><input type="text" id="contact-name" name="name" class="form-input" placeholder="Your name" required=""></p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->

      <!-- wp:group {"metadata":{"name":"Form Group"},"className":"form-group"} -->
      <div class="wp-block-group form-group">
        <!-- wp:paragraph {"className":"form-label-wrapper"} -->
        <p class="wp-block-paragraph form-label-wrapper"><label class="form-label">Email</label></p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"className":"form-input-wrapper"} -->
        <p class="wp-block-paragraph form-input-wrapper"><input type="email" id="contact-email" name="email" class="form-input" placeholder="your@email.com" required=""></p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->

      <!-- wp:group {"metadata":{"name":"Form Group"},"className":"form-group"} -->
      <div class="wp-block-group form-group">
        <!-- wp:paragraph {"className":"form-label-wrapper"} -->
        <p class="wp-block-paragraph form-label-wrapper"><label class="form-label">Project Type</label></p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"className":"form-input-wrapper"} -->
        <p class="wp-block-paragraph form-input-wrapper"><select id="contact-project" name="project" class="form-input form-select"><option value="" disabled="" selected="">Select a project type</option><option value="wordpress">WordPress Development</option><option value="design">UI/UX Design</option><option value="fullstack">Full Stack Project</option><option value="consulting">Consulting / Audit</option><option value="other">Something Else</option></select></p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->

      <!-- wp:group {"metadata":{"name":"Form Group"},"className":"form-group"} -->
      <div class="wp-block-group form-group">
        <!-- wp:paragraph {"className":"form-label-wrapper"} -->
        <p class="wp-block-paragraph form-label-wrapper"><label class="form-label">Message</label></p>
        <!-- /wp:paragraph -->

        <!-- wp:paragraph {"className":"form-input-wrapper"} -->
        <p class="wp-block-paragraph form-input-wrapper"><textarea id="contact-message" name="message" class="form-input form-textarea" placeholder="Tell me about your project..." required=""></textarea></p>
        <!-- /wp:paragraph -->
      </div>
      <!-- /wp:group -->

      <!-- wp:button {"url":"#","className":"hero-cta form-submit"} -->
      <div class="wp-block-button hero-cta form-submit">
        <a class="wp-block-button__link wp-element-button" href="#"><span class="hero-cta-label">Send Message</span><span class="hero-cta-arrow">→</span></a>
      </div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->
</section>
<!-- /wp:group -->