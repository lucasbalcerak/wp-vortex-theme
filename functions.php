<?php

// take ratio choices name and return it as array
function ratioChoicesName($postType, $fieldName) {
    $postID = null;
    $productsArr= array();

    // querry to take post ID --> we need only one
    $firstPostQuery = new WP_Query( array(
        'post_type' => $postType,
        'posts_per_page' => 1,
        'order' => 'ASC',
        'orderby' => 'date'
        ));
    
    // refactor ??  
    if($firstPostQuery->have_posts()){
        while($firstPostQuery->have_posts()) {
            $firstPostQuery->the_post();
            $postID = get_the_ID();
        }
    }

    $products_ratio = get_field_object($fieldName, $postID);

    if($products_ratio) {
        $products = $products_ratio['choices'];
    }

    // push names to array
    if($products) {
        foreach ($products as $key => $value) {
            array_push($productsArr, $value);
        }
    }

    wp_reset_postdata();
    return $productsArr;
}

function get_random_photos_urls() {
    $photoQuery = new WP_Query(array(
        'post_type' => 'photo-gallery',
        'posts_per_page' => 9,
        'orderby' => 'rand',
        'fields' => 'ids'
    ));

    $photoUrls = array();

    if ($photoQuery->have_posts()) {
        foreach ($photoQuery->posts as $post_id) {
            $photoUrl = get_field_object('image', $post_id)['value'];
            if(!empty($photoUrl)) {
                array_push($photoUrls, $photoUrl);
            }
        }
    };

    return $photoUrls;
}

function loadFiles() {
    wp_enqueue_script('jquery');
    wp_enqueue_script('main-site-js', get_theme_file_uri('/build/index.js'), array(), '1.0', true);
    wp_enqueue_script('font-awsome', 'https://kit.fontawesome.com/bc201f4e0c.js', array(), '1.0', true);
    wp_enqueue_style('main_style', get_theme_file_uri('/build/style-index.css'));
    wp_enqueue_style('google-fonts', '//fonts.googleapis.com/css2?family=Black+Han+Sans&family=Madimi+One&family=Noto+Sans+Armenian:wght@100..900&display=swap');
}

function dataToJs() {
    
    $photo_urls = get_random_photos_urls();
    
    wp_localize_script('main-site-js', 'photoData', array('urls' => $photo_urls));
}

add_action('wp_enqueue_scripts', 'loadFiles');
add_action('wp_enqueue_scripts', 'dataToJs');
