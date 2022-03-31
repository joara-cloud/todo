<template>
  <div>
    <ul id="left">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
    <ul id="right">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>
import dragula from 'dragula';
import 'dragula/dist/dragula.css'

export default {
  mounted() {
    dragula([document.querySelector('#left'), document.querySelector('#right')])
      .on('drop', (el, wrapper) => {
        console.log(el);
      })
  }
}
</script>

<style>


</style>