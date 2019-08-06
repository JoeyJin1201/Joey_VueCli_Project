<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/index">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: '分頁' }">Page</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/button">button</router-link>
          </li>
          <li class="nav-item">
            <div class="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Card Childrens</button>
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <router-link class="nav-link" to="/page/">Card 1</router-link>
                <router-link class="nav-link" to="/page/child2">Card 2</router-link>
                <router-link class="nav-link" to="/page/child3">Card 3</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <img src="./assets/logo.png" />
    <!-- <HelloWorld /> -->
    <router-view></router-view>
    <!-- <h1>h1 from App.vue</h1> -->
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  created() {
    this.$http.get("https://randomuser.me/api/").then(response => {
      console.log(response);
      console.log(response.data);
    });
  }
};
</script>
