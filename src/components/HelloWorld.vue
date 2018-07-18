<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item,index) in allData" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'axios 黑科技',
      allData:[]
    }
  },
  created(){
    this.axiosTest();
  },
  methods:{
      axiosTest(){
        this.$axios({
          method: 'get',
          url: "/api",
        }).then((response) => {
            var data=response.data;
            this.allData = data.articles;       
     
        }).catch(err =>{
          console.log(err);
        })
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  width: 100%;
  text-align: left;
  display: inline-block;
  margin: 0 10px;
  font-size: 30px;
  list-style: decimal;
}
a {
  color: #42b983;
}
</style>
