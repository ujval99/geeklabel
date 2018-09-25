<?php

/**
 * @file
 * The primary PHP file for this theme.
 */


/**
 * Override or insert variables into the page template.
 */
function geeklabel_preprocess_page(&$vars) {
  if (drupal_is_front_page()) { 
    unset($vars['page']['content']['system_main']['default_message']);
  }
}