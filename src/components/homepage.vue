<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <nav role="select">
        <ul>
          <li><router-link to="/new_data">New Data</router-link></li>
          <li><router-link to="/">Load Data</router-link></li>
          <li><router-link to="/">Options</router-link></li>
          <li><router-link to="/">Open Source Licenses</router-link></li>
          <li @click="quit()"><a>Quit</a></li>
        </ul>
    </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data: () => ({
  }),
  methods: {
    quit() {
      alert('Quit is not avaiable!')
    }
  }
}
</script>
<style>
.modal {
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-image: url("/bg.jpg");
}

/* Modal Content/Box */
.modal-content {
  position: absolute;
  top: 70%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
ul {
  width:100%;
  list-style:none;        
}
li {
    display: block;
    padding:.55em .45em;
    width:100%;
    font-size:1.4em;
    /*background-color: hsla(304, 3%, 46%, .5);*/
    text-align:center;
    filter: brightness(1);
    transition-duration: .15s;
    transition-timing-function: ease-in-out;
    transition-property: box-shadow, background, color, text-align, padding;
    cursor: pointer;     
}
a {
    color:inherit;
    text-decoration:none;
    transition:inherit;

  }
li:hover {
    color:#fff;
    padding-left:.75em; 
    filter: brightness(5.00);        
  }
</style>
