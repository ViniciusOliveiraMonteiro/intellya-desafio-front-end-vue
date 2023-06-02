<script lang="ts">
import { defineComponent } from 'vue';
  import { CIcon } from '@coreui/icons-vue';
  import { cilSearch } from '@coreui/icons';
  export default defineComponent({
    components: {
      CIcon
    },
    setup(){
      return {
        cilSearch
      }
    }
  });
</script>
<template>
  <div>
    <div class='headerContainer d-flex align-items-center justify-content-between'>
      <div class="d-flex align-items-center py-3 ps-5 ms-5">
        <img class="logo" src="@/assets/logo.png" alt="Logo">
        <span class="ms-5">Usuário</span>
      </div>
      <div class="pe-5 me-5">
        <div class="d-flex align-items-center customInput">
          <CIcon :icon="cilSearch" size="xl"/>
          <input 
            class="border-0" 
            type="text" 
            name="search" 
            id="search"
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