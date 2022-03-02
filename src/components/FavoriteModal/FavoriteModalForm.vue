<template>
  <form>
    <custom-input v-model='request' label='Запрос' class='fav-form__request-box'/>
    <custom-input v-model='name' label='* Название' type='password' class='fav-form__name-box'/>

    <div>
      <custom-button @click.prevent='cancel'>Не сохранять</custom-button>
      <custom-button @click.prevent='save'>Сохранить</custom-button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'FavoriteModalForm',

  setup() {
    const request = ref('');
    const name = ref('');
    const sortParam = ref(0);
    const count = ref(0);

    const save = () => {
      console.log('save');
    };

    const cancel = () => {
      console.log('cancel');
    };

    return {
      request,
      name,
      sortParam,
      count,
      save,
      cancel
    }
  }
}
</script>
