<template>
  <div class="search-page">
    <h1 class="page-title">
      Matching - <span class="fw-semi-bold">Results</span>
    </h1>
    <div class="btn-toolbar justify-content-between">
      <div class="d-inline-flex">
        <div class="dropdown me-2">
          <button
            class="btn btn-gray-default dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Popular
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="#"
              >All</a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
              >Popular</a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
              >Interesting</a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
              >Latest</a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-gray-default dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All Time
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="#"
              >Last 24h</a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
              >Last Month</a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
              >Last Month</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="btn-group"
        role="group"
      >
        <button
          type="button"
          class="btn btn-gray active"
        >
          <i class="fa fa-th-list" />
        </button>
        <button
          type="button"
          class="btn btn-gray"
        >
          <i class="fa fa-th-large" />
        </button>
      </div>
    </div>
    <div class="row mt-3 d-block">
      <div class="col-lg-3 col-12 float-lg-end">
        <h5>Results <span class="fw-semi-bold">Filtering</span></h5>
        <p class="text-muted fs-mini">
          Listed content is categorized by the following groups:
        </p>
        <ul class="nav nav-pills flex-column nav-stacked searchResultCategories mt">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >
              Hot Ideas
              <span class="badge bg-danger rounded-pill float-end">34</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >
              Latest Pictures
              <span class="badge bg-success rounded-pill float-end">9</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >
              Labels of Day
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >
              Recent Movies
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >
              Globals
              <span class="badge bg-info rounded-pill float-end">18</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="col-lg-9 col-12">
        <p class="searchResultsCount">
          About 94 700 000 (0.39 sec.) results
        </p>
        <section class="searchResultItem">
          <a
            class="imageLink"
            href="#"
          >
            <img
              class="image"
              src="../../../assets/search/1.jpg"
              alt="mountains"
            >
          </a>
          <div class="searchResultItemBody">
            <div class="row">
              <div class="col-md-9">
                <h4 class="searchResultItemHeading">
                  <a href="#">Next generation admin template</a>
                </h4>
                <p class="info">
                  New York, NY 20188
                </p>
                <p class="description">
                  Not just usual Metro. But something bigger. Not just usual widgets, but real
                  widgets. Not just yet another admin template,
                  but next generation admin template.
                </p>
              </div>
              <div class="col-md-3 col-12 text-center">
                <p class="value3 mt-sm">
                  $9, 700
                </p>
                <p class="fs-mini text-muted">
                  PER WEEK
                </p>
                <button class="btn btn-info btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="searchResultItem">
          <a
            class="imageLink"
            href="#"
          >
            <img
              class="image"
              src="../../../assets/search/5.jpg"
              alt="woman"
            >
          </a>
          <div class="searchResultItemBody">
            <div class="row">
              <div class="col-md-9">
                <h4 class="searchResultItemHeading">
                  <a href="#">Try. Posted by Okendoken</a>
                  <small>
                    <span class="badge bg-pill bg-danger float-end">
                      <span class="fw-normal"> Best Deal!</span>
                    </span>
                  </small>
                </h4>
                <p class="info">
                  Los Angeles, NY 20188
                </p>
                <p class="description">
                  You will never know exactly how something will go until you try it. You can
                  think three hundred times and still have no precise result.
                </p>
              </div>
              <div class="col-md-3 col-12 text-center">
                <p class="value3 mt-sm">
                  $10, 300
                </p>
                <p class="fs-mini text-muted">
                  PER WEEK
                </p>
                <button class="btn btn-info btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="searchResultItem">
          <a
            class="imageLink"
            href="#"
          >
            <img
              class="image"
              src="../../../assets/search/3.jpg"
              alt="mountains"
            >
          </a>
          <div class="searchResultItemBody">
            <div class="row">
              <div class="col-md-9">
                <h4 class="searchResultItemHeading">
                  <a href="#">Vitaut the Great</a>
                </h4>
                <p class="info">
                  New York, NY 20188
                </p>
                <p class="description">
                  The Great Prince of the Grand Duchy of Lithuania he had stopped the invasion
                  to Europe of Timur (Tamerlan) from Asia heading a big Army
                  of Belarusians, Lithuanians.
                </p>
              </div>
              <div class="col-md-3 col-12 text-center">
                <p class="value3 mt-sm">
                  $3, 200
                </p>
                <p class="fs-mini text-muted">
                  PER WEEK
                </p>
                <button class="btn btn-info btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="searchResultItem">
          <a
            class="imageLink"
            href="#"
          >
            <img
              class="image"
              src="../../../assets/search/13.jpg"
              alt="plane"
            >
          </a>
          <div class="searchResultItemBody">
            <div class="row">
              <div class="col-md-9">
                <h4 class="searchResultItemHeading">
                  <a href="#">Can I use CSS3 Radial-Gradient?</a>
                </h4>
                <p class="info">
                  Minsk, NY 20188
                </p>
                <p class="description">
                  Yes you can! Further more, you should!
                  It let&#39;s you create really beautiful images
                  either for elements or for the entire background.
                </p>
              </div>
              <div class="col-md-3 col-12 text-center">
                <p class="value3 mt-sm">
                  $2, 400
                </p>
                <p class="fs-mini text-muted">
                  PER MONTH
                </p>
                <button class="btn btn-info btn-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <div class="d-flex justify-content-center mt-3">
          <nav aria-label="Search results pagination">
            <ul class="pagination">
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                >1</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                >2</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                >3</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                >4</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="#"
                >5</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style src="./Search.scss" lang="scss" scoped />
