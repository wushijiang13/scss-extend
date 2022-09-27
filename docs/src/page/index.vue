<template>
    <div class="index">
      <h1 :class="animateClass" ref="animateRef">
        跳动
      </h1>
      <div class="animate-box">
        <ul>
          <li v-for="key in animateList" :key="key">
            <button @click="animate(key)">{{key}}</button>
          </li>
        </ul>
      </div>

    </div>
</template>

<script setup lang="ts">
  import { ref, nextTick } from 'vue';
  let animateClass = ref('bounce');
  let animateRef = ref(null);
  let animateList = ['bounce','flash','headShake','heartBeat','jello','pulse','rubberBand','shakeX','shakeY','swing','tada','wobble']
  nextTick(()=>{
    animateRef.value.onanimationend= ()=>{
      animateClass.value = ""
    }
  })
  function animate(effect){
    animateClass.value = ""
    if(typeof  effect == "string"){
      animateClass.value = effect;
    }
  }
</script>

<style lang="scss">
.index{
  h1{
    display: inline-block;
  }
  .animate-box{
    display: inline-block;
    width: 300px;
    height: calc(100vh - 100px);
    background-color:#f2f2f2;
    margin-left: 20px;
  }
}
</style>