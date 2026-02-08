<?php
/**
 * Theme Functions
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Theme setup
 */
function miles_ice_castle_website_a00bb8a8_setup() {
    // Enable editor styles support and register editor stylesheets
    // Using add_editor_style() ensures styles are properly scoped to the editor canvas
    // and don't leak into the WordPress admin sidebar/UI
    add_theme_support( 'editor-styles' );
    add_editor_style( 'assets/css/styles.css' );
    add_editor_style( 'assets/css/editor-page.css' );
}
add_action( 'after_setup_theme', 'miles_ice_castle_website_a00bb8a8_setup' );

/**
 * Enqueue theme styles on frontend only.
 * Editor styles are loaded via add_editor_style() in theme setup to prevent
 * font styles from leaking into WordPress admin UI.
 */
function miles_ice_castle_website_a00bb8a8_enqueue_frontend_styles() {
    // Use filemtime() for cache busting when CSS files change
    $styles_path = get_template_directory() . '/assets/css/styles.css';
    $styles_version = file_exists( $styles_path ) ? filemtime( $styles_path ) : wp_get_theme()->get( 'Version' );

    wp_enqueue_style(
        'miles-ice-castle-website-a00bb8a8-styles',
        get_template_directory_uri() . '/assets/css/styles.css',
        array(),
        $styles_version
    );
}
add_action( 'wp_enqueue_scripts', 'miles_ice_castle_website_a00bb8a8_enqueue_frontend_styles' );

/**
 * Enqueue theme scripts for frontend only
 */
function miles_ice_castle_website_a00bb8a8_enqueue_scripts() {
    // Enqueue JavaScript if it exists, use filemtime() for cache busting
    $script_path = get_template_directory() . '/assets/js/script.js';
    $script_version = file_exists( $script_path ) ? filemtime( $script_path ) : wp_get_theme()->get( 'Version' );

    if ( file_exists( $script_path ) ) {
        wp_enqueue_script(
            'miles-ice-castle-website-a00bb8a8-script',
            get_template_directory_uri() . '/assets/js/script.js',
            array(),
            $script_version,
            true
        );
    }
}
add_action( 'wp_enqueue_scripts', 'miles_ice_castle_website_a00bb8a8_enqueue_scripts' );

/**
 * Remove title support from pages for cleaner editing experience.
 * The homepage content provides its own visual header.
 */
function miles_ice_castle_website_a00bb8a8_customize_pages() {
    remove_post_type_support( 'page', 'title' );
}
add_action( 'init', 'miles_ice_castle_website_a00bb8a8_customize_pages' );

/**
 * Add JS class to html element for animation system.
 * Outputs early in head to prevent FOUC on animated elements.
 */
function miles_ice_castle_website_a00bb8a8_add_js_class() {
    echo '<script>document.documentElement.classList.add("js");</script>';
}
add_action( 'wp_head', 'miles_ice_castle_website_a00bb8a8_add_js_class', 1 );

