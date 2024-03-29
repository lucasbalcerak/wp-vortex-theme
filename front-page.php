<?php
    get_header();
?>
<body>

<?php
    $photoArr = array();
    $productsArr = ratioChoicesName('photo-gallery', 'category');
    $photosUrls = get_random_photos_urls();

?>
    <header class="container flex-container margin-header-bottom">
        <div class="flex-container-column flex-item margin-header-right">
            <div class="flex-container flex-item margin-header-bottom mobile-flex-direction-column">
                <div
                    class="square-item logo flex-item margin-header-right no-border"
                    style="background-image: url(<?php echo get_theme_file_uri('images/logo.png') ?>)">

                </div>
                <div class="square-item flex-item border-double">
                    <div class="box-animation">
                        <div
                            class="fromLeft photo-animation bg-layer">
                        </div>
                        <div
                            class="fromBottom photo-animation bg-layer on-bottom">
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
                        <div
                            class="fromBottom photo-animation bg-layer">
                        </div>
                        <div
                            class="fromBottom photo-animation bg-layer on-bottom">
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
                    <div
                        class="fromRight photo-animation bg-layer">
                    </div>
                    <div
                        class="fromBottom photo-animation bg-layer on-bottom">
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
<?php
    get_footer();
?>