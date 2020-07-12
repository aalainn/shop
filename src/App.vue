<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12">
              <NavBar/>
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
    import NavBar from "./components/ui/NavBar";

    export default {
        name: 'App',
        components: {
            NavBar
        }
    }
</script>

<style>
  .bg-vue {
    background-color: rgb(52, 73, 94);
    color: white;
  }
  .bg-vue2 {
    background-color: rgb(65, 184, 131);
    color: white;
  }
  .color-vue {
    color: rgb(52, 73, 94);
  }
  .color-vue2 {
    color: rgb(65, 184, 131);
  }
    .pointer {
        cursor: pointer;
    }
</style>