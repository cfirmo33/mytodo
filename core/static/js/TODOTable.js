Vue.component('todo-table', {
  props: ['todotarefas'],
   data: function(){
     return {};
   },
  methods: {
    remove: function(tarefa){
      var idx = this.todotarefas.indexOf(tarefa);
      this.todotarefas.splice(idx, 1);
    }
  },
  template:`
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>To-do</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tarefa in todotarefas">
          <td><input type="checkbox" v-model="tarefa.feita"></td>
          <td :class="{risca: tarefa.feita}">{{tarefa.tarefa}}</td>
          <td><button class="button is-warning" @click="remove(tarefa)"><span class="icon has-text-info">
            <i class="fa fa-trash-o"></i></span></button></td>
        </tr>
      </tbody>
    </table>
  `,
})