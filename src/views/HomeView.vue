<script lang="ts">
  import { defineComponent } from 'vue';
  import TabHeader from '@/components/header/TabHeader.vue';
  import ListUsersTable from '@/components/list-users-table/ListUsersTable.vue';
  export default defineComponent({
    mounted() {

    },
    components: {
      TabHeader,
      ListUsersTable
    },
    methods: {

    }
  })
</script>

<template>
  <div>
    <TabHeader />
  </div>
  <div class="viewContent">
    <div class="pageDescription">
      <h1>Listagem de usuários</h1>
      <p>Visualize os usuários que acessam sua plataforma</p>
    </div>
    <ListUsersTable />
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