<template>
  <div class='search-bar'>
    <custom-input placeholder='Что хотите посмотреть?' class='search-bar__input' />
    <custom-button class='search-bar__search-button'>Найти</custom-button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scoped>
.search-bar {
  display: flex;
}

.custom-input {
  width: 100%;
}

.search-bar__input::v-deep .custom-input__input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.search-bar__search-button.custom-button {
  border-radius: 0 10px 10px 0;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

</style>