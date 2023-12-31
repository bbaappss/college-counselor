<template>
  <v-container style="padding:0 16px;">
    <div style="margin: 0 auto 64px; max-width: 1236px;">
      <v-row class="d-flex justify-space-between mt-0">
        <v-col cols="12" md="6">
          <h1 class="text-h6">{{ institution["name"] }}</h1>
          <span style="font-weight: 500;">{{ descriptions.tagline }}</span>
        </v-col>
        <v-col cols="12" md="6" class="d-md-flex align-center justify-end pt-0">
          <v-btn
            @click="showSaveToListDialog = true"
          >
            Add to list
          </v-btn>
        </v-col>
      </v-row>
      <div class="section-container location-links-images-container mt-2">
        <div class="d-flex flex-column">
          <div class="location-container d-flex flex-column" style="gap: 12px">
            <div class="stat-container">
              <span class="stat-label">Country</span>
              <span class="stat-content">{{ institution["countryCode"] }}</span>
            </div>
            <div class="stat-container">
              <span class="stat-label">City</span>
              <span class="stat-content">{{ institution["city"] }}</span>
            </div>
            <div class="stat-container">
              <span class="stat-label">State</span>
              <span class="stat-content">{{ institution["stateCleaned"] }}</span>
            </div>
          </div>
          <div class="external-links mt-4">
            <ul class="mt-3 header-links d-flex flex-column no-wrap" style="gap: 12px;">
              <li><a :href="institution['urlAddress']" target="_blank">Official site</a></li>
              <li v-if="institution['urlAddressPriceCalc2023'] !== 'null'"><a :href="institution['urlAddressPriceCalc2023']" target="_blank">Net Price Calculator</a></li>          
              <!-- <li><a :href="institution['adEmail']" target="_blank">Admissions</a></li> -->
            </ul>
          </div>
        </div>
        <div class="institution-images-container mt-xs-4 mt-sm-4">
          <div class="img-bg">
            <img :src="image " v-for="(image, index) in images.slice(0, 1)" class="institution-image" :key="index" />
          </div>
          <div class="institution-images-grid">
              <template v-for="(image, index) in images.slice(1, 5)" :key="index">
                <div class="img-bg">
                  <img class="institution-image" :src="image" />
                </div>
              </template>
          </div>
        </div>                        
      </div>
      <div class="section-container three-by-three-stat-grid mt-8">
        <div class="stat-container">
          <span class="stat-label">Sector</span> 
          <span class="stat-content">{{ institution["mainInstControlDesc"] }}</span>
        </div>


        <div class="stat-container">
          <span class="stat-label">Undergraduate Enrollment</span>
          <span class="stat-content">{{ institution["grsBachInitN"]?.toLocaleString() || '—' }} </span>
        </div>

        <div class="stat-container">
          <span class="stat-label">Graduate Enrollment</span> 
          <span class="stat-content">{{ institution["enTotGradN"]?.toLocaleString() || '—' }}</span>
        </div>

        <div class="stat-container"><span class="stat-label">Calendar </span> <span class="stat-content">{{ institution["mainCalendar"] }}</span></div>
        
        <div class="stat-container">
          <span class="stat-label">Admission Difficulty</span>
          <span class="stat-content">{{ institution["adDiffAll"]?.toLocaleString() || '—' }}</span>
        </div>

        <div class="stat-container">
          <span class="stat-label">Admission Rate</span>
          <span class="stat-content">{{ (institution["admitRate"]?.toLocaleString() * 100).toFixed(0) || '—' }}%</span>
        </div>
        
        <div class="multiple-stat-container">
          <div class="stat-container"><span class="stat-label">Applicants</span> <span class="stat-content">{{ institution["apRecd1stN"]?.toLocaleString() || '—' }}</span></div>
          <div class="stat-container"><span class="stat-label">Admits</span> <span class="stat-content">{{ institution["apAdmt1stN"]?.toLocaleString() || '—' }}</span></div>
        </div>
        
        <div class="multiple-stat-container">
          <div class="stat-container"><span class="stat-label">Men</span> <span class="stat-content">{{ institution["enFrshFtMenN"]?.toLocaleString() || '—' }}</span></div>
          <div class="stat-container"><span class="stat-label">Women</span> <span class="stat-content">{{ institution["enFrshFtWmnN"]?.toLocaleString() || '—' }}</span></div>
        </div>

        <div class="multiple-stat-container">
          <div class="stat-container"><span class="stat-label">SAT 50th%ile</span> <span class="stat-content">{{ institution["satComp50thP"]?.toLocaleString() || '—' }}</span></div>
          <div class="stat-container"><span class="stat-label">ACT 50th%ile</span> <span class="stat-content">{{ institution["actComp50thP"]?.toLocaleString() || '—' }}</span></div>
        </div>

        <div class="stat-container"><span class="stat-label">Average GPA </span> <span class="stat-content">{{ institution["frshGpa"]?.toLocaleString() || '—' }}</span></div>

        <div class="stat-container">
          <span class="stat-label">Religious </span> 
          <span v-if="institution['denomDesc'] !== 'null'" class="stat-content">{{ institution["denomDesc"] }}</span> 
          <span v-if="institution['afilDesc'] !== 'null'" class="stat-content">{{ institution["afilDesc"] }}</span>
          <span v-if="institution['denomDesc'] == 'null' && institution['afilDesc'] == 'null'" class="stat-content">—</span>
        </div>


        <div class="multiple-stat-container">
          <div class="stat-container"><span class="stat-label">HBCU</span> <span class="stat-content">{{ institution["hbcu"] }}Coming Soon</span></div>
          <div class="stat-container"><span class="stat-label">Tribal</span> <span class="stat-content">{{ institution["tribal"] }}Coming Soon</span></div>
        </div>

      </div>

      <div class="section-container descriptions-container mt-8">
        <v-expansion-panels>
          <v-expansion-panel :value="0">
            <v-expansion-panel-title>
              <h3>Academics</h3>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="">{{ descriptions.academics }}</p>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h3>Surrounding Area</h3>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="">{{ descriptions.surroundingArea }}</p>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h3>Transportation</h3>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="">{{ descriptions.transportation }}</p>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h3>Social Life</h3>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="">{{ descriptions.socialLife }}</p>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h3>Campus</h3>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="">{{ descriptions.campus }}</p>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h3>Top 5 Popular Majors</h3>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="">{{ descriptions.top5PopularMajors }}</p>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <h3>Strengths and Areas of Growth</h3>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p class="">{{ descriptions.strengthsAndAreasOfGrowth }}</p>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div class="section-container three-by-three-stat-grid mt-8">
        <div class="stat-container"><span class="stat-label">Tuition</span> <span class="stat-content">${{ institution["tuitState1stFtD2023"]?.toLocaleString() || '—' }}</span></div>
        <div class="stat-container"><span class="stat-label">Tuition Non-Resident</span> <span class="stat-content">${{ institution["tuitNresFtD2023"]?.toLocaleString() || '—' }}</span></div>
        <div class="multiple-stat-container">
          <div class="stat-container"><span class="stat-label">Males in Greek </span> <span class="stat-content">{{ institution["fratP"] }}%</span></div>
          <div class="stat-container"><span class="stat-label">Females in Greek </span> <span class="stat-content">{{ institution["soroP"] }}%</span></div>
        </div>

        <div class="stat-container"><span class="stat-label">Undergrad Pell Grants Awarded</span> <span class="stat-content">{{ institution["grsBachInitPellN"]?.toLocaleString() || '—' }}</span></div>
        <div class="stat-container"><span class="stat-label">Merit Scholarships Awarded <br/><span>(excluding athletics)</span> </span> <span class="stat-content">{{ institution["ugFtNnNoneedN"]?.toLocaleString() || '—' }}</span></div>
        <div class="stat-container"><span class="stat-label">Testing Policy</span> <span class="stat-content not-yet-found">Coming soon</span></div>
        <div class="stat-container"><span class="stat-label">Average Need-Based Scholarship</span> <span class="stat-content">${{ institution["ugFtAvgNbGiftD"]?.toLocaleString() || '—' }}</span></div>
        <div class="stat-container"><span class="stat-label">Average Merit Scholarship <br/><span>(excluding athletics)</span> </span> <span class="stat-content">${{ institution["ugFtNnNoneedD"]?.toLocaleString() || '—' }}</span></div>

        <div class="stat-container"><span class="stat-label">Freshmen Living on Campus</span> <span class="stat-content">{{ institution["hous1stUgP"] }}%</span></div>
        <div class="stat-container"><span class="stat-label">Out-of-State Population</span> <span class="stat-content">{{ institution["enNresP"] }}%</span></div>

        <div class="stat-container"><span class="stat-label">International Population</span> <span class="stat-content not-yet-found">{{ institution["undergraduatesOutOfState"] }} Rya to find</span></div>

        <div class="stat-container"><span class="stat-label">Freshman Retention Rate</span> <span class="stat-content">{{ Math.round(institution["retentionFrshP"]) }}%</span></div>
      </div>

      <div class="section-container" style="margin-top: 80px;">
        <h2>Student Ethnicity (Freshman only?)</h2>
        <div>
          <div class="hello" ref="chartdiv"></div>
        </div>
        <div class="ethnic-stats">
          <h3 class="text-center">Number of enrolled students</h3>
          <div class="three-by-three-stat-grid mt-4" style="max-width: 900px; margin: 0 auto;">
            <div class="stat-container">          
              <span class="stat-label">International</span> 
              <span class="stat-content">{{ institution["en1stNonresAlien1stN"] }}</span>
            </div>
            <div class="stat-container">
              <span class="stat-label">Asian</span> 
              <span class="stat-content">{{ institution["en1stAsianNonhispanicN"] }}</span>
            </div>
            <div class="stat-container">
              <span class="stat-label">Black</span> 
              <span class="stat-content">{{ institution["en1stBlackNonhispanicN"] }}</span>
            </div>
            <div class="stat-container">
              <span class="stat-label">Hispanic</span> 
              <span class="stat-content">{{ institution["en1stHispanicEthnicityN"] }}</span>
            </div>
            <div class="stat-container">
              <span class="stat-label">Native Hawaiian or other Pacific Islander</span> 
              <span class="stat-content">{{ institution["en1stIslanderNonhispanicN"] }}</span>
            </div>
            <div class="stat-container">
              <span class="stat-label">Multirace</span> 
              <span class="stat-content">{{ institution["en1stMultiraceNonhispanicN"] }}</span>
            </div>
            <div class="stat-container">
              <span class="stat-label">American Indian or Alaska Native</span> 
              <span class="stat-content">{{ institution["en1stNativeNonhispanicN"] }}</span>
            </div>
            <div class="stat-container">
              <span class="stat-label">Unknown</span> 
              <span class="stat-content">{{ institution["en1stRaceEthnicityUnknwnN"] }}</span>
            </div>
            <div class="stat-container">
              <span class="stat-label">White</span> 
              <span class="stat-content">{{ institution["en1stWhiteNonhispanicN"] }}</span>
            </div>
          </div>

        </div>
      </div>
      <div class="section-container mt-8">
        <h2>Testing</h2>
        <div class="stat-container mt-2">
          <span class="stat-label">Policy</span> 
          <span v-if="institution['adTestPolicyT'] !== 'null'" class="stat-content">{{ institution["adTestPolicyT"]?.toLocaleString() || '—' }}</span>
          <span v-if="institution['adTestPolicyT'] == 'null'" class="stat-content">—</span>
        </div>

        <div class="multiple-stat-container mt-4">
          <div class="stat-container"><span class="stat-label">SAT 50th%ile</span> <span class="stat-content">{{ institution["satComp50thP"]?.toLocaleString() || '—' }}</span></div>
          <div class="stat-container"><span class="stat-label">ACT 50th%ile</span> <span class="stat-content">{{ institution["actComp50thP"]?.toLocaleString() || '—' }}</span></div>
        </div>
      </div>
      <div class="section-container mt-8">
        <h2>Majors/Fields of Study</h2>
          <v-list v-if="majors !== null">
            <div class="three-by-three-stat-grid">
              <v-list-item 
                  v-for="major in majors" 
                  :key="major"
                >
                <p>{{ major }}</p>
              </v-list-item>
            </div>
          </v-list>
      </div>
      <div class="section-container mt-8">
        <h2>Sports</h2>
        <div class="flex">
          <div class="flex" style="gap: 20px">
            <h3 class="mt-3">Associations</h3>
            <div class="multiple-stat-container mt-2">
              <div class="stat-container">
                <span class="stat-label">NCAA*</span> 
                <span class="stat-content">{{ institution["assnAthlNcaa"]?.toLocaleString() || '—' }}</span>
              </div>

                <div class="stat-container">
                <span class="stat-label">NCCAA</span> 
                <span class="stat-content">{{ institution["assnAthlNccaa"]?.toLocaleString() || '—' }}</span>
              </div>
                
              <div class="stat-container">
                <span class="stat-label">NAIA</span> 
                <span class="stat-content">{{ institution["assnAthlNaia"]?.toLocaleString() || '—' }}</span>
              </div>
            </div>
            <p style="font-style: italic; font-size: 14px;">* 1 = Division 1; 2 = Division 2; 3 = Division 3;</p>
          </div>
        </div>

        <h3 class="mt-6">All sport offerings</h3>
        <v-data-table 
          v-if="sports !== null"
          :headers="sportsHeaders"
          :items="sports"
          :items-per-page="-1"
        >
          <template #bottom></template>
        </v-data-table>
        <p class="mt-4" style="font-style: italic; font-size: 14px;">* 1 = Division 1; 2 = Division 2; 3 = Division 3; A = NCAA Division 1-A; B = NCAA Division 1-AA; C = intercollegiate club teams; 
        </p>
      </div>

    </div>
    <SaveToListDialog 
      v-model="showSaveToListDialog" 
      :institutionId="institutionId"
    />
  </v-container>
</template>
 
<script>
import { dbFireStore } from "../firebase";
import { collection, query, where, getDocs } from 'firebase/firestore'
import SaveToListDialog from './SaveToListDialog'

import * as am5 from '@amcharts/amcharts5';
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';


export default {
  setup() {
  },
  beforeMount() {
    this.loadInstitutionData();
  },
  mounted() {
  },
  beforeUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  },
  data() {
    return {
      institution: {},
      descriptions: {},
      institutionId: "",
      images: [],
      showSaveToListDialog: false,
      descriptionPanels: [],
      majors: [],
      sports: [],
      sportsHeaders: [
      { title: 'Sport', key: 'descr', width: "300px" },
      { title: 'Intramural Men', key: 'maxIntmMen', width: "200px" },
      { title: 'Intramural Women', key: 'maxIntmWmn', width: "200px" },
      { title: 'Intercollegiate Men', key: 'maxIntcMen', width: "200px" },
      { title: 'Intercollegiate Women', key: 'maxIntcWmn', width: "250px" },
      ]
    }
  },
  methods: {
    async loadInstitutionData() {
      const slugFromURL = this.$route.params.slug;
      const institutions = collection(dbFireStore, 'Institutions');
      const q = query(institutions, where("uri", "==", slugFromURL));
      const docSnap = await getDocs(q);
      docSnap.forEach((doc) => {
        this.institutionId = doc.id;
        this.institution = doc.data();
        this.majors = this.institution.acadProgDesc.split(',');
        this.majors.sort();
      });
      this.getImages();
      this.getDescriptions();
      this.getSports();
      this.makeEthnicityGraph();
    },
    async getDescriptions() {
      const slugFromURL = this.$route.params.slug;
      const descriptions = collection(dbFireStore, 'Descriptions');
      const q = query(descriptions, where("uri", "==", slugFromURL));
      const docSnap = await getDocs(q);
      docSnap.forEach((doc) => {
        this.descriptions = doc.data();
      });
    },
    async getSports() {
      const sports = collection(dbFireStore, 'Sports');
      const q = query(sports, where("inunId", "==", this.institution.inunId));
      const docSnap = await getDocs(q);
      let sportsArray = [];
      docSnap.forEach((doc) => {
        sportsArray.push(doc.data());
      });
      this.sports = sportsArray;
      console.log(this.sports);
    },
    async getImages() {
      const institutionSearchString = encodeURIComponent(this.institution["name"]) + " campus -logo";
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyArmaIMqQveUnRimtLUb8nFZNNvzqVjFfk&cx=17808ea58f81d4de4&searchType=IMAGE&imgSize=large&q=${institutionSearchString}&num=5`);
      const data = await response.json();
      let linkArray = [];
      for (const i in data.items) {
        linkArray.push(data.items[i].link);
      }
      this.images = linkArray;
    },
    returnPercent(input) {
      const percentage = Math.round(input * 100);
      return percentage;
    },
    async makeEthnicityGraph() {

      let root = am5.Root.new(this.$refs.chartdiv);
      root._logo.dispose();
      root.setThemes([am5themes_Animated.new(root)]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
      var chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          startAngle: 180,
          endAngle: 360,
          layout: root.verticalLayout,
          innerRadius: am5.percent(50)
        })
      );

      // Create series
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
      var series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "category",
          startAngle: 180,
          endAngle: 360,
          alignLabels: true
        })
      );

      series.states.create("hidden", {
        endAngle: -90
      });

      // Set data
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
      series.data.setAll([
      {
          category: "nonresident aliens",
          value: this.institution.en1stNonresAlien1stN
        }, 
        {
          category: "Asian",
          value: this.institution.en1stAsianNonhispanicN
        }, 
        {
          category: "Black",
          value: this.institution.en1stBlackNonhispanicN
        }, 
        {
          category: "Hispanic",
          value: this.institution.en1stHispanicEthnicityN
        }, 
        {
          category: "Native Hawaiian or Other Pacific Islander",
          value: this.institution.en1stIslanderNonhispanicN
        }, 
        {
          category: "Multirace",
          value: this.institution.en1stMultiraceNonhispanicN
        }, 
        {
          category: "American Indian or Alaska Native",
          value: this.institution.en1stNativeNonhispanicN
        }, 
        {
          category: "Unknown",
          value: this.institution.en1stRaceEthnicityUnknwnN
        }, 
        {
          category: "White",
          value: this.institution.en1stWhiteNonhispanicN
        }, 
        ]);

      series.appear(1000, 100);
    }
  },
  components: {
    SaveToListDialog
  }
};

</script>

<style>
  .hello {
    width: 100%;
    height: 400px;
    margin: 0 auto;
  }

  ul {
    list-style: none;
  }

  p span {
    font-weight: bold;
  }
  
  .institution-images-container {
    margin-top: 24px;
    @media (min-width: 960px) { margin: 0; }
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    column-gap: 8px;
  }

  .institution-images-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 8px;
    row-gap: 8px;
  }

  .img-bg {
    aspect-ratio: 1;
    background: #ededed;
    line-height: 0;
    width: 100%;
    height: 100%;
  }

  .institution-image {
    animation: fadeIn ease-in 600ms;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }

  @keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
  }

  .one-by-two-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    row-gap: 24px;
  }

  .two-by-two-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 24px;
  }
  @media (max-width: 768px) {
    .three-by-three-stat-grid > div:not(:first-of-type) {
      margin-top: 24px;
    }
  }  
  @media (min-width: 768px) {
    .three-by-three-stat-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 24px;
    }    
  }


  .multiple-stat-container {
    display: flex;

    .stat-container:not(:first-child) {
      margin-left: 12px;
    }
  }

  .stat-container {
    display: flex;
    flex-direction: column;
  }

  .stat-label {
    font-size: 15px;
    font-weight: 400;
    color: #2a2a2a;
    > span {
      font-size: 13px;
      color: #373737;
    }
  }

  .stat-content {
    font-size: 18px;
    font-weight: 600;

    &.not-yet-found {
      color: rgb(152, 20, 20);
    }
  }



  .header-links a {
    padding: 8px;
    background: rgb(230, 230, 230);
    margin-right: 8px;
    border-radius: 8px;
    color: black;
    font-size: 13px;
    text-decoration: none;
  }

  @media (min-width: 960px) {
    .location-links-images-container {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }  
  }

  .section-container {
    background: white;
    padding: 24px;
    border-radius: 16px;
  }

  .descriptions-container {
    background: transparent;
    padding: 0;
    overflow: hidden;
  }

  .ethnic-stats {
    background: #f1f1f1;
    padding: 24px;
    border-radius: 24px;
    
    .stat-container {
      text-align: center;
    }
  }
</style>