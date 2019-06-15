<template>
  <div class="wrapper">
    <div class="menu-btn">
      <button type="button"></button>
    </div>

    <div class="menu">
      <div class="row">
        <div class="col-lg overlay">
          <div class="nav">
            <ul>
              <luxt-link to="/work">Work</luxt-link>
              <luxt-link to="/about">About</luxt-link>
              <luxt-link to="/contact">Contact</luxt-link>
              <luxt-link to="/people">People</luxt-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.wrapper {
  margin: 0%;
  padding: 0%;
  width: 100%;
  height: 100vh;
  background: url(~assets/img/menubg.jpg) no-repeat 50% 50%;
  background-size: cover;
  color: #fff;
}

.overlay {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.9;
}
</style>
