const TodoApp = {
	data(){
		return{
			newTodo: '',
			todos:[
				{task:'eat unicorn',completed:false},
				{task:'eat popcorn',completed:false},			]
		}
	},
	methods:{
		addTodo(){
			//console.log(this.newTodo);
			//this.todos.push(this.newTodo);
			this.todos.push({task:this.newTodo,completed:false});
			this.newTodo = '';
		},
		removeTodo(index){
			this.todos.splice(index,1);
		}
	},
	
}
Vue.createApp(TodoApp).mount('section.todoapp')