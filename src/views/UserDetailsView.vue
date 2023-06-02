<script lang="ts">
  import { defineComponent } from 'vue';
  import TabHeader from '@/components/header/TabHeader.vue';
  import UserDetails from '@/components/user-details/UserDetails.vue';
  import { useRoute } from 'vue-router';
  export default defineComponent({
    mounted() {
        
    },
    components: {
      TabHeader,
      UserDetails
    },
    methods: {

    },
    setup(){
      const route = useRoute();
      const userId = route.params.id as string;
      return {
        userId,
      };
    }
  });
</script>

<template>
  <div>
    <TabHeader />
  </div>
  <div class="viewContent">
    <div class="pageDescription">
      <h1>Usuário nº {{ userId }}</h1>
      <p>Visualize as informações do usuários solicitado abaixo</p>
    </div>
    <UserDetails :id="userId"/>
  </div>
</template>

<style>
  .viewContent {
    padding: 50px 100px 0px 100px;
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