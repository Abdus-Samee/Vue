<template>
  <div id="app" class="center">
    <h1>GitHub Repository</h1>
    <span>User </span>
    <input type="text" v-model="user" name="user-name">
    <button class="btn btn-outline-info ml-3 mb-1" @click="git()">GO!</button>
    <div v-if="image !== ''">
      <Avatar v-bind:image="image"/>
    </div>
    <table class="table table-striped" v-bind:class="{'hid': hid}">
      <thead class="thead-dark">
        <tr>
          <th>Repository</th>
          <th>Language</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="repo in repos" :key="repo.id">
          <td>{{ repo.name }}</td>
          <td>{{ repo.language }}</td>
          <td><a v-bind:href="repo.html_url">{{ repo.name }} GitHub url</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

import Avatar from './components/Avatar';

export default {
  name: 'App',
  data(){
    return{
      user: '',
      hid: true,
      repos: [],
      image: ''
    }
  },
  components: {
    Avatar
  },
  methods: {
    git(){
      axios.get('https://api.github.com/users/' + this.user + '/repos')
           .then(res => {
             this.repos = res.data;
             this.image = res.data[0].owner.avatar_url;
             if(res.status !== 200){
               this.hid = true;
               alert('Error occured! Please try again...');
             }
             else this.hid = false;
           })
           .catch(err => {
             console.log(err);
             alert('Invalid input! Please try again...');
             this.user = '';
           });
    }
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: Arial, Helvetica, san-serif;
    line-height: 1.4;
  }

  .center{
    text-align: center;
  }

  .hid{
    visibility: hidden;
  }
</style>
