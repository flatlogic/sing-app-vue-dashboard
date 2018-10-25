<template>
  <div class='search-page'>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">YOU ARE HERE</li>
      <li class="breadcrumb-item active">Search Results</li>
    </ol>
    <h1 class="page-title">Matching - <span class="fw-semi-bold">Results</span></h1>
    <div class="btn-toolbar justify-content-between">
      <div class="d-inline-flex">
        <b-dropdown text="Popular" variant="default">
          <b-dropdown-item>All</b-dropdown-item>
          <b-dropdown-item>Popular</b-dropdown-item>
          <b-dropdown-item>Interesting</b-dropdown-item>
          <b-dropdown-item>Latest</b-dropdown-item>
        </b-dropdown>
        <b-dropdown text="All Time" variant="default">
          <b-dropdown-item>Last 24h</b-dropdown-item>
          <b-dropdown-item>Last Month</b-dropdown-item>
          <b-dropdown-item>Last Month</b-dropdown-item>
        </b-dropdown>
      </div>
      <b-button-group>
        <b-button variant="gray" class="active">
          <i class="fa fa-th-list" />
        </b-button>
        <b-button variant="gray">
          <i class="fa fa-th-large" />
        </b-button>
      </b-button-group>
    </div>
    <b-row class="mt-3 d-block">
      <b-col xl='3' sm='12' class="float-xl-right">
        <h5>Results <span class="fw-semi-bold">Filtering</span></h5>
        <p class="text-muted fs-mini">Listed content is categorized by the following groups:</p>
        <b-nav pills class="flex-column nav-stacked searchResultCategories mt">
          <b-nav-item href="#">
            Hot Ideas
            <b-badge variant="default" pill class="float-right">34</b-badge>
          </b-nav-item>
          <b-nav-item href="#">
            Latest Pictures
            <b-badge variant="default" pill class="float-right">9</b-badge>
          </b-nav-item>
          <b-nav-item href="#">
            Labels of Day
          </b-nav-item>
          <b-nav-item href="#">
            Recent Movies
          </b-nav-item>
           <b-nav-item href="#">
            Globals
            <b-badge variant="default" pill class="float-right">18</b-badge>
          </b-nav-item>
        </b-nav>
      </b-col>

      <b-col xl='9' sm='12'>
        <p class='searchResultsCount'>About 94 700 000 (0.39 sec.) results</p>
        <section class='searchResultItem'>
          <a class='imageLink' href="#">
            <img class='image' src='../../../assets/search/1.jpg' alt="..." />
          </a>
          <div class='searchResultItemBody'>
            <b-row>
              <b-col md='9'>
                <h4 class='searchResultItemHeading'>
                  <a href="#">Next generation admin template</a>
                </h4>
                <p class='info'>
                  New York, NY 20188
                </p>
                <p class='description'>
                  Not just usual Metro. But something bigger. Not just usual widgets, but real
                  widgets. Not just yet another admin template,
                  but next generation admin template.
                </p>
              </b-col>
              <b-col md='3' xs='12' class="text-center">
                <p class="value3 mt-sm">
                  $9, 700
                </p>
                <p class="fs-mini text-muted">
                  PER WEEK
                </p>
                <b-button variant="info" size="sm">Learn More</b-button>
              </b-col>
            </b-row>
          </div>
        </section>
        <section class='searchResultItem'>
          <a class='imageLink' href="#">
            <img class='image' src='../../../assets/search/5.jpg' alt="..." />
          </a>
          <div class='searchResultItemBody'>
            <b-row>
              <b-col md='9'>
                <h4 class='searchResultItemHeading'>
                  <a href="#">Try. Posted by Okendoken</a>
                  <small>
                    <span class="badge badge-pill badge-danger float-right">
                      <span class="fw-normal"> Best Deal!</span>
                    </span>
                  </small>
                </h4>
                <p class='info'>
                  Los Angeles, NY 20188
                </p>
                <p class='description'>
                  You will never know exactly how something will go until you try it. You can
                  think three hundred times and still have no precise result.
                </p>
              </b-col>
              <b-col md='3' xs='12' class="text-center">
                <p class="value3 mt-sm">
                  $10, 300
                </p>
                <p class="fs-mini text-muted">
                  PER WEEK
                </p>
                <b-button variant="info" size="sm">Learn More</b-button>
              </b-col>
            </b-row>
          </div>
        </section>
        <section class='searchResultItem'>
          <a class='imageLink' href="#">
            <img class='image' src='../../../assets/search/3.jpg' alt="..." />
          </a>
          <div class='searchResultItemBody'>
            <b-row>
              <b-col md='9'>
                <h4 class='searchResultItemHeading'>
                  <a href="#">Vitaut the Great</a>
                </h4>
                <p class='info'>
                  New York, NY 20188
                </p>
                <p class='description'>
                  The Great Prince of the Grand Duchy of Lithuania he had stopped the invasion
                  to Europe of Timur (Tamerlan) from Asia heading a big Army
                  of Belarusians, Lithuanians.
                </p>
              </b-col>
              <b-col md='3' xs='12' class="text-center">
                <p class="value3 mt-sm">
                  $3, 200
                </p>
                <p class="fs-mini text-muted">
                  PER WEEK
                </p>
                <b-button variant="info" size="sm">Learn More</b-button>
              </b-col>
            </b-row>
          </div>
        </section>
        <section class='searchResultItem'>
          <a class='imageLink' href="#">
            <img class='image' src=../../../assets/search/13.jpg alt="..." />
          </a>
          <div class='searchResultItemBody'>
            <b-row>
              <b-col md='9'>
                <h4 class='searchResultItemHeading'>
                  <a href="#">Can I use CSS3 Radial-Gradient?</a>
                </h4>
                <p class='info'>
                  Minsk, NY 20188
                </p>
                <p class='description'>
                  Yes you can! Further more, you should!
                  It let&#39;s you create really beautiful images
                  either for elements or for the entire background.
                </p>
              </b-col>
              <b-col md='3' xs='12' class="text-center">
                <p class="value3 mt-sm">
                  $2, 400
                </p>
                <p class="fs-mini text-muted">
                  PER MONTH
                </p>
                <b-button variant="info" size="sm">Learn More</b-button>
              </b-col>
            </b-row>
          </div>
        </section>
        <div class="d-flex justify-content-center mt-3">
          <b-pagination :total-rows="5" :per-page="1" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
};
</script>

<style src="./Search.scss" lang="scss" scoped />
