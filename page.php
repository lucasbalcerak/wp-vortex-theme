<?php
    get_header();
?>

<body>
    <?php
        $productsArr = ratioChoicesName('photo-gallery', 'category');
    ?>
    <div class="container flex-container title">
        <h1>
            <?php echo get_the_title() ?>
        </h1>
    </div>
    <div class="container flex-container">
        <a  
            class="flex-container menu-link"
            href="<?php echo get_site_url()?>">
            Home
        </a>

        <?php
            foreach($productsArr as $product) {
                if($product != get_the_title()) {
                ?>
                    <a  
                    class="flex-container menu-link"
                    href="<?php echo get_site_url() . "/" . $product?>">
                    <?php echo $product ?>
                </a>
                <?php
                }
            }
        ?>
    </div>
    <section class="container flex-container image-gallery">
        <?php 
            $gallery = new WP_Query(
                array(
                    'post_type' => 'photo-gallery',
                    'posts_per_page' => -1,
                    'meta_query' => array(
                        array(
                            'key' => 'category',
                            'value' => get_the_title(),
                            'compare' => '='
                        )
                    )
                )
            );
            while ($gallery->have_posts()) {
                $gallery->the_post(); ?>
                <div class="image-container flex-container">
                    <?php
                        $test = get_field_object('image')['value'];
                    ?>
                    <img 
                        src="<?php echo get_field_object('image')['value']; ?>" 
                        class="image"
                        alt="">
                </div>
                <?php
            }                   
        ?>
        
    </section>
    <div class="full-gallery hidden">
        <div class="full-image-container">
            <i id="cross" class="cross-icon fa-solid fa-circle-xmark"></i>
            <img 
                src=""
                class="full-image"
                alt="">
            <div class="control">
                <i id="prev" class="fa-solid fa-caret-left"></i>
                <i id="next" class="fa-solid fa-caret-right"></i>
            </div>
        </div>
    </div>
<?php
    get_footer();
?>