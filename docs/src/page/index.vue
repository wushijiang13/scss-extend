<template>
    <div class="index">
      <h1 :class="animateClass" ref="animateRef">
        animate.scss
      </h1>
      <div class="animate-box">
        <ul>
          <li v-for="item in animateList" :key="item.label">
            <h2>{{item.label}}</h2>
            <div  v-for="key in item.childrenList" :key="key">
              <button @click="animate(key)">{{key}}</button>
            </div>
          </li>
        </ul>
      </div>

    </div>
</template>

<script setup lang="ts">
  import { ref, nextTick } from 'vue';
  let animateClass = ref('bounce');
  let animateRef = ref(null);
  let animateList = [
      {label:'attention_seekers',childrenList:['bounce','flash','headShake','heartBeat','jello','pulse','rubberBand','shakeX','shakeY','swing','tada','wobble']},
      {label:'back_entrances',childrenList:['backInDown','backInLeft','backInRight','backInUp']},
      {label:'back_exits',childrenList:['backOutDown','backOutLeft','backOutRight','backOutUp']},
      {label:'bouncing_entrances',childrenList:['bounceIn','bounceInDown', 'bounceInLeft','bounceInRight','bounceInUp']},
      {label:'bouncing_exits',childrenList:['bounceOut','bounceOutDown', 'bounceOutLeft','bounceOutRight','bounceOutUp']},
      {label:'fading_entrances',childrenList:['fadeIn','fadeInBottomLeft', 'fadeInBottomRight','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight',
        'fadeInRightBig','fadeInTopLeft','fadeInTopRight','fadeInUp','fadeInUpBig']},
      ];
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  h1{
    display: inline-flex;
    flex:1;
    justify-content: center;
    font-size: 40px;
  }
  .animate-box{
    display: inline-block;
    height: calc(100vh - 20px);
    overflow: auto;
    width: 300px;
    background-color:#f2f2f2;
    margin-left: 20px;
  }
}
</style>