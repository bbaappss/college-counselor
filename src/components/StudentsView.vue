<template>
  <v-container class="pt-8 px-8">
    <h1>Students</h1>
    <v-row class="mt-4">
      <v-col cols="4">
        <ul>
          <li class="mt-4" v-for="student in userStudents" :key="student.id">
            <p><strong>{{ student.name }}</strong></p>
            <p>Email: {{ student.email }}</p>            
            <p>GPA: {{ student.gpa }}</p>            
          </li>
        </ul>
      </v-col>
      <v-col cols="4">
        <v-text-field       
          type="text"
          label="Name"       
          placeholder="Name"       
          v-model="newStudentName"     
        />
        <v-text-field       
          type="text"       
          label="GPA"
          placeholder="3.7"       
          v-model="newStudentGPA"     
        />
        <v-text-field       
          type="email"       
          label="email"       
          placeholder="joedirt@gmail.com"       
          v-model="newStudentEmail"     
        />        <v-btn
          @click="createNewStudent"
        >
          Create new student
        </v-btn>     
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import { dbFireStore } from "../firebase";
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'

export default {
  setup() {
  },
  mounted() {
    this.loadUserStudents();
  },
  beforeUnmount() {
  },
  data() {
    return {
      newStudentName: "",
      newStudentEmail: "",
      newStudentGPA: "",
      userStudents: {}
    }
  },
  methods: {
    async loadUserStudents() {
      const students = collection(dbFireStore, 'students');
      const docSnap = await getDocs(students);
      this.userStudents = docSnap.docs.map(doc => doc.data());
    },
    async createNewStudent() {
      await setDoc(doc(dbFireStore, 'students', this.newStudentName), {
        name: this.newStudentName,
        email: this.newStudentEmail,
        gpa: this.newStudentGPA
      })
    },
    async sendStudent() {
      // Send student
    }  
  }
};
</script>

<style>


</style>