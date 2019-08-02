<template>
  <div class="discover-button-container">
    <div class="discover"></div>
    <h1 class="discover-text">{{ buttonText }}</h1>
    <svg class="arrow">
      <polygon data-v-54d0a06a points="2,2 8,5.5 2,10" />
    </svg>
    <img class="plus" src="~assets/svg/plus.svg" />
  </div>
</template>

<script>
export default {
  props: {
    buttonText: String
  }
}
</script>

<style scoped>
.discover-button-container {
  width: 200px;
  height: 80px;
  position: relative;
  cursor: pointer;
}

.discover {
  width: 70px;
  height: 70px;
  background-color: #f6ecdd;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  border-radius: 50%;
  margin-left: 0%;
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  animation: shadow-pulse 1.5s infinite;
}

@keyframes shadow-pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(143, 143, 143, 0.2);
  }
  100% {
    box-shadow: 0 0 0 35px rgba(197, 197, 197, 0);
  }
}

.plus {
  position: absolute;
  right: 0%;
  top: 44.5%;
  opacity: 1;
  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.discover-text {
  position: absolute;
  top: 38%;
  transform: translateY(-50%);
  left: 10%;
  transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  /* font-family: circular; */
  font-size: 15px;
  color: black;
  letter-spacing: 3px;
}

.discover-button-container:hover > .discover {
  background-color: #f6ecdd;
  margin-left: 70%;
}

.discover-button-container:hover > .plus {
  opacity: 0;
}

.discover-text::before {
  content: '';
  position: absolute;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 1.5px;
  background-color: black;
  right: 170px;
  transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  text-align: right;
}

.discover-text::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  width: 0px;
  height: 1.5px;
  background-color: black;
  transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.arrow {
  position: absolute;
  top: 44%;
  /* transform: translateY(-50%); */
  left: 95%;
  transition: 0.2s;
  color: black;

  width: 0px;
}

.discover-button-container:hover > .discover-text::before {
  width: 0px;
}

.discover-button-container:hover > .discover-text::after {
  width: 16px;
}

.discover-button-container:hover > .arrow {
  width: 8px;
  transition-delay: 0.2s;
}

.discover-button-container:hover > .discover-text {
  left: 13%;
}

.discover-button-container:hover > .arrow {
  left: 106%;
}

.discover:hover {
  width: 80px;
  height: 80px;
}
</style>
