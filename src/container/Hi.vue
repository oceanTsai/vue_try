

<script>
export default {
  name: 'hi',
  render (h, x) {
    console.log(this.$store)
    let tet = "JJJJJJJ"
   return( 
     <div>{tet}</div>
   )
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
