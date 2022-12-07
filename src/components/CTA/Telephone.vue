<template>
    <label class="sr-onlye" for="Telefon"> Telefon </label>
     <input class="inputs" id="Telefon" type="text" v-model="telephone" :placeholder="template">
</template>
<script setup>
import {ref,defineProps,onMounted,watch} from 'vue'
const props = defineProps({template:String})
const telephone = ref('');
const regex = ref('^');
const format = ref('');
onMounted(() => {
 let x = 1;
   format.value = props.template.replace(/X+/g,() => '$' + x++)
   props.template.match(/X+/g).forEach((char) => {
      regex.value += '(\\d{' + char.length +'})?'
   });

})
    

watch(telephone,()=> {
    telephone.value = telephone.value.replace(/[^0-9]/g,'')
    .replace(new RegExp(regex.value,'g'),format.value)
    .substr(0,props.template.length)
})
</script>
<style scoped>
.sr-onlye {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
.inputs {
    padding: 0.5rem 1rem;
    width: 100%;
     border-left:12px solid #897ffa; ;
      background: #1a2121bf;
    border-radius: 0 1rem 0 1rem;
}
</style>