<template>
  <div class="hello">
    <router-link to="/page/">Card 1</router-link>
    <router-link to="/page/child2">Card 2</router-link>
    <router-link to="/page/child3">Card 3</router-link>
    <div class="card" style="width: 18rem;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
