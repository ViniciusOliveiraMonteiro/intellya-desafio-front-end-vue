<script setup lang="ts">
  import { ref } from 'vue';
  import TabHeader from '@/components/header/TabHeader.vue';
  import UserDetails from '@/components/user-details/UserDetails.vue';
  import { useRoute } from 'vue-router';
  import { CIcon } from '@coreui/icons-vue';
  import { cilArrowLeft } from '@coreui/icons';

  const route = useRoute();
  const userId = ref('');

  userId.value = route.params.id as string;
</script>

<template>
  <div>
    <TabHeader />
  </div>
  <div class="viewContent">
    <div class="backTo mb-3">
      <router-link to="/">
        <CIcon :icon="cilArrowLeft" size="xl"/>
      </router-link>
    </div>
    <div class="pageDescription">
      <h1>Usuário nº {{ userId }}</h1>
      <p>Visualize as informações do usuários solicitado abaixo</p>
    </div>
    <UserDetails :id="userId"/>
  </div>
</template>

<style>
  .backTo svg {
    height: 30px;
    width: 30px;
    color: #696969;
  }
  .viewContent {
    padding: 20px 100px 0px 100px;
  }
  .pageDescription h1,
  .pageDescription p {
    font-family: sans-serif;
    font-weight: bold;
  }
  .pageDescription h1 {
    color: #000000;
  }
  .pageDescription p {
    color: #2F2F2F;
  }
</style>