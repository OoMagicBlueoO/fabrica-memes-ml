<template>
  <v-container>
    <v-layout > 
      <v-flex xs12 pl-2>
        <input type="file" ref="fileInput" id="file" @change="processFile($event)">
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs-12 pb-3>
        <v-btn color="primary" @click="uploadFile">Enviar</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { firestore } from '@/main'
import { storage } from '@/main'
  export default {
    data: () => ({
     file:''
    }),
    methods:{
      processFile(event){
        this.file = event.target.files[0]
      },
      uploadFile(){
        let name = (+new Date()+ '-')+ this.file.name
        let metadata = { contentType: this.file.type }
        storage.child(name).put(this.file,metadata)
        .then(snapshot => snapshot.ref.getDownloadURL())
      }
    }
  }
</script>

<style>

</style>
