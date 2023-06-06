<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import moment from 'moment';
  import 'moment/locale/pt-br';
  import type { IUser } from '@/types/IUser';
  import { Request } from '@/libs/request';

  let user = ref(<IUser>({}));
  const request = new Request();
  const props = defineProps({
    id: {
      type: String,
      required: true
    }
  });
  async function fetchData() {
    try {
      // rota de detalhe está /users, na documentação está /user
      const response = await request.getResponse('/users/' + props.id);
      if (!Array.isArray(response)) {
        user.value = response;
      }
    } catch (error) {
      console.log(error);
    }
  };
  onMounted(() => {
    fetchData();
  });
  function formatDate(data: string){
    return moment(data).format('DD/MM/YYYY [às] HH:mm');
  }
</script>

<template>
  <div class="d-flex justify-content-center">
    <div 
      class="noRegisterFound"
      v-if="!Object.keys(user).length"
    >
      <span>Nenhum registro encontrado</span>
    </div>
    <table class="userDetail" v-if="Object.keys(user).length">
      <tbody>
        <tr>
          <td>Nome</td>
          <td>{{ user.name }}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{{ user.email }}</td>
        </tr>
        <tr>
          <td>Nível de acesso</td>
          <td>{{ user.role === 'member' ? 'Membro' : 'Administrador' }}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{{ user.active ? 'Ativo' : 'Inativo' }}</td>
        </tr>
        <tr>
          <td>Data de cadastro</td>
          <td>{{ formatDate(user.created_at) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
  .noRegisterFound {
    margin-top: 50px;
    color: #7d7d7d;
  }
  .noRegisterFound span {
    font-weight: bold;
    font-family: sans-serif;
  }
  .userDetail {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 1em;
    font-family: sans-serif;
    min-width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    overflow: hidden;
  }
  .userDetail td:has(a){
    padding-right: 15px;
    text-align: end;
  }
  .userDetail tbody > tr:not(:last-child) {
    border-bottom: 1px solid #dddddd;
  }
  .userDetail td {
    padding: 30px;
  }
  .userDetail tbody tr > :first-child {
    font-weight: bold;
  }
</style>