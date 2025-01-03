import { defineStore } from 'pinia';
import client from '../typesenseClient';
import { useSearchFilterSortStore } from './searchFilterSortStore';
import { useRoute } from 'vue-router';

export const useTableStore = defineStore('table', {
  state: () => ({
      loading: true,
      applyFiltersLoading: false, 
      tableData: [],
      tableDataManual: [],
      hideHidden: true,
      freshSearch: true,
      searchFromRoute: '',
      selectedRows: [],
      tableHeaders: [],
      lastVisible: {},
      resultsFound: 0,
  }),
  persist: false,
  actions: {
    async loadMoreItems() {
      this.tableData.pop();
      try {
        const searchFilterSort = useSearchFilterSortStore()
        searchFilterSort.searchParameters.page++;
        searchFilterSort.searchParameters.q = searchFilterSort.activeSearchTerms;
        if (searchFilterSort.searchParameters.q == '') {
          searchFilterSort.searchParameters.q = "*";
        }

        searchFilterSort.searchParameters.filter_by = searchFilterSort.filterByString;

        if (searchFilterSort.customSortString !== '') {
          searchFilterSort.searchParameters.sort_by = searchFilterSort.customSortString;
        } else {
          searchFilterSort.searchParameters.sort_by = 'name:asc';
        }

        const result = await client.collections('institutions_integratedv5').documents().search(searchFilterSort.searchParameters);
        this.tableData = this.tableData.concat(result.hits.map(hit => hit.document));
        if (this.tableData.length < this.resultsFound) {
          this.tableData.push({name: "Load more"});
        }

        // save this.tableData to local storage
        localStorage.setItem("tableData", JSON.stringify(this.tableData));

      } catch (error) {
        console.error('Error fetching data from Typesense:', error);
      }      
    },
    async fetchTableData() {
      this.loading = true;
      
      const searchFilterSortStore = useSearchFilterSortStore();
      
      if (this.freshSearch) {
        searchFilterSortStore.searchParameters.page = 1;
      }
      
      const route = useRoute();
      if (route) {
        this.searchFromRoute = route.query.search;
      }

      // check for local storage value
      if (
        localStorage.getItem("tableData") && 
        !this.freshSearch && 
        searchFilterSortStore.searchParameters.q !== '' &&
        searchFilterSortStore.searchParameters.q !== '*'
      ) {
        this.tableData = JSON.parse(localStorage.getItem("tableData"));
        this.loading = false;
        return;
      } else {              
        try {
          const searchFilterSort = useSearchFilterSortStore()
          searchFilterSort.searchParameters.q = searchFilterSort.activeSearchTerms;

          if (this.searchFromRoute) {
            searchFilterSortStore.searchParameters.q = this.searchFromRoute;
            searchFilterSortStore.searchParameters.page = 1;
          }  

          if (searchFilterSort.searchParameters.q == '') {
            searchFilterSort.searchParameters.q = "*";
          }

          searchFilterSort.searchParameters.filter_by = searchFilterSort.filterByString;

          if (searchFilterSort.customSortString !== '') {
            searchFilterSort.searchParameters.sort_by = searchFilterSort.customSortString;
          } else {
            searchFilterSort.searchParameters.sort_by = 'name:asc';
          }
          
          const result = await client.collections('institutions_integratedv5').documents().search(searchFilterSort.searchParameters);
          this.resultsFound = result.found;
          this.tableData = result.hits.map(hit => hit.document);
          if (this.tableData.length < this.resultsFound) {
            this.tableData.push({name: "Load more"});
          }
  
          // save this.tableData to local storage
          localStorage.setItem("tableData", JSON.stringify(this.tableData));
  
        } catch (error) {
          console.error('Error fetching data from Typesense:', error);
        }
      }

      this.freshSearch = false;

      this.loading = false;
    },
    async applyNewSearch(type) {      
      try {
        if (type === 'filtersChanged') {
          this.applyFiltersLoading = true;
        } 

        const searchFilterSort = useSearchFilterSortStore()
        console.log(searchFilterSort.filterByString);
        searchFilterSort.searchParameters.page = 1;
        searchFilterSort.searchParameters.filter_by = searchFilterSort.filterByString;

        if (searchFilterSort.customSortString !== '') {
          searchFilterSort.searchParameters.sort_by = searchFilterSort.customSortString;
        } else {
          searchFilterSort.searchParameters.sort_by = 'name:asc';
        }
        const result = await client.collections('institutions_integratedv5').documents().search(searchFilterSort.searchParameters);
        this.resultsFound = result.found;
        this.tableData = result.hits.map(hit => hit.document);
        if (this.tableData.length < this.resultsFound) {
          this.tableData.push({name: "Load more"});
        }

        // save this.tableData to local storage
        localStorage.setItem("tableData", JSON.stringify(this.tableData));
        if (type === 'filtersChanged') {
          setTimeout(() => {
            this.applyFiltersLoading = false;            
          }, 900);
        }

      } catch (error) {
        console.error('Error fetching data from Typesense:', error);
      }
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
          { title: 'Institution name', key: 'name', width: "300px", fixed: true, sortable: false },
          { title: 'State', key: 'stateCleaned', width: "130px", show: true, sortable: false },
          { title: 'Sector', key: 'mainInstControlDesc', width: "140px", show: true, sortable: false },
          { title: 'Calendar', key: 'mainCalendar', width: "140px", show: true, sortable: false },          
          { title: 'Difficulty', key: 'adDiffAll', width: "140px", show: true, sortable: false },          
          { title: 'Undergraduates', key: 'enTotUgN', width: "140px", show: true, sortable: false },
          { title: 'Locale', key: 'cmpsSetting', width: "140px", show: true, sortable: false },          
          { title: 'City', key: 'city', width: "220px", show: false },
          { title: 'Country', key: 'countryCode', width: "130px", show: false },
          { title: 'Zipcode', key: 'zipcode', width: "130px", show: false },
          { title: 'Campus Size', key: 'cmpsSizeUnit', width: "210px", show: false },          
          { title: 'Average GPA', key: 'frshGpa', width: "160px", show: false, sortable: false },          
          { title: 'Applicants', key: 'apRecd1stN', width: "140px", show: false, sortable: false },          
          { title: 'Admits', key: 'apAdmt1stN', width: "140px", show: false, sortable: false },          
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
    performSearch() {
      
      this.freshSearch = true;
      const searchFilterSort = useSearchFilterSortStore();
      
      searchFilterSort.searchParameters.page = 1;
      if (searchFilterSort.searchInput !== '') {
        searchFilterSort.saveThenClearSearchInput();
        searchFilterSort.searchParameters.q = searchFilterSort.activeSearchTerms;
        // this.fetchTableData();
      } else {
        searchFilterSort.searchParameters.q = "*";
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
      const searchFilterSort = useSearchFilterSortStore();
      searchFilterSort.hideHidden = this.hideHidden;
      localStorage.setItem("hideHidden", this.hideHidden);
      this.freshSearch = true;
      this.fetchTableData();
    },
    customSort(column){
      const searchFilterSort = useSearchFilterSortStore();

      if (column.key == searchFilterSort.customSortColumn) {
        searchFilterSort.customSortDirection = searchFilterSort.customSortDirection === 'asc' ? 'desc' : 'asc';
      }
      searchFilterSort.customSortColumn = column.key;
      searchFilterSort.customSortString = column.key + ":" + searchFilterSort.customSortDirection + ", " + "name:" + searchFilterSort.nameSortDirection;
      this.applyNewSearch();
    },
    saveHeaderState() {
      // Save header visibility state to localStorage
      const headerState = this.tableHeaders.reduce((acc, header) => {
        acc[header.key] = header.show;
        return acc;
      }, {});
      localStorage.setItem('tableHeaderState', JSON.stringify(headerState));
    },
    loadHeaderState() {
      // Load header visibility state from localStorage
      const savedState = localStorage.getItem('tableHeaderState');
      if (savedState) {
        const headerState = JSON.parse(savedState);
        this.tableHeaders.forEach(header => {
          if (Object.prototype.hasOwnProperty.call(headerState, header.key)) {
            header.show = headerState[header.key];
          }
        });
      }
    },
  },
});