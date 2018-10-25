<!-- <?php sleep(2) //just some delay to simulate latency ?> -->
<ul class="news-list stretchable">
    <li class="animated fadeInDown bg-warning-light">
        <span class="icon bg-warning text-white">
            <i class="fa fa-lock"></i>
        </span>
        <div class="news-item-info">
            <h5 class="name no-margin mb-xs"><a href="#">Just now! Check update time</a></h5>
            <p class="fs-mini">
                Check this news item timestamp. There is a small server part that generates current timestamp so it
                would be easier for you to see ajax widgets in action
            </p>
            <time class="help-block"><?php  echo date("M j, H:i:s")?></time>
        </div>
    </li>
    <li>
        <span class="icon bg-danger text-white">
            <i class="fa fa-star"></i>
        </span>
        <div class="news-item-info">
            <h5 class="name no-margin mb-xs"><a href="#">First Human Colony on Mars</a></h5>
            <p class="fs-mini">
                First 700 people will take part in building first human settlement outside of Earth.
                That's awesome, right?
            </p>
            <time class="help-block">Mar 20, 18:46</time>
        </div>
    </li>
    <li>
        <span class="icon bg-info text-white">
            <i class="fa fa-microphone"></i>
        </span>
        <div class="news-item-info">
            <h5 class="name no-margin mb-xs"><a href="#">Light Blue reached $300</a></h5>
            <p class="fs-mini">
                Light Blue Inc. shares just hit $300 price. "This was inevitable. It should
                have happen sooner or later" - says NYSE expert.
            </p>
            <time class="help-block">Sep 25, 11:59</time>
        </div>
    </li>
    <li>
        <span class="icon bg-success text-white">
            <i class="fa fa-eye"></i>
        </span>
        <div class="news-item-info">
            <h5 class="name no-margin mb-xs"><a href="#">No more spying</a></h5>
            <p class="fs-mini">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
            <time class="help-block">Mar 20, 18:46</time>
        </div>
    </li>
</ul>
