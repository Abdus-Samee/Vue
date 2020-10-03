<template>
  <div class="">
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem v-bind:todo='todo' @del-todo="$emit('del-todo', todo.id)"/>
    </div>
  </div>
</template>

<script>
  import TodoItem from './TodoItems';

  export default{
    name: 'Todos',
    props: ['todos'],
    components: {
      TodoItem
    }
  }
</script>

<style scoped>

</style>
