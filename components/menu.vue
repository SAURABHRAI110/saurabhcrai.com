<template>
  <div class="nav-container">
    <Logo />

    <div class="menu-applause">
      <!-- LikeBtn.com BEGIN -->
      <span
        class="likebtn-wrapper"
        data-theme="review"
        data-btn_size="24"
        data-icon_l="hrt6-o"
        data-ef_voting="heartbeat"
        data-rich_snippet="true"
        data-identifier="item_1"
        data-vert="true"
        data-show_like_label="false"
        data-dislike_enabled="false"
        data-icon_dislike_show="false"
        data-counter_count="true"
        data-i18n_after_like="Thank You!"
      ></span>
      <script>
  ;(function(d, e, s) {
    if (d.getElementById('likebtn_wjs')) return
    a = d.createElement(e)
    m = d.getElementsByTagName(e)[0]
    a.async = 1
    a.id = 'likebtn_wjs'
    a.src = s
    m.parentNode.insertBefore(a, m)
  })(document, 'script', '//w.likebtn.com/js/w/widget.js')
      </script>
      <!-- LikeBtn.com END -->
    </div>
  </div>
</template>

<script>
import Logo from '~/components/logo'
export default {
  components: {
    Logo
  }
}
</script>
<style scoped>
.nav-container {
  width: 100px;
  height: 100vh;
  left: 0%;
  position: fixed;
  top: 0%;
  z-index: 900;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.menu-applause {
  width: 100%;
  position: absolute;
  bottom: 30px;
  display: block;
  left: 77%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
}
/* .nav-container:hover {
  width: 90%;
} */

@media screen and (max-width: 999px) {
  .nav-container {
    width: 100%;
    height: 65px;
  }
  .menu-applause {
    display: none;
  }
}
</style>
