<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">YOU ARE HERE</li>
      <li class="breadcrumb-item active">Time Line</li>
    </ol>
    <h1 class="page-title">Events - <span class="fw-semi-bold">Feed</span></h1>

    <ul class="timeline">
      <li class="onLeft">
        <time class="eventTime" dateTime="2014-05-19 03:04">
          <span class="date">yesterday</span>
          <span class="time">8:03 <span class="fw-semi-bold">pm</span></span>
        </time>
        <span class="eventIcon eventIconSuccess">
          <i class="glyphicon glyphicon-map-marker" />
        </span>
        <section class="event">
          <span class="thumb-sm avatar pull-left mr-sm">
            <img class="rounded-circle" src="../../../assets/people/a2.jpg" alt="..." />
          </span>
          <h4 class="eventHeading"><a href="#">Jessica Nilson</a>
            <small> @jess</small>
          </h4>
          <p class="fs-sm text-muted">10:12 am - Publicly near Minsk</p>
          <div class="eventMap">
            <GmapMap
              :center="{lat: 51, lng: 7}"
              :zoom="8"
              style="width: 100%; height: inherit"
            >
            <GmapMarker
              :position="{lat: 51, lng: 7}"
            />
            </GmapMap>
          </div>
          <footer>
            <ul class="postLinks">
              <li><a href="#">1 hour</a>
              </li>
              <li><a href="#"><span class="text-danger">
                <i class="fa fa-heart" /> Like
              </span></a></li>
              <li><a href="#">Comment</a></li>
            </ul>
            <ul class="postComments">
              <li>
                <span class="thumb-xs avatar pull-left mr-sm">
                  <img class="rounded-circle" src="../../../assets/people/a2.jpg" alt="..." />
                </span>
                <div class="commentBody">
                  <h6 class="author fs-sm fw-semi-bold">Radrigo Gonzales
                    <small>7 mins ago</small>
                  </h6>
                  <p>Someone said they were the best people out there just few years ago. Don't know
                    better options.</p>
                </div>
              </li>
              <li>
                <span class="thumb-xs avatar pull-left mr-sm">
                  <img class="rounded-circle" src="../../../assets/people/a4.jpg" alt="..." />
                </span>
                <div class="commentBody">
                  <h6 class="author fs-sm fw-semi-bold">Ignacio Abad
                    <small>6 mins ago</small>
                  </h6>
                  <p>True. Heard absolutely the same.</p>
                </div>
              </li>
              <li>
                <span class="thumb-xs avatar pull-left mr-sm">
                  <img class="rounded-circle" src="../../../assets/avatar.png" alt="..." />
                </span>
                <div class="commentBody">
                  <b-form-input size="sm" placeholder="Write your comment..." />
                </div>
              </li>
            </ul>
          </footer>
        </section>
      </li>

      <li>
        <time class="eventTime" dateTime="2014-05-19 03:04">
          <span class="date">today</span>
          <span class="time">9:41 <span class="fw-semi-bold">am</span></span>
        </time>
        <span class="eventIcon eventIconPrimary">
          <i class="glyphicon glyphicon-comments" />
        </span>
        <section class="event">
          <span class="thumb-xs avatar pull-left mr-sm">
            <img class="rounded-circle" src="../../../assets/people/a5.jpg" alt="..." />
          </span>
          <h5 class="eventHeading"><a href="#">Bob Nilson</a>
            <small><a href="#"> @nils</a></small>
          </h5>
          <p class="fs-sm text-muted">February 22, 2014 at 01:59 PM</p>
          <p class="fs-mini">
            There is no such thing as maturity. There is
            instead an ever-evolving process of maturing.
            Because when there is a maturity, there is ...
          </p>
          <footer>
            <ul class="postLinks">
              <li><a href="#">1 hour</a></li>
              <li><a href="#"><span class="text-danger">
                <i class="fa fa-heart" /> Like
              </span></a></li>
              <li><a href="#">Comment</a></li>
            </ul>
          </footer>
        </section>
      </li>
      <li class="onLeft">
        <time class="eventTime" dateTime="2014-05-19 03:04">
          <span class="date">yesterday</span>
          <span class="time">9:03 <span class="fw-semi-bold">am</span></span>
        </time>
        <span class="eventIcon eventIconDanger">
          <i class="glyphicon glyphicon-cutlery" />
        </span>
        <section class="event">
          <h5 class="eventHeading"><a href="#">Jessica Smith</a>
            <small> @jess</small>
          </h5>
          <p class="fs-sm text-muted">February 22, 2014 at 01:59 PM</p>
          <p class="fs-mini">
            Check out this awesome photo I made in Italy last
            summer. Seems it was lost somewhere deep inside
            my brand new HDD 40TB. Thanks god I found it!
          </p>
          <div class="eventImage">
            <a :href="image">
              <img :src="image" alt="..." />
            </a>
          </div>
          <footer>
            <div class="clearfix">
              <ul class="postLinks mt-sm pull-left">
                <li><a href="#">1 hour</a></li>
                <li>
                  <a href="#">
                    <span class="text-danger">
                      <i class="fa fa-heart-o" /> Like
                    </span>
                  </a>
                </li>
                <li><a href="#">Comment</a></li>
              </ul>

              <span class="thumb thumb-sm pull-right">
                <a href="#">
                  <img class="rounded-circle" src="../../../assets/people/a1.jpg" alt="..." />
                </a>
              </span>
              <span class="thumb thumb-sm pull-right">
                <a href="#">
                  <img class="rounded-circle" src="../../../assets/people/a5.jpg" alt="..." />
                </a>
              </span>
              <span class="thumb thumb-sm pull-right">
                <a href="#">
                  <img class="rounded-circle" src="../../../assets/people/a3.jpg" alt="..." />
                </a>
              </span>
            </div>
            <ul class="postComments mt-sm">
              <li>
                <span class="thumb-xs avatar pull-left mr-sm">
                  <img class="rounded-circle" src="../../../assets/people/a1.jpg" alt="..." />
                </span>
                <div class="commentBody">
                  <h6 class="author fs-sm fw-semi-bold">Ignacio Abad
                    <small>6 mins ago</small>
                  </h6>
                  <p>Hey, have you heard anything about that?</p>
                </div>
              </li>
              <li>
                <span class="thumb-xs avatar pull-left mr-sm">
                  <img class="rounded-circle" src="../../../assets/avatar.png" alt="..." />
                </span>
                <div class="commentBody">
                  <b-form-input size="sm" placeholder="Write your comment..." />
                </div>
              </li>
            </ul>
          </footer>
        </section>
      </li>
      <li>
        <time class="eventTime" dateTime="2014-05-19 03:04">
          <span class="date">yesterday</span>
          <span class="time">9:03 <span class="fw-semi-bold">am</span></span>
        </time>
        <span class="eventIcon">
          <img class="rounded-circle" src="../../../assets/avatar.png" alt="..." />
        </span>
        <section class="event">
          <span class="thumb-xs avatar pull-left mr-sm">
            <img class="rounded-circle" src="../../../assets/people/a6.jpg" alt="..." />
          </span>
          <h5 class="eventHeading"><a href="#">Jessica Smith</a>
            <small> @jess</small>
          </h5>
          <p class="fs-sm text-muted">9:03 am - Publicly near Minsk</p>
          <h5>New <span class="fw-semi-bold">Project</span> Launch</h5>
          <p class="fs-mini">
            Let's try something different this time. Hey, do you wanna join us tonight?
            We're planning to a launch a new project soon. Want to discuss with all of you...
          </p>
          <a class="mt-n-xs fs-mini text-muted" href="#">Read more...</a>
          <footer>
            <ul class="postLinks">
              <li><a href="#">1 hour</a></li>
              <li><a href="#">
                <span class="text-danger">
                  <i class="fa fa-heart-o" /> Like
                </span>
              </a></li>
              <li><a href="#">Comment</a></li>
            </ul>
          </footer>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
import image from '../../../assets/search/8.jpg';

export default {
  name: 'Timeline',
  data() {
    return {
      image,
    };
  },
};
</script>

<style src="./Timeline.scss" lang="scss" scoped />
