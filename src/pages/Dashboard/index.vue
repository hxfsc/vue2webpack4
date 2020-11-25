<template>
  <div>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a
        class="navbar-brand col-sm-3 col-md-2 mr-0"
        href="#"
      >Logo</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a
            class="nav-link"
            href="#"
          >退出</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  to="/statistics"
                >
                  <span data-feather="home"></span>
                  面板
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/basedemo"
                >
                  <span data-feather="file"></span>
                  基础
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/watchdemo"
                >
                  <span data-feather="file"></span>
                  Watch
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/nexttickdemo"
                >
                  <span data-feather="file"></span>
                  NextTick
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/componentsdemo"
                >
                  <span data-feather="file"></span>
                  组件
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/vuexdemo"
                >
                  <span data-feather="file"></span>
                  vuex
                </router-link>
              </li>

              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/order"
                >
                  <span data-feather="file"></span>
                  订单
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/products"
                >
                  <span data-feather="shopping-cart"></span>
                  产品
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/customer"
                >
                  <span data-feather="users"></span>
                  客户
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/derive"
                >
                  <span data-feather="bar-chart-2"></span>
                  导出
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  to="/institution"
                >
                  <span data-feather="layers"></span>
                  机构
                </router-link>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a
                class="d-flex align-items-center text-muted"
                href="#"
              >
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >
                  <span data-feather="file-text"></span>
                  本月
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >
                  <span data-feather="file-text"></span>
                  本季
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >
                  <span data-feather="file-text"></span>
                  半年
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >
                  <span data-feather="file-text"></span>
                  本年
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main
          role="main"
          class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        >
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style src="./style.css" lang="css" scoped></style>
