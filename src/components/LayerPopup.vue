<template>
  <!-- <div class="modal" v-if="isModal">
    <div class="modal_title">
        <slot name="modal_title"></slot>
    </div>
    <div class="modal_content">
        <slot name="modal_content"></slot>
    </div>
    <div class="modal_footer">
        <button type="button" @click="$emit('closeModal', false)">닫기</button>
    </div>
  </div> -->
  <div>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
        <!--
        you can use custom content here to overwrite
        default content
        -->
        <h3 slot="header">custom header</h3>
    </modal>
  </div>
</template>

<script>
import modal from '@/components/LayerPopupTransition.vue';

export default {
    props: {
        isModal: {
            type: Boolean,
            default: false
        }
    },
    components: {
        modal
    }
}
</script>

<style>
.modal {position:fixed;left:0;top:0;width:100%;height:100%;backdrop-filter:0.3;background-color: rgba(0,0,0,0.35);-webkit-backdrop-filter: saturate(180%) blur(1px);backdrop-filter:  saturate(180%) blur(1px);}
</style>