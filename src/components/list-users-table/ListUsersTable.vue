<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import axios from 'axios';
  import type { IUser } from '@/types/IUser';
  let currentPage = ref(1);
  let pageSize = ref(5);
  let users = ref([] as IUser[]);
  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:3000/users', {
        headers: {
          'x-api-key': '70335667-2408-4011-a994-ea3e7042d96f'
        }
      });
      users.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };
  onMounted(()=>{
    fetchData();
  });
  function displayedUsers(): Array<IUser> {
    const startIndex = (currentPage.value - 1) * pageSize.value;
    const endIndex = startIndex + pageSize.value;
    return users.value.slice(startIndex, endIndex);
  };
  function onClickHandler(page: number){
    currentPage.value = page;
  }
</script>

<template>
  <select name="userCount" id="userCount" v-model="pageSize">
    <option selected value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
  </select>
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
        <tr v-for="user in displayedUsers()" :key="user.id">
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
  <vue-awesome-paginate
    v-if="users.length"
    :total-items="users.length"
    :items-per-page="+pageSize"
    :max-pages-shown="4"
    v-model="currentPage"
    :on-click="onClickHandler"
  />
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
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>