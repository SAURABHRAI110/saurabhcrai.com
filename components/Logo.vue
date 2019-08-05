<template>
  <nuxt-link to="/">
    <div class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="74.707"
        height="71.707"
        viewBox="0 0 74.707 71.707"
      >
        <g transform="translate(-23.146 -36.146)">
          <line
            x1="53"
            y2="53"
            transform="translate(23.5 36.5)"
            fill="none"
            stroke="#f6ecdd"
            stroke-width="1"
          />
          <path
            d="M53,0,43.891,9.109,0,53"
            transform="translate(34.5 45.5)"
            fill="none"
            stroke="#f6ecdd"
            stroke-width="1"
          />
          <path
            d="M53,0,43.891,9.109,0,53"
            transform="translate(44.5 54.5)"
            fill="none"
            stroke="#f6ecdd"
            stroke-width="1"
          />
          <path
            d="M19.53-18.9c-.56-2.8-2.87-6.44-8.89-6.44C5.95-25.34,2-21.98,2-17.57c0,3.745,2.555,6.3,6.51,7.105l3.465.7c1.925.385,3.01,1.505,3.01,2.94,0,1.75-1.435,3.045-4.025,3.045-3.5,0-5.215-2.2-5.425-4.655L1.05-7.245C1.435-3.71,4.34.525,10.92.525c5.775,0,8.96-3.85,8.96-7.665,0-3.5-2.415-6.44-6.93-7.315L9.485-15.12c-1.82-.35-2.7-1.435-2.7-2.8,0-1.645,1.54-3.15,3.885-3.15a4.237,4.237,0,0,1,4.515,3.5ZM23.17-2.94A3.2,3.2,0,0,0,26.355.245a3.2,3.2,0,0,0,3.22-3.185,3.2,3.2,0,0,0-3.22-3.185A3.2,3.2,0,0,0,23.17-2.94Z"
            transform="translate(44 82)"
            fill="#fc3a52"
          />
        </g>
      </svg>
    </div>
  </nuxt-link>
</template>

<style scoped>
/* .Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41b883;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3b8070;
}

.Triangle--three {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495e;
}

.Triangle--four {
  top: 120px;
  left: 70px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}*/

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}

/* website logo  from componenent logo*/

.logo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  /* transform: rotateX(180deg); */
  position: relative;
  overflow: hidden;
  /* height: 90px;
  width: 120px; */
  left: 15%;
  padding-top: 30px;
  transform: translate(-50%);
}

@media screen and (max-width: 999px) {
  .logo {
    left: 8%;
    padding-top: 0px;
  }

  svg {
    width: 60px;
  }
}
</style>
