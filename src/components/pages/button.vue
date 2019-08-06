<template>
  <div class="hello">
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <button type="button" class="btn btn-secondary">1</button>
      <button type="button" class="btn btn-secondary">2</button>
      <div class="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >測試</button>
        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <router-link class="dropdown-item" to="/index">Home</router-link>
          <router-link class="dropdown-item" :to="{ name: '分頁' }">Page</router-link>
        </div>
      </div>
    </div>
  </div>
</template>