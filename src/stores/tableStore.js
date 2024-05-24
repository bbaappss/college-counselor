import { defineStore } from 'pinia';
import client from '../typesenseClient';
import { useSearchFilterSortStore } from './searchFilterSortStore';
// import route from 'vue-router';
import { useRoute } from 'vue-router';

export const useTableStore = defineStore('table', {
  state: () => ({
      loading: true,
      tableData: [],
      tableDataManual: [],
      hideHidden: true,
      freshSearch: true,
      selectedRows: [],
      tableHeaders: [],
      lastVisible: {},
      resultsFound: 0,
  }),
  persist: true,
  actions: {
    async loadMoreItems() {
      this.tableData.pop();
      try {
        const searchFilterSort = useSearchFilterSortStore()
        searchFilterSort.searchParameters.page++;
        const result = await client.collections('institutions_integratedv2').documents().search(searchFilterSort.searchParameters);
        this.tableData = this.tableData.concat(result.hits.map(hit => hit.document));
        this.tableData.push({name: "Load more"});

        // save this.tableData to local storage
        localStorage.setItem("tableData", JSON.stringify(this.tableData));

      } catch (error) {
        console.error('Error fetching data from Typesense:', error);
      }      
    },
    async fetchTableData() {
      this.loading = true;

      console.log("fetchTableData");
      console.log(this.freshSearch);
      
      const searchFilterSortStore = useSearchFilterSortStore();
      
      if (this.freshSearch) {
        searchFilterSortStore.searchParameters.page = 1;
      }

      const route = useRoute();
      const search = route.query.search;

      const newSearchValue = search == searchFilterSortStore.activeSearchTerms;
      console.log(newSearchValue);

      // check for local storage value
      if (localStorage.getItem("tableData") && !this.freshSearch && newSearchValue) {
        console.log("loading from local storage");
        this.tableData = JSON.parse(localStorage.getItem("tableData"));
        this.loading = false;
        return;
      } else {
        if (search) {
          searchFilterSortStore.searchParameters.q = search;
          searchFilterSortStore.searchParameters.page = 1;
        }
              
        try {
          const searchFilterSort = useSearchFilterSortStore()
          console.log("searchFilterSort.searchParameters", searchFilterSort.searchParameters);
          const result = await client.collections('institutions_integratedv2').documents().search(searchFilterSort.searchParameters);
          this.resultsFound = result.found;
          this.tableData = result.hits.map(hit => hit.document);
          this.tableData.push({name: "Load more"});
  
          // save this.tableData to local storage
          localStorage.setItem("tableData", JSON.stringify(this.tableData));
  
        } catch (error) {
          console.error('Error fetching data from Typesense:', error);
        }
  
      }
      this.freshSearch = false;

      this.loading = false;
    },
    columnValueList(val) {
      return [...new Set(this.tableData.map(d => d[val]))].sort();
    },
    updateSelected(selectedRows) {
      this.selectedRows = selectedRows;
    },
    async loadTableHeaders() {
      if (localStorage.getItem("tableHeaders")) {
        this.tableHeaders = JSON.parse(localStorage.getItem("tableHeaders"));
      }
      else {
        this.tableHeaders = [
          { title: 'id', key: 'id', width: "300px", show: false, align: "d-none" },
          { title: 'Institution name', key: 'name', width: "300px", fixed: true },
          { title: 'State', key: 'stateCleaned', width: "130px", show: false },
          { title: 'City', key: 'city', width: "220px", show: false },
          { title: 'Country', key: 'countryCode', width: "130px", show: false },
          { title: 'Zipcode', key: 'zipcode', width: "130px", show: false },
          { title: 'Sector', key: 'mainInstControlDesc', width: "140px", show: true },
          { title: 'Calendar', key: 'mainCalendar', width: "140px", show: true },          
          { title: 'Undergraduates', key: 'enTotUgN', width: "140px", show: true },
          { title: 'Difficulty', key: 'adDiffAll', width: "140px", show: true },          
          { title: 'Locale', key: 'cmpsSetting', width: "140px", show: true },          
          { title: 'Campus Size', key: 'cmpsSizeUnit', width: "210px", show: false },          
          { title: 'Average GPA', key: 'frshGpa', width: "160px", show: true },          
          { title: 'Applicants', key: 'apRecd1stN', width: "140px", show: true },          
          { title: 'Admits', key: 'apAdmt1stN', width: "140px", show: true },          
          { title: 'HBCU', key: 'hbcu', width: "100px", show: false },
          { title: 'Tribal', key: 'tribal', width: "100px", show: false },
          { title: 'Early Decision Applicants', key: 'apRecdEdecN', width: "240px", show: false },          
          { title: 'Early Decision Admits', key: 'apAdmtEdecN', width: "240px", show: false },          
          { title: 'Early Action Applicants', key: 'apRecdEactN', width: "240px", show: false },          
          { title: 'Early Action Admits', key: 'apAdmtEactN', width: "200px", show: false },          
          { title: 'Enrolled #Submitted SAT', key: 'submitSat1P', width: "240px", show: false },          
          { title: 'Enrolled #Submitted ACT', key: 'submitActP', width: "240px", show: false },          
          { title: 'Total Cost (Resident)', key: 'totResD', width: "200px", show: false },          
          { title: 'Tuition Non-Resident', key: 'tuitNres1StFtD', width: "200px", show: false },          
          { title: 'Tuition In-State', key: 'tuitState1StFtD', width: "200px", show: false },          
          { title: 'Admission Consideration Factors ', key: 'adFactorCode', width: "290px", show: false },          
          { title: 'Admission Consideration Factors, Level of Importance', key: 'adFactorLevel', width: "420px", show: false },          
          { title: 'Early Action is Restrictive', key: 'apEactRestrict', width: "250px", show: false },
          { title: 'Hidden', key: 'hidden', width: "100px", show: false, hideFromUser: true },
          // { title: 'Main Type of Degree Offered', key: 'mainFunctionType', width: "260px", show: true },
        ];  
      }
    },
    filteredHeadersData(){
      return this.tableHeaders.filter(header => header.title !== "id")
    },
    updateHeaders() {
      const filteredArray = this.tableHeaders.map(x => (x.show === false ? { ...x, align: " d-none" } : { ...x, align: "" }));
      this.tableHeaders = filteredArray;
      let tableHeaders = JSON.stringify(filteredArray);
      localStorage.setItem("tableHeaders", tableHeaders);
    },
    performSeach() {
      console.log("performSeach")
      this.freshSearch = true;
      const searchFilterSort = useSearchFilterSortStore();
      searchFilterSort.searchParameters.page = 1;
      if (searchFilterSort.searchInput !== '') {
        searchFilterSort.saveThenClearSearchInput();
        searchFilterSort.searchParameters.q = searchFilterSort.activeSearchTerms;
        // this.fetchTableData();
      } else {
        // this.fetchTableData();
      }
    },
    getHideHidden() {
      if (localStorage.getItem("hideHidden") !== null) {
        this.hideHidden = localStorage.getItem("hideHidden") === 'true';
      } else {
          this.hideHidden = false;
      }
      return this.hideHidden;
    },
    saveHideHiddenState() {
        localStorage.setItem("hideHidden", this.hideHidden);
    }
  },
});