<template>
  <div>
    <!-- <button type="button" @click="isModal=true">모달Toggle</button>
    <LayerPopup v-bind:isModal="isModal" @closeModal="isModal=false">
      <template v-slot:modal_title>
        모달 제목입니다.
      </template>
      <template v-slot:modal_content>
        모달 내용입니다.
      </template>
    </LayerPopup> -->
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <!-- use the modal component, pass in the prop -->
      <LayerPopupTransition v-if="showModal" @close="showModal = false">
        <!--
          you can use custom content here to overwrite
          default content
        -->
          <template v-slot:header>
            <h3>제목입니다.</h3>
          </template>
        <!-- <h3 slot="header">제목입니다.</h3> -->
      </LayerPopupTransition>
  </div>
</template>

<script>
import LayerPopup from '@/components/LayerPopup.vue';
import LayerPopupTransition from '@/components/LayerPopupTransition.vue';

export default {
  data() {
    return {
      isModal: false,
      showModal: false
    }
  },
  components: {
    LayerPopup,
    LayerPopupTransition
  }
}
</script>

<style>

</style>