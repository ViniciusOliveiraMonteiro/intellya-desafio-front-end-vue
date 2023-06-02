<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import type { IUser } from '@/types/IUser';
  export default defineComponent({
    data(){
      return {
        users: [] as IUser[]
      }
    },
    mounted() {
      this.fetchData();
    },
    components: {

    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('http://localhost:3000/users', {
            headers: {
              'x-api-key': '70335667-2408-4011-a994-ea3e7042d96f'
            }
          });
          this.users = response.data;
        } catch (error) {
          console.log(error);
        }
      },
    }
  });
</script>

<template>
  <div class="d-flex justify-content-center">
    <table class="listTable" v-if="users.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Nível de acesso</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role === 'member' ? 'Membro' : 'Administrador' }}</td>
          <td>
            <router-link :to="'/detalhe/'+user.id">Visualizar</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
  .listTable {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 1em;
    font-family: sans-serif;
    min-width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    overflow: hidden;
  }
  .listTable thead tr {
    background-color: rgba(211, 211, 211, 0.2);
    color: #000000;
    text-align: left;
  }
  .listTable thead th {
    font-weight: bold;
  }
  .listTable th,
  .listTable td {
    padding: 15px 20px;
  }
  .listTable td:has(a){
    padding-right: 20px;
    text-align: end;
  }
  .listTable tbody > tr:not(:last-child) {
    border-bottom: 1px solid #dddddd;
  }
  .listTable thead tr {
    border-bottom: 1px solid #dddddd;
  }
  .listTable a {
    text-decoration: none;
    color: #b09e71;
  }
  .listTable a:hover {
    color: #8c7e5a;
  }
  .listTable tbody tr > :first-child {
    font-weight: bold;
  }
  .listTable tbody tr > *:not(:first-child) {
    color: #7d7d7d;
  }
</style>