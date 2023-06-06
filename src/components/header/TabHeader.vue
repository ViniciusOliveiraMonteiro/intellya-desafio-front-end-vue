<script setup lang="ts">
  import { ref } from 'vue';
  import { CIcon } from '@coreui/icons-vue';
  import { cilSearch } from '@coreui/icons';

  const searchString = ref('');
  const emits = defineEmits(['update-search-string']);

  function updateSearchString(event: Event | InputEvent) {
    searchString.value = (event.target as HTMLInputElement).value;
    emits('update-search-string', searchString.value);
  }
</script>
<template>
  <div>
    <div class='headerContainer d-flex align-items-center justify-content-between'>
      <div class="d-flex align-items-center ps-5 ms-5 gap-5">
        <div class="my-3">
          <router-link to="/">
            <img class="logo" src="@/assets/logo.png" alt="Logo">
          </router-link>
        </div>
        <div class="d-flex align-items-center align-self-stretch customUnderline">
          <div class="font-weight-bold">Usuário</div>
        </div>
      </div>
      <div class="pe-5 me-5">
        <div class="d-flex align-items-center customInput">
          <CIcon :icon="cilSearch" size="xl"/>
          <input 
            class="border-0" 
            type="text" 
            name="search" 
            id="search"
            v-model="searchString" 
            @input="updateSearchString"
            placeholder="Pesquisar"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .logo {
    width: 200px;
    height: 50px;
  }

  .customUnderline {
    border-bottom: 2px solid #E4CA85;
  }

  .headerContainer span {
    border-bottom: 1px solid yellow;
  }

  .headerContainer {
    box-shadow: rgba(211, 211, 211, 0.5) 1.95px 1.95px 2.6px;
  }

  .customInput {
    border: solid 1px #D3D3D3;
    height: 40px;
    width: 300px;
    border-radius: 7px;
  }

  .customInput > input {
    outline: none;
    padding: 0px 10px;
    width: 100%;
  }

  .customInput > svg {
    height: 25px;
    width: 25px;
    margin-left: 15px;
    color: #D3D3D3;
  }
</style>