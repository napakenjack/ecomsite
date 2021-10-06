<template>
  <div class="display-container">
 <div class="sidebar" >
<SideBar />
  </div>  

<HeadBar />

<router-view />
  </div>
  
</template>

<script>
import HeadBar from './components/HeadBar.vue'
import SideBar from './components/SideBar.vue'

export default {
  components: {
    SideBar,
    HeadBar,
  }

}
</script>

<style>


</style>
