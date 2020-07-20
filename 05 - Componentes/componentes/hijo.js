Vue.component('hijo',{
  template:
  `
  <div class="py-5 bg-info">
    <h4>Componente hijo: {{numero}}</h4>
    <h4>Nombre: {{nombre}}</h4>
    <button class="btn btn-success" @click="numero++">+</button>
  </div>
  `,
  props: ['numero'],
  data(){
    return{
      nombre: 'Ulises'
    }
  },
  mounted(){
    this.$emit('nombreHijo',this.nombre);
  },
})
