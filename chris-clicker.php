<?php include "template/header.php" ?>
    <div id="chris-clicker-content" class="container-fluid g-0">
        <div class="row hero g-0">
            <img src="<?php echo $template_url ?>img/projects/chris-clicker/chris-clicker-hero.png" alt="hero image of the title of the game and the three"/>
        </div>
        <div class="project-content container">
        <div class="project-header row g-0">
            <h1 class="project-title">CHRIS CLICKER</h1>
            <h2 class="project-subtitle">Role: Designing and programming</h2>
            <p>This project was an assignment handed in for my programming logic class. In this
            assignment, a partner and I were tasked with creating some sort of interactive website with the knowledge we gained
            throughout the term.</p>
            <p>We came up with the idea to make a "cookie clicker" esque game using our teachers. All of whom are named "Chris"
                and hence "Chris clicker.</p>
            <a class="col-md-6 col-sm-12 visit-link solid-button external" href="chris-clicker-game.php" target="_blank">You can try the game
                here!</a>
        </div>
        <div class="project-body row g-0">
        <div class="project-block">
            <h2 class="project-subtitle">The Chris's:</h2>
            <video autoplay muted loop>
                <source src="<?php echo $template_url ?>img/projects/chris-clicker/chris-clicker-intro.mp4">
            </video>
        </div>
        <div class="project-block">
            <h2 class="block-subtitle">The mechanics</h2>
            <p>Collect as many "Chris coins" you can by clicking on the Chris' as fast as possible!</p>
            <video controls="controls" class="video">
                <source src="<?php echo $template_url ?>img/projects/chris-clicker/chris-clicker-gameplay.mp4">
            </video>
        </div>
        <div class="project-block">
            <h2 class="block-subtitle">The upgrades</h2>
            <p>Buy fun Chris themed upgrades that'll help you rack up more Chris coins!</p>
            <video controls="controls" class="video">
                <source src="<?php echo $template_url ?>img/projects/chris-clicker/chris-clicker-upgrades.mp4">
            </video>
        </div>
        <div class="project-block">
            <h2 class="block-subtitle">BONUS MODE</h2>
            <p>Every so often you'll enter the BONUS MODE and earn more coins within a certain amount of time. So get clicking!</p>
            <video controls="controls" class="video">
                <source src="<?php echo $template_url ?>img/projects/chris-clicker/chris-clicker-bonus.mp4">
            </video>
        </div>
        <div class="project-block">
            <h2 class="block-subtitle">Don't stop!</h2>
            <p>Chris will remind you to keep going! So that you get the highest amount of Chris coins possible</p>
            <video controls="controls" class="video">
                <source src="<?php echo $template_url ?>img/projects/chris-clicker/chris-clicker-afk.mp4">
            </video>
        </div>
        <a class="col-12 solid-button external" href="chris-clicker-game.php" target="_blank">Try the game now!</a>
        </div>
        
        <div class="project-buttons">
            <a href="" style="opacity: 0; cursor:default;">prev</a>
            <a href="projects.php">go back</a>
            <a href="aroma-bistro.php">next</a>
        </div>
        </div>
    </div>

<?php include "template/footer.php" ?>