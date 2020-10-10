<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-sm-6 col-6">
        <textarea v-model="text" name="" cols="80" rows="15"></textarea><br>
        <button @click="gen" class="btn btn-success mr-1">Generate PDF</button>
        <button @click="view" class="btn btn-warning">View PDF</button>
      </div>
      <div class="col-sm-5 col-5 ml-5">
        <iframe :src="pdf" height="500" width="600" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import jspdf from 'jspdf';

export default {
  name: 'App',
  data(){
    return{
      text: '' ,
      pdf: '' 
    }
  },
  methods: {
    gen(){
      const doc = new jspdf();
      doc.text(this.text, 15, 15, {
        width: 170
      });
      doc.save('Example.pdf');
    },
    view(){
      const txt = new jspdf();
      txt.text(this.text, 15, 15);
      this.pdf = txt.output('datauristring');
    }
  }
}

</script>

<style>
  
</style>
