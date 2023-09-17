<?php include "template/header.php" ?>

    <div id="about-me" class="container">
        <div  class="row">
            <div id="about-content" class="col-md-8 col-sm-12">
                <div class="section">
                    <div class="title">
                        <h1>Hello!</h1>
                    </div>
                    <p>
                        My name is Tavee Villamar and I am a DMD student at Red River Polytechnic, looking to enter
                        second-year DMD web & interactive design. I am also the art director for the indie dev
                        group, Site12.
                    </p>
                    <p>
                        I believe that creativity and innovation are key elements in creating meaningful designs. I
                        try to challenge myself as much as possible by learning new techniques and exploring design
                        trends.
                    </p>
                    <div class="seperator"></div>
                    <div class="list">
                        <div class="list-1">
                            <ul>
                                <li><a href="<?php echo $template_url ?>Resume_EdwardVillamar.pdf" target="_blank" class="external"><i class="fa-solid fa-paperclip"></i>My Resume</a></li>
                                <li><a href="mailto:hello@tavee.ca" target="_blank" class="external"><i class="fa-solid fa-envelope"></i> hello@tavee.ca</a></li>
                                <li><a href="https://www.linkedin.com/in/edward-villamar-0317541a1/" target="_blank" class="external"><i class="fa-solid fa-brands fa-linkedin"></i> Tavee Villamar</a></li>
                            </ul>
                        </div>
                        <div class="list-2">
                            <ul>
                                <li><a href="https://www.youtube.com/@taveevil" target="_blank" class="external"><i class="fa-solid fa-brands fa-youtube"></i>@Taveevil</a></li>
                                <li><a target="_blank" href="https://twitter.com/Taveevil" class="external"><i class="fa-solid fa-brands fa-twitter"></i> @Taveevil</a></li>
                                <li><a href="https://www.tiktok.com/@tavevil" target="_blank" class="external"><i class="fa-solid fa-brands fa-tiktok"></i> @Taveevil</a></li>
                                <li><a href="https://www.instagram.com/tavee.jpg/" target="_blank" class="external"><i class="fa-solid fa-brands fa-instagram"></i> @Tavee.jpg</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact col-md-4 col-sm-12">
                <img id="me-picture" src="<?php echo $template_url ?>img/me.jpg">
                <h2>Say hi!</h2>
                <form action="https://getform.io/f/9d98ab38-e3ba-47cc-86e5-4204a3faba4d" method="POST">
                    <div class="contact-form">
                        <input type="email" name="email" placeholder="Your e-mail" required/>
                        <textarea name="message" placeholder="What do you want to talk about?" required></textarea>
                        <input type="submit" name="submit" value="Send!" />
                    </div>
                </form>
            </div>
        </div>
    </div>

<?php include "<?php echo $template_url ?>footer.php?"?>