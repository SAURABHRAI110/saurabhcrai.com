<template>
  <main>
    <h1>
      Fullscreen menu
      <span>with cool links</span>
    </h1>
    <input id="myInput" type="checkbox" />
    <label for="myInput">
      <span class="bar top"></span>
      <span class="bar middle"></span>
      <span class="bar bottom"></span>
    </label>
    <aside>
      <div class="aside-section aside-left">
        <div class="aside-content">
          <p>Some text that will make you click the cta</p>
          <button class="button">CTA</button>
        </div>
      </div>
      <div class="aside-section aside-right">
        <ul class="aside-list">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="showcase">Showcase</nuxt-link>
          </li>
          <li>
            <nuxt-link to="people">People</nuxt-link>
          </li>
          <li>
            <nuxt-link to="blog">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link to="about">About</nuxt-link>
          </li>
        </ul>
      </div>
    </aside>
  </main>
</template>

<script>
export default {}
</script>

<style>
main {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.aside-section {
  top: 0;
  bottom: 0;
  position: absolute;
}

.aside-left {
  display: none;
  width: 40%;
  left: 0;
  background-color: #ff5964;
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  -o-transform: translateY(-100%);
  transform: translateY(-100%);
  transition: transform 0.4s ease-in-out;
}

.aside-right {
  width: 100%;
  right: 0;
  background-color: #38618c;
  -webkit-transform: translateX(100%);
  -moz-transform: translateX(100%);
  -ms-transform: translateX(100%);
  -o-transform: translateX(100%);
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out;
}

.aside-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 150px;
  text-align: left;
  padding-left: 50px;
}

.aside-content {
  margin-top: 150px;
  padding: 0 40px;
  position: relative;
  color: white;
  text-align: center;
}

.aside-list li {
  margin-bottom: 20px;
}

.aside-anchor::after {
  content: '';
  position: absolute;
  bottom: 0;
  background-color: #ff5964;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 3px;
}

.aside-anchor::before {
  border-radius: 3px;
  content: '';
  position: absolute;
  bottom: 0;
  background-color: #fff;
  left: 0;
  height: 3px;
  z-index: 1;
  width: 50%;
  -webkit-transition: transform 0.2s ease-in-out;
  -o-transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
}

.aside-anchor:hover:before {
  -webkit-transform: translateX(100%);
  -moz-transform: translateX(100%);
  -ms-transform: translateX(100%);
  -o-transform: translateX(100%);
  transform: translateX(100%);
}

.aside-anchor {
  padding-bottom: 7px;
  color: #fff;
  text-decoration: none;
  font-size: 30px;
  position: relative;
  font-weight: 500;
}

input[type='checkbox'] {
  display: none;
}

input[type='checkbox']:checked ~ aside .aside-left {
  transform: translateY(0%);
}

input[type='checkbox']:checked ~ aside .aside-right {
  transform: translateX(0%);
}

input[type='checkbox']:checked ~ label .bar {
  background-color: #fff;
}

input[type='checkbox']:checked ~ label .top {
  -webkit-transform: translateY(0px) rotateZ(45deg);
  -moz-transform: translateY(0px) rotateZ(45deg);
  -ms-transform: translateY(0px) rotateZ(45deg);
  -o-transform: translateY(0px) rotateZ(45deg);
  transform: translateY(0px) rotateZ(45deg);
}

input[type='checkbox']:checked ~ label .bottom {
  -webkit-transform: translateY(-15px) rotateZ(-45deg);
  -moz-transform: translateY(-15px) rotateZ(-45deg);
  -ms-transform: translateY(-15px) rotateZ(-45deg);
  -o-transform: translateY(-15px) rotateZ(-45deg);
  transform: translateY(-15px) rotateZ(-45deg);
}

input[type='checkbox']:checked ~ label .middle {
  width: 0;
}

.middle {
  margin: 0 auto;
}

label {
  top: 50%;
  display: inline-block;
  padding: 7px 10px;
  background-color: transparent;
  cursor: pointer;
  margin: 10px;
  z-index: 3;
  position: fixed;
  transform: translatey(-50%);
}

.bar {
  display: block;
  background-color: #38618c;
  width: 30px;
  height: 3px;
  border-radius: 5px;
  margin: 5px auto;
  transition: background-color 0.4s ease-in, transform 0.4s ease-in,
    width 0.4s ease-in;
}

h1 {
  margin: 0;
  position: relative;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  text-align: center;
  font-size: 30px;
}

h1 span {
  font-size: 20px;
  display: block;
}

p {
  font-size: 30px;
}

.button {
  display: inline-block;
  background-image: none;
  border: none;
  background-color: transparent;
  padding-bottom: 7px;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  color: white;
  padding: 7px 50px;
  border: 2px solid white;
}

@media (min-width: 992px) {
  h1 {
    font-size: 40px;
  }
  .aside-left {
    display: block;
  }

  .aside-right {
    width: 60%;
  }
}
</style>
