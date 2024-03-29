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

    register_post_type('Products', array(
        'show_in_rest' => true,
        'public' => true,
        'labels' => array(
            'name' => 'Produkty',
            'add_new' => 'Dodaj Produkt',
            'edit_item' => 'Edytuj Produkt',
            'all_items' => 'Produkty',
            'singular_name' => 'Produkt'
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