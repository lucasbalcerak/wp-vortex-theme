<?php
get_header();
?>

<body>

    <?php
    $photoArr = array();
    $productsArr = ratioChoicesName('photo-gallery', 'category');
    $photosUrls = get_random_photos_urls();
    $gallery = get_first_photo_gallery($productsArr);

    $polishChars     = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ż', 'ź', 'Ą', 'Ć', 'Ę', 'Ł', 'Ń', 'Ó', 'Ś', 'Ż', 'Ź'];
    $replacementChars = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z', 'A', 'C', 'E', 'L', 'N', 'O', 'S', 'Z', 'Z'];

    ?>
    <header class="container flex-container margin-header-bottom">
        <div class="flex-container-column flex-item margin-header-right">
            <div class="flex-container flex-item margin-header-bottom mobile-flex-direction-column">
                <div class="square-item logo flex-item margin-header-right no-border"
                    style="background-image: url(<?php echo get_theme_file_uri('images/logo.png') ?>)">

                </div>
                <div class="square-item flex-item border-double">
                    <div class="box-animation">
                        <div class="fromLeft photo-animation bg-layer">
                        </div>
                        <div class="fromBottom photo-animation bg-layer on-bottom">
                        </div>
                    </div>
                    <div class="left"></div>
                    <div class="bottom"></div>
                </div>
            </div>
            <div class="flex-container flex-item">
                <div class="rectangle-item flex-item margin-header-right border-double">
                    <div class="slider flex-container-column">
                        <?php
                        foreach ($productsArr as $product) {
                            echo '<h1 class="slide">' . esc_html($product) . '</h1>';
                        }
                        ?>
                    </div>
                    <div class="left"></div>
                    <div class="bottom"></div>
                </div>
                <div class="rectangle-item flex-item border mobile-none">
                    <div class="box-animation">
                        <div class="fromBottom photo-animation bg-layer">
                        </div>
                        <div class="fromBottom photo-animation bg-layer on-bottom">
                        </div>
                    </div>
                    <div class="left"></div>
                    <div class="bottom"></div>
                </div>
            </div>
        </div>
        <div class="flex-container-column flex-item mobile-none">
            <div class="wide-item flex-item border">
                <div class="box-animation">
                    <div class="fromRight photo-animation bg-layer">
                    </div>
                    <div class="fromBottom photo-animation bg-layer on-bottom">
                    </div>
                </div>
                <div class="left"></div>
                <div class="bottom"></div>
            </div>
        </div>
    </header>
    <div class="wide-item-horizontal border mobile-none">
        <div class="left"></div>
        <div class="bottom"></div>
    </div>
    <section class="about-us container flex-container-column">
        <?php
        $aboutUsPost = new WP_Query(
            array(
                'post_type' => 'about-us',
                'posts_per_page' => 3,
            )
        );

        while ($aboutUsPost->have_posts()) {
            $aboutUsPost->the_post();
            ?>
            <div class="text-paragraph">
                <?php echo get_the_content(); ?>
            </div>

            <?php
        }
        ?>
    </section>
    <section class="gallery container flex-container-column">
        <div class="flex-container gallery-row">
            <?php
            $counter = 0;
            foreach ($gallery as $product => $url) {
                if ($counter < 3) {
                    ?>
                    <div class="flex-container-column photo-div">
                        <div class="photo">
                            <div class="photo-image" style="background-image: url(<?php echo $url ?>)">
                            </div>
                        </div>
                        <div class="gallery-category flex-container">
                            <a 
                                href="../vortex/<?php echo strtolower(str_replace(" ", "-", str_replace($polishChars, $replacementChars, $product))); ?>">
                                <?php echo $product; ?>
                            </a>
                        </div>
                    </div>
                    <?php
                    $counter++;
                }
            }
            ?>
        </div>
        <div class="flex-container gallery-row">
            <?php
            $counter = 0;

            foreach ($gallery as $product => $url) {
                if ($counter < 3) {
                    $counter++;
                    continue;
                }
                ?>
                <div class="flex-container-column photo-div">
                    <div class="photo">
                        <div class="photo-image" style="background-image: url(<?php echo $url ?>)">
                        </div>
                    </div>
                    <div class="gallery-category flex-container">
                        <a 
                        href="../vortex/<?php echo strtolower(str_replace(" ", "-", str_replace($polishChars, $replacementChars, $product))); ?>">
                            <?php echo $product; ?>
                        </a>
                    </div>
                </div>
                <?php
            }
            $counter++;
            ?>
        </div>
    </section>
    <section class="container flex-container-column contact">
        <div>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.0288838503175!2d21.10980452242911!3d52.60524876395954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e94b0603abfd1%3A0x93c263a0f4c1eb31!2sVortex!5e0!3m2!1spl!2spl!4v1714996859782!5m2!1spl!2spl" 
                    class="google-map"
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>    
            </div>
        </div>
        <div class="contact-info">
            <div class="flex-container-column test">
                <?php
                $contact = new WP_Query(
                    array(
                        'post_type' => 'contact',
                        'posts_per_page' => 3,
                        'meta_query' => array(
                            array(
                                'key' => 'contact',
                                'value' => 'mail',
                                'compare' => '='
                            )
                        )
                    )
                );
        
                while ($contact->have_posts()) {
                    $contact->the_post(); ?>
                    <div class="flex-container">
                        <i class="fa-solid fa-envelope"></i>
                        <?php the_content(); ?>
                    </div>
                    <?php
                } 
                wp_reset_postdata();
                $contact = new WP_Query(
                    array(
                        'post_type' => 'contact',
                        'posts_per_page' => 3,
                        'meta_query' => array(
                            array(
                                'key' => 'contact',
                                'value' => 'telefon',
                                'compare' => '='
                            )
                        )
                    )
                );
        
                while ($contact->have_posts()) {
                    $contact->the_post(); ?>
                    <div class="flex-container">
                        <i class="fa-solid fa-phone"></i>
                        <?php the_content(); ?>
                    </div>
                    <?php
                }  
                ?>
            </div>
        </div>
    </section>
    <?php
    get_footer();
    ?>