<template>
  <v-container class="pt-4">
    <div class="image-work">      
      <div class="d-flex justify-space-between align-center">
        <h1>Edit Sports & Athletics for {{ institutionName }}</h1>
      </div>
      <div class="d-flex align-center mt-8">
        <v-btn
          color="primary"
          @click="showAddSportDialog = true"
          class="me-4"
        >
          Add Sport
        </v-btn>
        <v-switch
          v-model="isNAIAMember"
          label="NAIA Member"
          color="primary"
          hide-details
          density="compact"
          class="ms-4"
          @update:model-value="toggleNAIA"
        ></v-switch>
      </div>
    </div>

    <!-- Add Sport Dialog -->
    <v-dialog v-model="showAddSportDialog" width="600px">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center pa-4">
          <span>Add New Sport</span>
          <v-btn icon="mdi-close" variant="text" @click="showAddSportDialog = false"></v-btn>
        </v-card-title>
        <v-card-text class="pa-4">
          <v-autocomplete
            v-model="newSport.sport_name"
            :items="sportList"
            label="Select Sport"
            density="compact"
            variant="outlined"
            class="mb-4"
          />
          
          <div class="division-section">
            <h4>Intercollegiate</h4>
            <div class="division-row">
              <div class="division-item">
                <span class="division-label">Men</span>
                <v-select
                  v-model="newSport.divisions.INTC_MEN"
                  :items="divisionOptions"
                  density="compact"
                  variant="outlined"
                />
              </div>
              <div class="division-item">
                <span class="division-label">Women</span>
                <v-select
                  v-model="newSport.divisions.INTC_WMN"
                  :items="divisionOptions"
                  density="compact"
                  variant="outlined"
                />
              </div>
            </div>
          </div>

          <div class="division-section mt-4">
            <h4>Intramural</h4>
            <div class="division-row">
              <div class="division-item">
                <span class="division-label">Men</span>
                <v-select
                  v-model="newSport.divisions.INTM_MEN"
                  :items="divisionOptions"
                  density="compact"
                  variant="outlined"
                />
              </div>
              <div class="division-item">
                <span class="division-label">Women</span>
                <v-select
                  v-model="newSport.divisions.INTM_WMN"
                  :items="divisionOptions"
                  density="compact"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="addSport"
            :disabled="!newSport.sport_name"
          >
            Add Sport
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Existing sports cards -->
    <div v-if="sports.length" class="mt-8 sport-cards-container">
      <v-card 
        v-for="sport in sortedSports" 
        :key="sport.sport_name"
        class="mb-4 pa-4 sport-container"
        :class="{ 'hidden-sport': isHidden(sport) }"
      >
        <div class="d-flex justify-space-between align-center">
          <h3>
            {{ sport.sport_name }}
            <!-- <span>
              Hidden: {{ isHidden(sport) }}
            </span> -->
          </h3>          
          <div>
            <v-btn
              :color="isHidden(sport) ? 'success' : 'error'"
              variant="text"
              class="me-2"
              @click="toggleSportVisibility(sport.sport_name)"
            >
              {{ isHidden(sport) ? 'Show Sport' : 'Hide Sport' }}
            </v-btn>
            <v-btn
              color="error"
              variant="text"
              @click="deleteSport(sport.sport_name)"
            >
              Delete Sport
            </v-btn>
          </div>
        </div>

        <div class="mt-4">
          <div class="division-section">
            <h4>Intercollegiate</h4>
            <div class="division-row">
              <div class="division-item">
                <span class="division-label">Men</span>
                <v-select
                  v-model="sport[`${sport.sport_name.toLowerCase().replace(/ /g, '_')}_divisions`]['INTC_MEN']"
                  :items="divisionOptions"
                  @update:modelValue="updateDivision(sport, 'INTC_MEN', $event)"
                  density="compact"
                  variant="outlined"
                />
              </div>
              <div class="division-item">
                <span class="division-label">Women</span>
                <v-select
                  v-model="sport[`${sport.sport_name.toLowerCase().replace(/ /g, '_')}_divisions`]['INTC_WMN']"
                  :items="divisionOptions"
                  @update:modelValue="updateDivision(sport, 'INTC_WMN', $event)"
                  density="compact"
                  variant="outlined"
                />
              </div>
            </div>
          </div>

          <div class="division-section mt-4">
            <h4>Intramural</h4>
            <div class="division-row">
              <div class="division-item">
                <span class="division-label">Men</span>
                <v-select
                  v-model="sport[`${sport.sport_name.toLowerCase().replace(/ /g, '_')}_divisions`]['INTM_MEN']"
                  :items="divisionOptions"
                  @update:modelValue="updateDivision(sport, 'INTM_MEN', $event)"
                  density="compact"
                  variant="outlined"
                />
              </div>
              <div class="division-item">
                <span class="division-label">Women</span>
                <v-select
                  v-model="sport[`${sport.sport_name.toLowerCase().replace(/ /g, '_')}_divisions`]['INTM_WMN']"
                  :items="divisionOptions"
                  @update:modelValue="updateDivision(sport, 'INTM_WMN', $event)"
                  density="compact"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
/* eslint-disable no-unused-vars */
import { dbFireStore } from "../firebase";
import { collection, query, getDocs, where, doc, getDoc, setDoc } from 'firebase/firestore';
import { sportList } from '../data/sportList';

export default {
  name: 'SportsWork',
  data() {
    return {
      institutionSlug: this.$route.params.slug,
      institutionName: '',
      sports: [],
      divisionOptions: ['None selected', '1', '2', '3', 'A', 'B', 'C', 'X'],
      showAddSportDialog: false,
      sportList,
      newSport: {
        sport_name: '',
        divisions: {
          INTC_MEN: '',
          INTC_WMN: '',
          INTM_MEN: '',
          INTM_WMN: ''
        }
      },
      isNAIAMember: false,
    }
  },
  computed: {
    sortedSports() {
      return [...this.sports].sort((a, b) => 
        a.sport_name.localeCompare(b.sport_name)
      );
    }
  },
  mounted() {
    this.getSports();
  },
  methods: {
    isHidden(sport) {
      const hiddenFieldName = `${sport.sport_name.toLowerCase().replace(/ /g, '_').replace(/\((.*?)\)/, '$1').trim()}_hidden`;
      return sport[hiddenFieldName];
    },
    async getSports() {
      const docRef = doc(dbFireStore, 'institutions_integrated', this.institutionSlug);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        this.institutionName = data.name;
        this.isNAIAMember = data.assnAthlNaia === 'TRUE';
        if (data.sports) {
          this.sports = data.sports;
        }
      }
    },
    async updateDivision(sport, divisionKey, newValue) {
      const divisionObj = sport[`${sport.sport_name.toLowerCase().replace(/ /g, '_')}_divisions`];
      divisionObj[divisionKey] = newValue;
      await this.saveSportsToFirestore(this.sports);
    },
    async saveSportsToFirestore(sportsData) {
      try {
        // Save to institutions_integrated
        await setDoc(doc(dbFireStore, 'institutions_integrated', this.institutionSlug), {
          sports: sportsData
        }, { merge: true });

        // Save to manual_institution_data
        await setDoc(doc(dbFireStore, 'manual_institution_data', this.institutionSlug), {
          sports: sportsData
        }, { merge: true });

      } catch (error) {
        console.error('Error saving sports data:', error);
      }
    },
    async toggleSportVisibility(sportName) {
      const sport = this.sports.find(s => s.sport_name === sportName);
      const hiddenFieldName = `${sportName.toLowerCase().replace(/ /g, '_').replace(/\((.*?)\)/, '$1').trim()}_hidden`;
      const currentHiddenState = sport[hiddenFieldName];
      
      const message = !currentHiddenState
        ? `Are you sure you want to show ${sportName}?`
        : `Are you sure you want to hide ${sportName}?`;

      if (confirm(message)) {
        const updatedSports = this.sports.map(s => {
          if (s.sport_name === sportName) {
            return { 
              ...s, 
              [hiddenFieldName]: !currentHiddenState 
            };
          }
          return s;
        });
        await this.saveSportsToFirestore(updatedSports);
        this.sports = updatedSports;
      }
    },
    async addSport() {
      if (!this.newSport.sport_name) return;

      // Ensure this.sports is an array
      if (!Array.isArray(this.sports)) {
        this.sports = [];
      }

      const sportName = this.newSport.sport_name.toLowerCase();
      const divisionsKey = `${sportName.replace(/ /g, '_')}_divisions`;
      
      const sportToAdd = {
        sport_name: this.newSport.sport_name,
        [divisionsKey]: {
          INTC_MEN: this.newSport.divisions.INTC_MEN,
          INTC_WMN: this.newSport.divisions.INTC_WMN,
          INTM_MEN: this.newSport.divisions.INTM_MEN,
          INTM_WMN: this.newSport.divisions.INTM_WMN
        }
      };

      const updatedSports = [...this.sports, sportToAdd];
      await this.saveSportsToFirestore(updatedSports);
      this.sports = updatedSports;
      
      // Reset form and close dialog
      this.newSport = {
        sport_name: '',
        divisions: {
          INTC_MEN: '',
          INTC_WMN: '',
          INTM_MEN: '',
          INTM_WMN: ''
        }
      };
      this.showAddSportDialog = false;
    },
    async deleteSport(sportName) {
      if (confirm(`Are you sure you want to delete ${sportName}?`)) {
        const updatedSports = this.sports.filter(s => s.sport_name !== sportName);
        await this.saveSportsToFirestore(updatedSports);
        this.sports = updatedSports;
      }
    },
    async toggleNAIA(value) {
      const naiaValue = value ? 'TRUE' : 'FALSE';
      try {
        // Save to institutions_integrated
        await setDoc(doc(dbFireStore, 'institutions_integrated', this.institutionSlug), {
          assnAthlNaia: naiaValue
        }, { merge: true });

        // Save to manual_institution_data
        await setDoc(doc(dbFireStore, 'manual_institution_data', this.institutionSlug), {
          assnAthlNaia: naiaValue
        }, { merge: true });

      } catch (error) {
        console.error('Error saving NAIA status:', error);
      }
    },
  }
}
</script>

<style>
.division-section {
  padding: 16px;
  border-radius: 8px;
}

.division-section h4 {
  margin-bottom: 12px;
  color: rgba(0, 0, 0, 0.87);
}

.division-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.division-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.division-label {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}

.sport-container {
  background-color: #ffffff;
  border: 2px solid green;
}

.hidden-sport {
  border: 2px solid red;
}

.sport-cards-container {
  gap: 16px;
}
</style>