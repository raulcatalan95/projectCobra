<template>
    <div class="Login">
<img src="../assets/logo_cobra.png" alt="" class="mb-5 mt-3"/>

           
   <div class="formulario  p-3">
     <p class="mb-4">Inicia Sesion</p>
     <h5>Correo Electronico</h5>
      <b-input-group >
      <b-input-group-prepend is-text>
        <b-icon icon="envelope"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="email" placeholder="correo@example.com"  v-model="correo"></b-form-input>
    </b-input-group>
   
   
    <h5>Contraseña</h5>
     <b-input-group >
      <b-input-group-prepend is-text>
        <b-icon icon="lock-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="password" placeholder="contraseña"  v-model="contraseña"></b-form-input>
    </b-input-group>
    <el-button type="primary" class=" mt-4" :loading="false" @click="login" v-if="loading==false">Ingresar</el-button>
    <el-button type="primary"  class="mt-4" :loading="true" @click="login" v-else>Cargando</el-button>
</div>


</div>
</template>
<script>
import Firebase from 'firebase'
export default {
  name:'login',
  
  data() {
    return {
      correo:'prueba@mail.com',
      contraseña:'123456',
      loading:false,
    }
  },
  computed: {
 
  },
methods: {
  
 login() {
   this.loading=true
 Firebase.auth().signInWithEmailAndPassword(this.correo,this.contraseña).then(
 accept => {
   this.loading=false
   let usuario = Firebase.auth().currentUser.email;
    this.$notify({
          title: `Bienvenido ${usuario}`,
          message: 'Sesion Iniciada Correctamente',
          type: 'success'
        });
 this.$router.push('/');
 console.log(accept.email)
 },
 reject => {
   this.loading=false
  this.$notify.error({
          title: 'Error',
          message: 'Usuario no existe '
        });
console.log(reject.message)
 
 
 });
 },

},
}
</script>

<style>
.Login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.formulario{
    
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    border: solid 2px #0067c2;
    ;
}
.subtitulo{
border:solid 2px #0067c2 ;
padding:5px;
margin: 0%;
border-radius: 15px 15px 0px 0px;
}    

</style>
 