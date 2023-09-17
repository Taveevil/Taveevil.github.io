<?php
include "template/header.php";
?>
<div id="home" class="container-fluid">
    <div class="opening-title">
        <h4>Hi there! my name is Tavee Villamar or you can call me...</h4>
    </div>
    <div class="animations">
        <video id="opening-animation" autoplay muted playsinline>
            <img src="<?php echo $template_url ?>img/logo-loop.gif" alt="my personal logo and name TAV">
        </video>
        <div class="scroll">
            <p class="marquee">
                <span>BASED IN WINNIPEG, MANITOBA
                </span>
            </p>
            <p class="marquee reverse">
                <span>BASED IN WINNIPEG, MANITOBA
                </span>
            </p>
        </div>
    </div>
    <div class="buttons">
        <a href="projects.php" id="work-button" class="solid-button">See my work</a>
        <a href="about.php" id="about-button" class="border-button">Get to know me</a>
    </div>
    <h2>My latest projects!</h2>
    <div class="latest-projects row">
        <div class="col-md-3 thumbnail">
            <a href="chris-clicker.php" method="get">
                <img class="thumb-img" src="<?php echo $projects_url ?>chris-clicker/chris-clicker-thumbnail.png"
                    alt="Chris clicker logo with the faces of the chris' in the game">
                <div class="thumb-copy">
                    <h4>Chris Clicker</h4>
                    <p>2023 - April</p>
                    <div class="thumb-description">
                        <p>A project I developed with a partner for my programming logic class</p>
                    </div>
                </div>
                </img>
            </a>
        </div>
        <div class="col-md-3 thumbnail">
            <a href="aroma-bistro.php">
                <img class="thumb-img" src="<?php echo $projects_url ?>aroma-bistro/aroma-bistro-thumbnail.png"
                    alt="Aroma bistro thumbnail with the logo in the center">
                <div class="thumb-copy">
                    <h4>Aroma Bistro web design</h4>
                    <p>2023 - March</p>
                    <div class="thumb-description">
                        <p>A project I designed for my webdesign 2 class</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-3 thumbnail">
            <a href="pleasant-valley.php">
                <img class="thumb-img" src="<?php echo $projects_url ?>pleasant-valley/pleasant-valley-thumbnail.png"
                    alt="Pleasant valley logo">
                <div class="thumb-copy">
                    <h4>Deep dish delivery</h4>
                    <p>2021 - April</p>
                    <div class="thumb-description">
                        <p>Ludum Dare 48 entry</p>
                    </div>
                </div>
                </img>
            </a>
        </div>
    </div>
</div>

<?php include "template/footer.php" ?>