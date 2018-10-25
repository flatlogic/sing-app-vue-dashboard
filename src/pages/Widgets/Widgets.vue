<template>
  <div class="widgets-page">
    <b-row>
      <b-col lg="3" md="6" xs="12">
        <Widget>
          <div class="clearfix">
            <b-row class="flex-nowrap">
              <b-col xs="3">
                <span class="widget-icon">
                  <i class="glyphicon glyphicon-globe text-primary" />
                </span>
              </b-col>
              <b-col xs="9">
                <h6 class="m-0">USERS GROWTH</h6>
                <p class="h2 m-0 fw-normal">4,332</p>
              </b-col>
            </b-row>
            <b-row class="flex-nowrap">
              <b-col xs="6">
                <h6 class="m-0">Registrations</h6>
                <p class="value5">+830</p>
              </b-col>
              <b-col xs="6">
                <h6 class="m-0">Bounce Rate</h6>
                <p class="value5">4.5%</p>
              </b-col>
            </b-row>
          </div>
        </Widget>
      </b-col>
      <b-col lg="3" md="6" xs="12">
        <Widget>
          <div class="clearfix">
            <b-row class="flex-nowrap">
              <b-col xs="3">
                <span class="widget-icon">
                  <i class="glyphicon glyphicon-user text-info" />
                </span>
              </b-col>
              <b-col xs="9">
                <LiveTile :options="{
                  'data-mode': 'carousel',
                  'data-speed': '750',
                  'data-delay': '3000',
                  'data-height': '57'
                }"
                >
                  <div>
                    <h6 class="m-0">VISITS TODAY</h6>
                    <p class="h2 m-0 fw-normal">12,324</p>
                  </div>
                  <div>
                    <h6 class="m-0">VISITS YESTERDAY</h6>
                    <p class="h2 m-0 fw-normal">11,885</p>
                  </div>
                </LiveTile>
              </b-col>
            </b-row>
            <b-row class="flex-nowrap">
              <b-col xs="6">
                <h6 class="m-0">New Visitors</h6>
                <LiveTile :options="{
                  'data-mode': 'carousel',
                  'data-speed': '750',
                  'data-delay': '3000',
                  'data-height': '25'
                }"
                >
                  <div>
                    <p class="value5">1,332</p>
                  </div>
                  <div>
                    <p class="value5">20.1%</p>
                  </div>
                </LiveTile>
              </b-col>
              <b-col xs="6">
                <h6 class="m-0">Bounce Rate</h6>
                <LiveTile :options="{
                  'data-mode': 'carousel',
                  'data-speed': '750',
                  'data-delay': '3000',
                  'data-height': '26'
                }"
                >
                  <div>
                    <p class="value5">217</p>
                  </div>
                  <div>
                    <p class="value5">2.3%</p>
                  </div>
                </LiveTile>
              </b-col>
            </b-row>
          </div>
        </Widget>
      </b-col>
      <b-col lg="3" md="6" xs="12">
        <Widget>
          <div class="clearfix">
            <LiveTile :options="{
              'data-mode': 'fade',
              'data-speed': '750',
              'data-delay': '3000',
              'data-height': '104'
            }"
            >
              <div class="bg-white text-gray">
                <b-row class="flex-nowrap">
                  <b-col xs="3">
                    <span class="widget-icon">
                      <i class="glyphicon glyphicon-globe" />
                    </span>
                  </b-col>
                  <b-col xs="9">
                    <h6 class="m-0">ORDERS</h6>
                    <p class="h2 m-0 fw-normal">82,765</p>
                  </b-col>
                </b-row>
                <b-row class="flex-nowrap">
                  <b-col xs="6">
                    <h6 class="m-0">Avg. Time</h6>
                    <p class="value5">2:56</p>
                  </b-col>
                  <b-col xs="6">
                    <h6 class="m-0">Last Week</h6>
                    <p class="value5">374</p>
                  </b-col>
                </b-row>
              </div>
              <div class="text-gray">
                <b-row class="flex-nowrap">
                  <b-col xs="3">
                    <span class="widget-icon">
                      <i class="glyphicon glyphicon-certificate" />
                    </span>
                  </b-col>
                  <b-col xs="9">
                    <h6 class="m-0">PICKED ORDERS</h6>
                    <p class="h2 m-0 fw-normal">13.8%</p>
                  </b-col>
                </b-row>
                <b-row class="flex-nowrap">
                  <b-col xs="6">
                    <h6 class="m-0">Basic</h6>
                    <p class="value5">3,692</p>
                  </b-col>
                  <b-col xs="6">
                    <h6 class="m-0">Advanced</h6>
                    <p class="value5">1,441</p>
                  </b-col>
                </b-row>
              </div>
            </LiveTile>
          </div>
        </Widget>
      </b-col>
      <b-col lg="3" md="6" xs="12">
        <Widget>
          <div class="clearfix">
            <b-row class="flex-nowrap">
              <b-col xs="3">
                <span class="widget-icon">
                  <i class="glyphicon glyphicon-usd text-success" />
                </span>
              </b-col>
              <b-col xs="9">
                <h6 class="m-0">TOTAL PROFIT</h6>
                <p class="h2 m-0 fw-normal">$7,448</p>
              </b-col>
            </b-row>
            <b-row class="flex-nowrap">
              <b-col xs="6">
                <h6 class="m-0">Last Month</h6>
                <p class="value5">$83,541</p>
              </b-col>
              <b-col xs="6">
                <h6 class="m-0">Last Week</h6>
                <p class="value5">$17,926</p>
              </b-col>
            </b-row>
          </div>
        </Widget>
      </b-col>
    </b-row>
    <FlotCharts />
    <b-row>
      <b-col lg='4' xs='12'>
        <Widget refresh close bodyClass="mt-0">
          <div class="widget-top-overflow widget-padding-md clearfix bg-warning text-white">
            <h3 class="mt-lg mb-lg">Sing - <span class="fw-semi-bold">Next Generation</span> Admin
              Dashboard
              Template</h3>
            <ul class="tags text-white pull-right">
              <li><a href="#">features</a></li>
            </ul>
          </div>
          <div class="post-user mt-negative-lg">
            <span class="thumb-lg pull-left mr mt-n-sm">
              <img class="rounded-circle" src='../../assets/people/a4.jpg' alt="..." />
            </span>
            <h6 class="m-b-1 fw-normal text-white">Jeremy &nbsp;
              <small class="text-white text-light">@sing</small>
            </h6>
            <p class="fs-mini text-muted">
              <time>25 mins</time>
              &nbsp; <i class="fa fa-map-marker" /> &nbsp; near Amsterdam
            </p>
          </div>
          <p class="text-light fs-mini mt-lg">
            Lots of cool stuff is happening around you. Just calm down for a sec
            and listen. Colors, sounds,
            thoughts, ideas.
          </p>
          <footer class="bg-body-light">
            <ul class="post-links">
              <li><a href="#">1 hour</a></li>
              <li>
                <a href="#"><span class="text-danger">
                  <i class="fa fa-heart" /> Like</span>
                </a></li>
              <li><a href="#">Comment</a></li>
            </ul>
            <ul class="post-comments mb-0 mt-2">
              <li>
                <span class="thumb-xs avatar pull-left mr-sm">
                  <img class="rounded-circle" src='../../assets/people/a1.jpg' alt="..." />
                </span>
                <div class="comment-body">
                  <h6 class="author fs-sm fw-semi-bold">Ignacio Abad&nbsp;
                    <small>6 mins ago</small>
                  </h6>
                  <p class="fs-mini">Hey, have you heard anything about that?</p>
                </div>
              </li>
              <li>
                <span class="thumb-xs avatar pull-left mr-sm">
                  <img class="rounded-circle" src='../../assets/avatar.png' alt="..." />
                </span>
                <div class="comment-body">
                  <input
                    class="form-control form-control-sm" type="text"
                    placeholder="Write your comment..."
                  />
                </div>
              </li>
            </ul>
          </footer>
        </Widget>
      </b-col>
      <b-col lg='4' xs='12'>
        <Widget refresh close bodyClass="mt-0">
          <div>
            <div class="widget-top-overflow text-white">
              <img src='../../assets/pictures/17.jpg' alt="..." />
              <ul class="tags text-white pull-right">
                <li><a href="#">design</a></li>
                <li><a href="#">white</a></li>
              </ul>
            </div>
            <div class="post-user mt-sm">
              <span class="thumb pull-left mr mt-n-sm">
                <img class="rounded-circle" src='../../assets/people/a6.jpg' alt="..." />
              </span>
              <h6 class="mb-xs mt"><span class="fw-semi-bold">Maryna</span> Nilson</h6>
              <p class="fs-mini text-muted">
                <time>25 mins</time>
                &nbsp; <i class="fa fa-map-marker" /> &nbsp; near Amsterdam
              </p>
            </div>
            <p class="text-light fs-mini m">
              Lots of cool stuff is happening around you. Just calm down for a sec
              and listen. Colors, sounds,
              thoughts, ideas. </p>
          </div>
          <footer class="bg-body-light">
            <ul class="post-links no-separator">
              <li><a href="#"><span class="text-danger">
                <i class="fa fa-heart" /> 427
              </span></a></li>
              <li><a href="#"><i class="glyphicon glyphicon-comment" /> 98</a></li>
            </ul>
          </footer>
        </Widget>
      </b-col>
      <b-col lg='4' xs='12'>
        <Widget refresh close>
          <div>
            <div class="post-user mt-n-xs">
              <span class="thumb pull-left mr mt-n-sm">
                <img class="rounded-circle" src='../../assets/people/a2.jpg' alt="..." />
              </span>
              <h6 class="mb-xs mt-xs">Jess <span class="fw-semi-bold">@jessica</span></h6>
              <p class="fs-mini text-muted">
                <time>25 mins</time>
                &nbsp; <i class="fa fa-map-marker" /> &nbsp; near Amsterdam
              </p>
            </div>
            <div class="widget-middle-overflow widget-padding-md clearfix bg-danger text-white">
              <h3 class="mt-lg mb-lg">Sing - <span class="fw-semi-bold">Next Generation</span> Admin
                Dashboard
                Template</h3>
              <ul class="tags text-white pull-right">
                <li><a href="#">design</a></li>
              </ul>
            </div>
            <p class="text-light fs-mini mt-sm">
              Lots of cool stuff is happening around you. Just calm down for
              a sec and listen. Colors, sounds,
              thoughts, ideas. </p>
          </div>
          <footer class="bg-body-light">
            <ul class="post-links">
              <li><a href="#">1 hour</a></li>
              <li>
                <a href="#">
                  <span class="text-danger">
                    <i class="fa fa-heart" /> Like
                  </span>
                </a>
              </li>
              <li><a href="#">Comment</a></li>
            </ul>
          </footer>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg='6' xs='12'>
        <Widget bodyClass="mt-0">
          <div class="widget-image text-white">
            <img src='../../assets/pictures/18.jpg' alt="..." />
            <h4 class="title">
              <span class="fw-normal">Sunnyvale</span>, CA
            </h4>
            <div class="info text-right">
              <i class="fa fa-map-marker h1 m-0 mr-xs" />
              <h6 class="m-0 mt-xs">FLORIDA, USA</h6>
              <p class="fs-sm">9:41 am</p>
            </div>
            <div class="forecast">
              <div class="row">
                <div class="col-6 col-md-4">
                  <div class="row mt-xs">
                    <div class="col-6 p-0">
                      <Skycon icon="CLEAR_DAY" color="white"
                        :options="{ width: '40', height: '40' }" />
                      <p class="m-0 fw-normal mt-n-xs">sunny</p>
                    </div>
                    <div class="col-6 p-0">
                      <h6 class="fw-semi-bold m-0">SUNDAY</h6>
                      <p class="value1 ">29&deg;</p>
                    </div>
                  </div>
                </div>
                <div class="col-3 col-md-2 p-0">
                  <h6 class="m-0">TOMMOROW</h6>
                  <Skycon class="mt-1" icon="PARTLY_CLOUDY_DAY" color="white"
                    :options="{ width: '28', height: '28' }" />
                  <p class="m-0 fw-semi-bold">32&deg;</p>
                </div>
                <div class="col-3 col-md-2 p-0">
                  <h6 class="m-0">TUE</h6>
                  <Skycon class="mt-1" icon="RAIN" color="white"
                    :options="{ width: '28', height: '28' }" />
                  <p class="m-0 fw-semi-bold">25&deg;</p>
                </div>
                <div class="col-3 col-md-2 p-0">
                  <h6 class="m-0">WED</h6>
                  <Skycon class="mt-1" icon="CLEAR_DAY" color="#f0b518"
                    :options="{ width: '28', height: '28' }" />
                  <p class="m-0 fw-semi-bold">28&deg;</p>
                </div>
                <div class="col-3 col-md-2 p-0">
                  <h6 class="m-0">THU</h6>
                  <Skycon class="mt-1" icon="PARTLY_CLOUDY_DAY" color="white"
                    :options="{ width: '28', height: '28' }" />
                  <p class="m-0 fw-semi-bold">17&deg;</p>
                </div>
              </div>
            </div>
          </div>
        </Widget>
        <b-row>
          <b-col md='6' xs='12'>
            <Widget class="p-0 text-center">
              <b-row class="m-0">
                <div class="col-5 bg-danger btlr bblr">
                  <Skycon class="mt-3" icon="CLEAR_DAY" color="white"
                    :options="{ width: '62', height: '62' }" />
                  <h6 class="text-white fw-normal m-t-1">FRIDAY</h6>
                </div>
                <div class="col-7">
                  <p class="value0 text-danger mt-n-xs mr-n-xs">
                    33&deg;
                  </p>
                  <p class="mt-n-sm m-b-0 fw-normal fs-sm text-muted">WINDY</p>
                  <div class="row mt-n-xs mb-xs">
                    <div class="col-6 p-0">
                      <Skycon icon="WIND" color="#999" :options="{ width: '20', height: '20' }" />
                      <div class="d-inline-block ml-1">
                        <p class="value6">4</p>
                        <p class="fs-sm m-0 mt-n-xs text-muted fw-normal">MPS</p>
                      </div>
                    </div>
                    <div class="col-6 p-0">
                      <Skycon icon="RAIN" color="#999" :options="{ width: '20', height: '20' }" />
                      <div class="d-inline-block ml-1">
                        <p class="value6">52</p>
                        <p class="fs-sm m-0 mt-n-xs text-muted fw-normal">MM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </b-row>
            </Widget>
          </b-col>
          <b-col md='6' xs='12'>
            <Widget class="p-0 text-center">
              <div class="row m-0">
                <div class="col-7 bg-success btlr bblr">
                  <p class="value0 text-white mt-sm mr-n-xs">
                    20&deg;
                  </p>
                  <p class="text-white fw-normal d-inline-block mb">SUNDAY</p>
                </div>
                <div class="col-5">
                  <Skycon class="mt-3" icon="PARTLY_CLOUDY_DAY" color="#64bd63"
                    :options="{ width: '60', height: '60' }" />
                  <p class="fw-normal fs-sm text-muted">WINDY</p>
                </div>
              </div>
            </Widget>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg='6' xs='12'>
        <b-row>
          <b-col md='6' xs='12'>
            <Widget class="widget-sm">
              <h6 class="mt-3 fw-normal">
                Nasdaq
              </h6>
              <h3>
                355 <span class="fw-semi-bold">USD</span>
              </h3>
              <p>Last Sale 354.94 USD</p>
              <Nasdaq />
            </Widget>
          </b-col>
          <b-col md='6' xs='12'>
            <Widget class="widget-sm bg-success text-white">
              <p class="mb-xs"><i class="fa fa-comments fa-2x" /></p>
              <h5>
                Lots of <span class="fw-semi-bold">possibilities</span> to customize your
                new <span class="fw-semi-bold">admin template</span>
              </h5>
              <p class="fs-mini mt-sm">
                <span class="fw-semi-bold">83</span> likes
                &nbsp;
                <span class="fw-semi-bold">96</span> comments
                &nbsp;
                <span class="fw-semi-bold">7</span> shares
              </p>
              <p class="fs-sm mt-lg text-light">
                <time>10 June</time>
              </p>
            </Widget>
          </b-col>
        </b-row>
        <b-row>
          <b-col md='6' xs='12'>
            <Widget class="widget-sm bg-primary text-white">
              <p class="mb-xs"><i class="fa fa-arrow-circle-up fa-3x opacity-50" /></p>
              <p class="mb text-light">
                <time>10 June</time>
              </p>
              <h3>
                Lots of <span class="fw-semi-bold">new</span> amazing possibilities
              </h3>
              <p class="fs-mini mt">
                <span class="fw-semi-bold">214</span> likes
                &nbsp;
                <span class="fw-semi-bold">96</span> comments
              </p>
            </Widget>
          </b-col>
          <b-col md='6' xs='12'>
            <Widget
              class="widget-sm"
              title="<h6>Server <span class='fw-semi-bold'>Overview</span></h6>"
              customHeader
            >
              <div class="clearfix fs-mini">
                <span class="pull-right m-0 fw-semi-bold">CPU</span>
                <span class="fs-mini">60% / 37°C / 3.3 Ghz</span>
              </div>
              <b-progress variant="primary" class="bg-gray-lighter progress-xs"
                :value="60" :max="100" />
              <div class="clearfix fs-mini mt">
                <span class="pull-right m-0 fw-semi-bold">Mem</span>
                <span class="fs-mini">29% / 4GB (16 GB)</span>
              </div>
              <b-progress variant="warning" class="bg-gray-lighter progress-xs"
                :value="29" :max="100" />
              <div class="clearfix fs-mini mt">
                <span class="pull-right m-0 fw-semi-bold">LAN</span>
                <span class="fs-mini">6 Mb/s <i class="fa fa-caret-down" /> &nbsp; 3 Mb/s <i
                  class="fa fa-caret-up"
                /></span>
              </div>
              <b-progress variant="danger" class="bg-gray-lighter progress-xs"
                :value="48" :max="100" />
              <div class="clearfix fs-mini mt">
                <span class="pull-right m-0 fw-semi-bold">Access</span>
                <span class="fs-mini">17 Mb/s <i class="fa fa-caret-up" /> &nbsp; (+18%)</span>
              </div>
              <b-progress variant="success" class="bg-gray-lighter progress-xs"
                :value="64" :max="100" />
            </Widget>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg='4' xs='12'>
        <Widget>
          <YearsMap />
        </Widget>
      </b-col>
      <b-col lg='4' xs='12'>
        <Widget
          title="
            <header class='bb'>
              <h6>Recent <span class='fw-semi-bold'>Chats</span></h6>
            </header>
          "
          customHeader
        >
          <div class="widget-body">
            <div class="widget-middle-overflow">
              <ul
                class="list-group widget-chat-list-group" data-ui-jq="slimscroll"
                data-ui-options="{ height: '287px', size: '4px', borderRadius: '1px', opacity: .3 }"
              >
                <li class="list-group-item">
                  <span class="thumb">
                    <img class="rounded-circle" src='../../assets/people/a6.jpg' alt="..." />
                  </span>
                  <div class="message">
                    <h6 class="sender">Chris Gray</h6>
                    <p class="body">
                      Hey! What&apos;s up? So much time since we saw each other there
                    </p>
                    <time class="time">10 sec ago</time>
                  </div>
                </li>
                <li class="list-group-item on-right">
                  <span class="thumb">
                    <img class="rounded-circle" src='../../assets/avatar.png' alt="..." />
                  </span>
                  <div>
                    <h6 class="sender">John Doe</h6>
                    <p class="body">True! Totally makes sense. But how do we find that?</p>
                    <time class="time">10 sec ago</time>
                  </div>
                </li>
                <li class="list-group-item">
                  <span class="thumb">
                    <img class="rounded-circle" src='../../assets/people/a6.jpg' alt="..." />
                  </span>
                  <div>
                    <h6 class="sender">Chris Gray</h6>
                    <p class="body">
                      OK, but so now what? What should we do now? Not sure actually.
                    </p>
                    <time class="time">10 sec ago</time>
                  </div>
                </li>
                <li class="list-group-item on-right">
                  <span class="thumb">
                    <img class="rounded-circle" src='../../assets/avatar.png' alt="..." />
                  </span>
                  <div>
                    <h6 class="sender">John Doe</h6>
                    <p class="body">
                      Hey guys, didn&apos;t you notice this conversation is sort of jubberish?
                    </p>
                    <time class="time">10 sec ago</time>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <footer class="bg-body-light bt">
            <div class="input-group input-group-sm">
              <input type="text" class="form-control" placeholder="Your message" />
              <span class="input-group-btn">
                <button type="submit" class="btn btn-default">
                  Send
                </button>
              </span>
            </div>
          </footer>
        </Widget>
      </b-col>
      <b-col lg='4' xs='12'>
        <Widget class="bg-gray-dark text-white">
          <RealtimeTraffic />
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg='3' xs='12'>
        <Widget class="widget-padding-lg">
          <div class="clearfix">
            <LiveTile :options="{
              'data-mode': 'carousel',
              'data-speed': '750',
              'data-delay': '3000',
              'data-height': '313'
              }"
            >
              <div>
                <h3>Basic & <span class="fw-semi-bold">Advanced</span> Features</h3>
                <p class="value4 mt-lg">All you need in one app</p>
                <div class="h5 mt-lg mb-lg">
                  <i class="fa fa-quote-left opacity-50" />
                  &nbsp;That&apos;s awesome!  &nbsp;
                  <i class="fa fa-quote-right opacity-50" />
                </div>
                <div class="widget-footer-bottom">
                  <p>Attention to what&apos;s really important</p>
                  <button class="btn btn-info btn-block mt">Order Now!</button>
                </div>
              </div>
              <div>
                <h3>Beautiful <span class="fw-semi-bold">Thing</span></h3>
                <p class="value4 mt-lg">Life-time package support</p>
                <div class="h5 mt-lg mb-lg">
                  <i class="fa fa-quote-left opacity-50" />
                  &nbsp;That&apos;s awesome!  &nbsp;
                  <i class="fa fa-quote-right opacity-50" />
                </div>
                <div class="widget-footer-bottom">
                  <p>Attention to what&apos;s really important</p>
                  <button class="btn btn-inverse btn-block mt"><span
                    class="fw-semi-bold text-warning"
                  >Ready?</span>
                  </button>
                </div>
              </div>
            </LiveTile>
          </div>
        </Widget>
      </b-col>
      <b-col lg='3' xs='12'>
        <Widget class="widget-chart-changes" close refresh bodyClass="mt-0">
          <ChangesChart />
        </Widget>
      </b-col>
      <b-col lg='3' xs='12'>
        <Widget class="widget-padding-lg bg-primary text-white">
          <div class="clearfix">
            <LiveTile :options="{
              'data-mode': 'carousel',
              'data-speed': '300',
              'data-delay': '3000',
              'data-height': '313'
              }"
            >
              <div>
                <p class="h4 mt-xs">
                  <i class="fa fa-quote-left opacity-50" />
                  &nbsp;Thanks for the awesome support. That&apos;s awesome!&nbsp;
                  <i class="fa fa-quote-right opacity-50" />
                </p>
                <div class="widget-footer-bottom">
                  <span class="thumb pull-left mr">
                    <img class="rounded-circle" src='../../assets/people/a4.jpg' alt="..." />
                  </span>
                  <h4 class="m-0 mb-xs"><span class="fw-semi-bold">Miha</span> Koshir</h4>
                  <p class="text-light">@miha</p>
                </div>
              </div>
              <div>
                <div class="clearfix mt-xs">
                  <span class="thumb pull-left mr">
                    <img class="rounded-circle" src='../../assets/people/a3.jpg' alt="..." />
                  </span>
                  <h4 class="m-0 mb-xs"><span class="fw-semi-bold">Maryna</span> Ess</h4>
                  <p class="text-light">@ess</p>
                </div>
                <div class="widget-footer-bottom">
                  <p class="h4">
                    <i class="fa fa-quote-left opacity-50" />
                    &nbsp;Could have never imagined it would be so great!&nbsp;
                    <i class="fa fa-quote-right opacity-50" />
                  </p>
                </div>
              </div>
            </LiveTile>
          </div>
        </Widget>
      </b-col>
      <b-col lg='3' xs='12'>
        <LiveTile :options="{
          'data-mode': 'flip',
          'data-direction': 'horizontal',
          'data-speed': '600',
          'data-delay': '3000',
          'data-height': '373',
          'data-play-onhover': 'true',
          }"
        >
          <div>
            <Widget
              class="widget-padding-lg widget-md bg-gray-dark text-white"
              bodyClass="widget-body-container"
            >
              <div class="text-center">
                <i class="fa fa-child text-warning fa-5x" />
              </div>
              <h3 class="fw-normal">Sing Web App</h3>
              <div class="widget-footer-bottom">
                <div class="mb-sm">Cutting-edge tech and design delivered</div>
                <p>
                  <button class="btn btn-default btn-block">Hover over me!</button>
                </p>
              </div>
            </Widget>
          </div>
          <div>
            <Widget class="widget-padding-lg widget-md" bodyClass="widget-body-container">
              <div class="text-center">
                <i class="fa fa-globe text-primary fa-5x" />
              </div>
              <h3 class="fw-normal">Join The Web Now!</h3>
              <div class="widget-footer-bottom">
                <div class="mb-sm">Cutting-edge tech and design delivered</div>
                <p>
                  <button class="btn btn-gray btn-block">Join now!</button>
                </p>
              </div>
            </Widget>
          </div>
        </LiveTile>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Skycon from '@/components/Skycon/Skycon';
import Widget from '@/components/Widget/Widget';
import LiveTile from './components/live-tile/LiveTile';
import FlotCharts from './components/flot-charts/FlotCharts';
import Nasdaq from './components/nasdaq/Nasdaq';
import YearsMap from './components/years-map/YearsMap';
import RealtimeTraffic from './components/realtime-traffic/RealtimeTraffic';
import ChangesChart from './components/changes-chart/ChangesChart';

export default {
  name: 'Widgets',
  components: {
    Widget,
    LiveTile,
    FlotCharts,
    Skycon,
    Nasdaq,
    YearsMap,
    RealtimeTraffic,
    ChangesChart,
  },
};
</script>

<style src="./Widgets.scss" lang="scss" />
