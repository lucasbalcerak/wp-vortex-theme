<?php

function custom_post_type() {
    register_post_type('About-us', array(
        'show_in_rest' => true,
        'public' => true,
        'labels' => array(
            'name' => 'O nas',
            'add_new' => 'Dodaj O nas',
            'edit_item' => 'Edytuj O nas',
            'all_items' => 'O nas',
            'singular_name' => 'O nas'
        ),
        'menu_icon' => 'dashicons-megaphone'
    ));

    register_post_type('Contact', array(
        'show_in_rest' => true,
        'public' => true,
        'labels' => array(
            'name' => 'Kontakt',
            'add_new' => 'Dodaj Kontakt',
            'edit_item' => 'Edytuj Kontakt',
            'all_items' => 'Kontakty',
            'singular_name' => 'Kontakt'
        ),
        'menu_icon' => 'dashicons-list-view'
    ));

    register_post_type('Photo-gallery', array(
        'show_in_rest' => true,
        'public' => true,
        'labels' => array(
            'name' => 'Galeria',
            'add_new' => 'Dodaj zdjęcie',
            'edit_item' => 'Edytuj zdjęcie',
            'all_items' => 'Zdjęcia',
            'singular_name' => 'Zdjęcie'
        ),
        'menu_icon' => 'dashicons-format-gallery'
    ));
    
}


add_action('init', 'custom_post_type');