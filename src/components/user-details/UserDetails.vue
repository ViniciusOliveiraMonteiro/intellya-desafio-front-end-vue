<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import moment from 'moment';
  import 'moment/locale/pt-br';
  import type { IUser } from '@/types/IUser';
  export default defineComponent({
    data(){
      return {
        user: {} as IUser,
        moment
      }
    },
    mounted() {
      this.fetchData();
    },
    components: {

    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
    methods: {
      async fetchData() {
        try {
          // rota de detalhe está /users, na documentação está /user
          const response = await axios.get(`http://localhost:3000/users/${this.id}`, {
            headers: {
              'x-api-key': '70335667-2408-4011-a994-ea3e7042d96f'
            }
          });
          this.user = response.data;
        } catch (error) {
          console.log(error);
        }
      },
      formatarData(data: string){
        return moment(data).format('DD/MM/YYYY [às] HH:mm');
      }
    }
  });
</script>

<template>
  <div class="d-flex justify-content-center">
    <table class="userDetail" v-if="user">
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
          <td>{{ formatarData(user.created_at) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
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