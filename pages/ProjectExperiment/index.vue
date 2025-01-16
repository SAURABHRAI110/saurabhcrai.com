<template>
    <div>
      <div id="app"></div>
    </div>
  </template>
  
  <script>
  new Vue({
    el: '#app',
    data: {
      cardData: [
        { title: 'Card 1', imageUrl: 'path/to/image1.jpg' },
        { title: 'Card 2', imageUrl: 'path/to/image2.jpg' },
        { title: 'Card 3', imageUrl: 'path/to/image3.jpg' },
        { title: 'Card 4', imageUrl: 'path/to/image4.jpg' },
        { title: 'Card 5', imageUrl: 'path/to/image5.jpg' },
        { title: 'Card 6', imageUrl: 'path/to/image6.jpg' },
        { title: 'Card 7', imageUrl: 'path/to/image7.jpg' },
        { title: 'Card 8', imageUrl: 'path/to/image8.jpg' },
        { title: 'Card 9', imageUrl: 'path/to/image9.jpg' },
        { title: 'Card 10', imageUrl: 'path/to/image10.jpg' },
      ]
    },
    template: `
      <div>
        <div v-for="(data, index) in cardData" :key="index" class="card">
          <img :src="data.imageUrl" alt="Card Image">
          <div class="title">{{ data.title }}</div>
        </div>
      </div>
    `
  });
  </script>
  
  <style scoped>
  body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;
  }
  
  .card {
    width: 200px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .card .title {
    padding: 10px;
    background-color: #f4f4f4;
    text-align: center;
    font-weight: bold;
  }
  </style>
  