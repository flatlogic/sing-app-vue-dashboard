<template>
  <div>
    <b-breadcrumb>
      <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
      <b-breadcrumb-item active>Profile</b-breadcrumb-item>
    </b-breadcrumb>
    <h1 class="page-title">User - <span class="fw-semi-bold">Profile</span>
    </h1>
    <b-row>
      <b-col lg="6" xs="12">
        <Widget>
          <div class="widget-top-overflow text-white">
            <div class="height-250 overflow-hidden">
              <img class="img-fluid" src="../../assets/pictures/19.jpg" alt="..." />
            </div>
            <a href="#" class="btn btn-outline btn-sm mb-2">
              <i class="fa fa-twitter mr-2" />
              Follow
            </a>
          </div>
          <b-row>
            <b-col md="5" xs="12" class="text-center">
              <div class="profileContactContainer">
                <span class="thumb-xl mb-3">
                  <img class="profileAvatar rounded-circle"
                    src="../../assets/people/a5.jpg" alt="..." />
                </span>
                <h5 class="fw-normal">Adam <span class="fw-semi-bold">Johns</span></h5>
                <p>UI/UX designer</p>
                <a href="#" class="btn btn-danger btn-sm mb-3">
                  &nbsp;Send
                  <i class="fa fa-envelope ml-2" />&nbsp;
                </a>
                <div>
                  <ul class="profileContacts mt-sm">
                    <li>
                      <i class="fa fa-lg fa-phone fa-fw mr-2" /><a href="#"> +375 29 555-55-55</a>
                    </li>
                    <li>
                      <i class="fa fa-lg fa-envelope fa-fw mr-2" />
                      <a href="#"> psmith@example.com</a>
                    </li>
                    <li>
                      <i class="fa fa-lg fa-map-marker fa-fw mr-2" /><a href="#"> Minsk, Belarus</a>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>
            <b-col md="7" xs="12">
              <div class="stats-row mt-3">
                <div class="profileStat stat-item">
                  <p class="profileStatValue value text-right">251</p>
                  <h6 class="name">Posts</h6>
                </div>
                <div class="profileStat stat-item">
                  <p class="profileStatValue value text-right">9.38%</p>
                  <h6 class="name">Conversion</h6>
                </div>
                <div class="profileStat stat-item">
                  <p class="profileStatValue value text-right">842</p>
                  <h6 class="name">Followers</h6>
                </div>
              </div>
              <p>
                <a href="#" class="badge badge-warning rounded-0"> UI/UX </a>
                <a href="#" class="badge badge-danger rounded-0 ml-2"> Web Design </a>
                <a href="#" class="badge badge-default rounded-0 ml-2"> Mobile Apps </a>
              </p>
              <p class="lead mt-xlg">
                My name is Adam Johns and here is my new Sing user profile page.
              </p>
              <p class="text-muted">
                I love reading people&apos;s summaries page especially
                those who are in the same industry as me.
                Sometimes it&apos;s much easier to find your concentration during the night.
              </p>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
      <b-col lg="6" xs="12">
        <section class="activities">
          <h2 class="ml-3">Activities</h2>
          <section class="event">
            <header>
              <span class="eventAvatar">
                <img class="rounded-circle" src="../../assets/people/a5.jpg" alt="..." />
              </span>
              <h5 class="eventTitle">
                <a href="#">Bob Nilson</a> <small><a href="#">@nils</a></small>
              </h5>
              <p class="eventTimestamp">February 22, 2014 at 01:59 PM</p>
            </header>
            <div class="eventBody">
              There is no such thing as maturity. There is instead
              an ever-evolving process of maturing.
              Because when there is a maturity, there is ...
            </div>
            <footer class="eventFooter">
              <ul class="post-links">
                <li><a href="#">1 hour</a></li>
                <li><a href="#">
                  <span class="text-danger"><i class="fa fa-heart" /> Like</span>
                </a></li>
                <li><a href="#">Comment</a></li>
              </ul>
            </footer>
          </section>
          <section class="event">
            <header>
              <h5 class="eventTitle"><a href="#">Jessica Smith</a> <small>@jess</small></h5>
              <p class="eventTimestamp">February 22, 2014 at 01:59 PM</p>
            </header>
            <div class="eventBody">
              Check out this awesome photo I made in Italy last summer.
              Seems it was lost somewhere deep inside
              my brand new HDD 40TB. Thanks god I found it!
            </div>
            <footer class="eventFooter">
              <div class="clearfix">
                <ul class="post-links mt-sm pull-left">
                  <li><a href="#">1 hour</a></li>
                  <li><a href="#">
                    <span class="text-danger"><i class="fa fa-heart-o" /> Like</span>
                  </a></li>
                  <li><a href="#">Comment</a></li>
                </ul>

                <span class="thumb thumb-sm pull-right">
                  <a href="#">
                    <img class="rounded-circle" alt="..." src="../../assets/people/a1.jpg" />
                  </a>
                </span>
                <span class="thumb thumb-sm pull-right">
                  <a href="#"><img class="rounded-circle"
                    alt="..." src="../../assets/people/a5.jpg" /></a>
                </span>
                <span class="thumb thumb-sm pull-right">
                  <a href="#"><img class="rounded-circle"
                    alt="..." src="../../assets/people/a3.jpg" /></a>
                </span>
              </div>
              <ul class="post-comments mt-sm">
                <li>
                  <span class="thumb-xs avatar pull-left mr-sm">
                    <img class="rounded-circle" src="../../assets/people/a1.jpg" alt="..." />
                  </span>
                  <div class="comment-body">
                    <h6 class="author fs-sm fw-semi-bold">
                      Ignacio Abad <small>6 mins ago</small>
                    </h6>
                    <p>Hey, have you heard anything about that?</p>
                  </div>
                </li>
                <li>
                  <span class="thumb-xs avatar pull-left mr-sm">
                    <img class="rounded-circle" src="../../assets/avatar.png" alt="..." />
                  </span>
                  <div class="comment-body">
                    <b-form-input class="form-control form-control-sm"
                     type="text" placeholder="Write your comment..." />
                  </div>
                </li>
              </ul>
            </footer>
          </section>
          <b-form class="mt" action="#">
            <b-form-group class="mb-2">
              <Label class="sr-only" for="new-event">New event</Label>
              <b-form-textarea type="textarea"
                id="new-event" placeholder="Post something..." :rows="3" />
            </b-form-group>
            <div class="btn-toolbar">
              <div class="btn-group">
                <a href="#" class="btn btn-sm btn-default">
                  <i class="fa fa-camera fa-lg" />
                </a>
                <a href="#" class="btn btn-sm btn-default">
                  <i class="fa fa-map-marker fa-lg" />
                </a>
              </div>
              <b-button variant="danger" size="sm" type="submit" class="btn ml-auto">Post</b-button>
            </div>
          </b-form>
        </section>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Profile',
  components: { Widget },
};
</script>

<style src="./Profile.scss" lang="scss" scoped />
