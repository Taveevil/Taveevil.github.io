<?php
include "libraries/config.php";
include "libraries/functions.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="<?php echo $template_url ?>img/tav-white.svg">
    <link rel="stylesheet" href="<?php echo $template_url ?>css/styles.css">
    <link rel="stylesheet" href="https://use.typekit.net/jnq1nwn.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <?php
    if (get_link() == 'index') {
        echo '<title> Welcome! </title>';
    } else {
        echo '<title>' . ucfirst(get_link()) . '</title>';
    }
    ?>
</head>

<body>
    <div class="loading-screen">
        <div class="solid layer-1 active"></div>
        <div class="solid layer-2 active"></div>
        <div class="solid layer-3 active"></div>
    </div>

    <nav class="autohide navbar navbar-expand-lg">
        <div id="navigation" class="container-fluid g-0">
            <div class="nav-title">
                <a href="index.php"><img src="<?php echo $template_url ?>img/tav-black.svg"></a>
            </div>
            <button class="hamburger-icon navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#nav-links">
                <div class="h-icon">
                    <span class="icon-bar top-bar"></span>
                    <span class="icon-bar middle-bar"></span>
                    <span class="icon-bar bottom-bar"></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="nav-links">
                <div class="links">
                    <a class="projects nav-link <?php if (current_url() == $site_url . "projects.php") {
                        echo "active";
                    } ?>"
                        href="projects.php">projects</a>
                    <a class="gallery nav-link <?php if (current_url() == $site_url . "gallery.php") {
                        echo "active";
                    } ?>"
                        href="gallery.php">gallery</a>
                    <a class="about nav-link <?php if (current_url() == $site_url . "about.php") {
                        echo "active";
                    } ?>"
                        href="about.php">about</a>
                </div>
            </div>
        </div>
    </nav>
    <div class="dummy-navbar navbar"></div>