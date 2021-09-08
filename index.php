<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <title>RC Web</title>

    <script src="https://kit.fontawesome.com/803e383e59.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/master.css">
  </head>
  <body>
      <header id="Top">
        <div class="flex">
          <nav id="topnav" class="navbar">
            <ul>
              <a class="nav-logo" href="#"><h1>RC Web</h1></a>
              <li><a class="active" href="#">Home</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a id="topnavToggle"><i class="fa fa-bars"></i></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" class="flex">
        <div id="hero-text" class="flex column">
          <h2 class="light">Launch Your Website Today!</h2>
          <p class="light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <span>
            <a class="btn" href="#">Learn More</a>
            <a class="btn btn-primary" href="#">Book Meeting</a>
          </span>
        </div>
        <div id="parallax-hover" class="">
          <img class="layer" data-speed="-1" src="assets/images/hero/parallax-hero2.png">
          <img class="layer" data-speed="-2" src="assets/images/hero/parallax-hero1.png">
          <img class="layer" data-speed="2" src="assets/images/hero/parallax-hero3.png">
        </div>
      </section>
      <br>
      <section id="services" class="flex">
        <div class="service">
          <div id="photography" class="top">

          </div>
          <div class="bottom">
            <h3>Photography</h3>
            <hr class="light">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="btn btn-primary" href="#">Learn More</a>
          </div>
        </div>

        <div class="service">
          <div id="graphic-design" class="top">

          </div>
          <div class="bottom">
            <h3>Graphic Design</h3>
            <hr class="light">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="btn btn-primary" href="#">Learn More</a>
          </div>
        </div>

        <div class="service">
          <div id="web-development" class="top">

          </div>
          <div class="bottom">
            <h3>Web Development</h3>
            <hr class="light">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a class="btn btn-primary" href="#">Learn More</a>
          </div>
        </div>
      </section>
      <br>

      <section id="contact" class="parallax-scroll">
        <div class="parallax-scroll-inner overlay">
          <div class="flex">
            <div class="tagline flex">
              <h1>Tagline telling you why you should contact us now.</h1>
            </div>
            <div id="contact-form">
              <form class="flex column" action="contact.php" method="post">
                <h2 class="mb-5">Contact Us Today!</h2>
                <div class="flex mb-5 labeled-input">
                  <label for="name">Name</label>
                  <input type="text" name="name" placeholder="Name" required>
                </div>
                <div class="flex mb-5 labeled-input">
                  <label for="name">Email</label>
                  <input type="text" name="email" placeholder="Email" required>
                </div>
                <div class="flex mb-5">
                  <select class="" name="service" required>
                    <option value="">Choose a Service</option>
                    <option value="Photography">Photography</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Web Development">Web Development</option>
                  </select>
                </div>
                <div class="flex mb-5">
                  <textarea name="description" rows="8" cols="40" required
                    placeholder="Tell us a bit about the job you need done."></textarea>
                </div>
                <div class="flex mb-5">
                  <select class="" name="outreach" required>
                    <option value="">How Did you hear of us?</option>
                    <option value="Fiverr">Fiverr</option>
                    <option value="Online Advertisement">Online Advertisement</option>
                    <option value="Internet Search">Internet Search</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                  </select>
                </div>
                <div class="">
                  <input type="submit" class="btn btn-primary" value="Send">
                </div>
              </form>
            </div>
          </div>
          <div id="footer">
            <a href="index.html" class="left brand"><h1>RC Web</h1></a>
            <a href="https://portal.hostgator.com/login" class="left link">Admin</a>
            <a href="#Top" class="right link">Top <i class="fas fa-arrow-alt-circle-up"></i></a>
          </div>
        </div>
      </section>


      <!-- Tools Section Unwanted
      <section id="tools" class="flex wrap">
        <div class="tool">
          <i class="fab fa-html5"></i>
          <h3>HTML</h3>
        </div>
        <div class="tool">
          <i class="fab fa-css3-alt"></i>
          <h3>CSS</h3>
        </div>
        <div class="tool">
          <i class="fab fa-js-square"></i>
          <h3>JavaScript</h3>
        </div>
        <div class="tool">
          <i></i>
          <h3>JQuery</h3>
        </div>

        <div class="tool">
          <i class="fab fa-php"></i>
          <h3>PHP</h3>
        </div>
        <div class="tool">
          <i class="fas fa-database"></i>
          <h3>SQL</h3>
        </div>
        <div class="tool">
          <i class="fab fa-html5"></i>
          <h3>Database</h3>
        </div>
        <div class="tool">
          <i class="fab fa-html5"></i>
          <h3>Host Gator</h3>
        </div>
      </section>
      End Of Tool Section-->

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <script src="js/ResponsiveNav.js"></script>
    <script src="js/ParallaxHover.js"></script>
    <?php
    if(isset($_GET['sent']))
    echo "<SCRIPT>
            alert('Your message has been sent. We will get back to you as soon as possible.');
          </SCRIPT>";
    ?>
  </body>
</html>