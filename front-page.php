<?php
get_header();
?>

<body>

    <?php
    $photoArr = array();
    $productsArr = ratioChoicesName('photo-gallery', 'category');
    $photosUrls = get_random_photos_urls();
    $gallery = get_first_photo_gallery($productsArr);

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
                            <?php echo $product; ?>
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
                        <?php echo $product; ?>
                    </div>
                </div>
                <?php
            }
            $counter++;
            ?>
        </div>
    </section>
    <?php
    get_footer();
    ?>