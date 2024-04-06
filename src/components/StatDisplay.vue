<template>
    <div class="stat-container" style="position: relative">
      <div class="d-flex justify-between">
        <div>
        <span class="stat-label">{{ label }}</span>
        <span class="stat-content d-flex">
          <span class="d-block">{{ currentValue?.toLocaleString() || '—' }}</span>
        </span>
      </div>
      <v-btn
        v-if="userStore.adminMode"
        density="compact"
        class="ml-4"
        icon="mdi-pencil"
        @click="editMode = !editMode"
        variant="plain"
        color="primary"
      />
      </div>
      <div class="mt-4">
        <div 
          v-if="editMode && userStore.adminMode"
        >
          <v-text-field
            label="Manual Value"
            v-model="this.updateValue"
            @input="saveButtonVisibility"
            clearable
          >
          </v-text-field>
          <v-text-field
            label="Value from Petersons"
            v-model="this.petersonsValue"
            disabled
            >
          </v-text-field>
          <v-btn
            v-if="saveButtonVisibility"
            value="save"
            @click="this.updateDB"
          >Save</v-btn>
        </div>
      </div>
    </div>
  </template>

<script>
import { dbFireStore } from "../firebase";
import { setDoc, doc, deleteField } from 'firebase/firestore'
import { useUserStore } from '../stores/userStore';

export default {
  setup() {
    let userStore = useUserStore();
    userStore.getAdminMode();
    return { 
      userStore 
    }
  },
  mounted() {

  },
  data() {
    return {
      editMode: false,
      currentValue: null,
      updateValue: null,
      petersonsValue: null,
      manualValue: null,
    }
  },
  methods: {
    updateDB() {
      if (this.updateValue === null) {
        setDoc(doc(dbFireStore, 'manual_institution_data', this.uri), {
          [this.field]: deleteField()
        }, { merge: true });
      } else {
        setDoc(doc(dbFireStore, 'manual_institution_data', this.uri), {
          [this.field]: this.updateValue
        }, { merge: true });
      }

      if (this.updateValue) {
        this.currentValue = this.updateValue;
      } else {
        this.currentValue = this.petersonsValue;
      }
    },
    saveButtonVisibility(){
      console.log(this.currentValue, this.updateValue);
      console.log(this.currentValue !== this.updateValue || this.updateValue === null)
      if (this.currentValue !== this.updateValue || this.updateValue === null) {
        return true
      } else {
        return false
      }
    }
  },
  props: {
    label: {
      type: String,
    },  
    valueFromPetersons: {
      type: [Number, String],
    },
    valueFromManual: {
      type: [Number, String],
    },
    uri: {
      type: String,
    },
    field: {
      type: String,
    }
  },
  watch: {
    valueFromPetersons(newVal) {
      if (newVal) {
        this.petersonsValue = newVal;
        this.currentValue = this.petersonsValue
      }
    },
    valueFromManual(newVal) {
      if (newVal) {
        this.manualValue = newVal;
        this.currentValue = this.manualValue
        this.updateValue = this.manualValue
      }
    },
  },
}
</script>
  
<style scoped>
/* Add your CSS styles here */
</style>