import { defineStore } from 'pinia';
import { states } from '../data/states';
import { cipCodes } from '../data/cipCodes';
import { denomsList } from '../data/denominations';
import { affilList } from '../data/affiliations';
import { sportList } from '../data/sportList';
import { defaultFilters } from '../data/defaultFilters';

export const useSearchFilterSortStore = defineStore('searchFilterSort', {
  state: () => ({
    cipCodes: cipCodes,
    hideHidden: false,
    selectedRows: [],
    StatesList: states,
    denomsList: denomsList,
    affilList: affilList,
    sportList: sportList,
    CountryList: ["United States", "International"],
    TypeList: ["Private", "Public"],
    admissionDifficultyList: ["—", "Noncompetitive", "Minimal", "Moderate", "Most", "Very"],
    campusSettingList: [
      { title: "Rural", value: "Rural" },
      { title: "Small Town", value: "Small" },
      { title: "Suburb", value: "Suburb" },
      { title: "Urban", value: "Urban" }
    ],
    filters: { 
      ...defaultFilters,
    },
    activeSearchTerms: '',
    searchInput: '',
    saveSearchInput: '',
    searchParameters: {
      q: '*',
      query_by: 'name, stateCleaned, city',
      filter_by: 'getsReplacedByFetchTableData',
      sort_by: 'name:desc',
      per_page: 50,
      page: 1
    },
    nameSortDirection: 'asc',
    customSortColumn: '',
    customSortDirection: 'asc',
    customSortString: '',
  }),
  // persist: true,
  actions: {
    saveThenClearSearchInput() {
      this.saveSearchInput = this.searchInput;
      this.searchInput = '';
    },
    loadSavedSearchInput() {
      if (this.saveSearchInput !== '') {
        this.searchInput = this.saveSearchInput;
      }
    },
  },
  getters: {
    filterByString: (state) => {

      let hiddenFilter = '';
      if (!state.hideHidden) {
        hiddenFilter = 'hidden:false ';
      } else {
        hiddenFilter = 'hidden:true ';
      }

      let tribalFilter = '';
      if (state.filters.tribal) {
        tribalFilter = '&& tribal:true ';
      }

      let hbcuFilter = '';
      if (state.filters.hbcu) {
        hbcuFilter = '&& hbcu:true ';
      }

      let countryFilter = '';
      if (state.filters.Country && state.filters.Country.length > 0) {
        countryFilter = "&& countryCode:[";

        if (state.filters.Country.includes("United States")) {
          countryFilter = countryFilter + "USA,"
        }

        if (state.filters.Country.includes("International")) {
          countryFilter = countryFilter + "ARE,BGR,CAN,GRC,IRL,LBN"
        }
        countryFilter = countryFilter + "]";
      }

      let stateFilter = '';
      if (state.filters.State && state.filters.State.length > 0) {
        stateFilter = "&& stateCleaned:[" + state.filters.State.join(',') + "]";
      }

      let TypeFilter = '';
      if (state.filters.Type && state.filters.Type.length > 0) {
        TypeFilter = "&& mainInstControlDesc:[";

        if (state.filters.Type.includes("Private")) {
          TypeFilter = TypeFilter + "Private,"
        }

        if (state.filters.Type.includes("Public")) {
          TypeFilter = TypeFilter + "Public"
        }
        TypeFilter = TypeFilter + "]";
      }

      let UndergraduatesFilter = '';
      if ((state.filters.UndergraduatesMin && state.filters.UndergraduatesMin.length > 0) || 
          (state.filters.UndergraduatesMax && state.filters.UndergraduatesMax.length > 0)) {

        UndergraduatesFilter = "&& enTotUgN:";

        if (state.filters.UndergraduatesMin > 0 && state.filters.UndergraduatesMax > 0) {
          UndergraduatesFilter = UndergraduatesFilter + "[" + state.filters.UndergraduatesMin + ".." + state.filters.UndergraduatesMax + "]";
        } else if (state.filters.UndergraduatesMin > 0 && state.filters.UndergraduatesMax == 0) {
          UndergraduatesFilter = UndergraduatesFilter + ">" + state.filters.UndergraduatesMin;

        } else if (state.filters.UndergraduatesMin == 0 && state.filters.UndergraduatesMax > 0) {
          UndergraduatesFilter = UndergraduatesFilter + "<" + state.filters.UndergraduatesMax;
        }
      }

      let admitRateFilter = '';
      if (state.filters.admitRateRange[0] > 0 || state.filters.admitRateRange[1] < 100) {
        state.filters.admitRateMin = state.filters.admitRateRange[0] / 100;
        state.filters.admitRateMax = state.filters.admitRateRange[1] / 100;
        admitRateFilter = " && admitRate:";

        if (state.filters.admitRateRange[0] > 0 && state.filters.admitRateRange[1] < 100) {
          admitRateFilter = admitRateFilter + "[" + state.filters.admitRateMin + ".." + state.filters.admitRateMax + "]";
        } else if (state.filters.admitRateRange[0] > 0 && state.filters.admitRateRange[1] == 100) {
          admitRateFilter = admitRateFilter + ">" + state.filters.admitRateMin;
        } else if (state.filters.admitRateRange[0] == 0 && state.filters.admitRateRange[1] < 100) {
          admitRateFilter = admitRateFilter + "<" + state.filters.admitRateMax;
        }
      }

      let admissionDifficultyFilter = '';
      if (state.filters.admissionDifficulty.length > 0) {
        admissionDifficultyFilter = "&& adDiffAll:[" + state.filters.admissionDifficulty.join(',') + "]";
      }

      let campusSettingFilter = '';
      if (state.filters.campusSetting.length > 0) {
        campusSettingFilter = "&& cmpsSetting:[" + state.filters.campusSetting.join(',') + "]";
      }

      let cipCodeFilter = '';
      if (state.filters.cipCode.length > 0) {
        cipCodeFilter = "&& cipCode:[" + state.filters.cipCode.join(',') + "]";
      }

      let denomFilter = '';
      if (state.filters.denom.length > 0) {
        denomFilter = "&& denomDesc:[" + state.filters.denom.join(',') + "]";
      }

      let sportFilter = '';
      if (state.filters.sportName && typeof state.filters.sportName === 'string') {
        const sport = state.filters.sportName.toLowerCase().replace(/\((.*?)\)/, '$1').trim();
        const divisionFieldName = `${sport.toLowerCase().replace(/ /g, '_').replace(/\((.*?)\)/, '$1').trim()}_divisions`;
        const sportNameForHidden = sport.toLowerCase().replace(/ /g, '_').replace(/\((.*?)\)/, '$1').trim();      
        const sportHidden = `${sportNameForHidden}_hidden:!=true`;
        let conditions = [`sports.sport_name:=${sport}`, `sports.${sportHidden}`];

        let divisionListWithoutNAIA = [];
        if (state.filters.division) {
          divisionListWithoutNAIA = state.filters.division.filter(sportDivision => sportDivision !== 'NAIA');
        }

        if (state.filters.division) {
          if (state.filters.division.includes('NAIA')) {
            conditions.push('assnAthlNaia:="TRUE"');
          }

          if (state.filters.division === 'X') {  // 'X' is the value for intramural
            conditions.push(`(sports.${divisionFieldName}.INTM_MEN:='X' || sports.${divisionFieldName}.INTM_WMN:='X')`);
          } else if (state.filters.gender) {
            // Gender selected for intercollegiate sports
            const genderField = state.filters.gender === 'men' ? 'INTC_MEN' : 'INTC_WMN';
            if (state.filters.division && divisionListWithoutNAIA > 0) {
              conditions.push(`sports.${divisionFieldName}.${genderField}:=[${divisionListWithoutNAIA}]`);
            } else {
              conditions.push(`sports.${divisionFieldName}.${genderField}:!='None selected'`);
            }
          } else if (divisionListWithoutNAIA.length > 0) {
            conditions.push(`(sports.${divisionFieldName}.INTC_MEN:=[${divisionListWithoutNAIA}] || sports.${divisionFieldName}.INTC_WMN:=[${divisionListWithoutNAIA}])`);
          }
        }        
        sportFilter = `&& (${conditions.join(' && ')})`;
      }

      let filterByString =
        hiddenFilter +
        countryFilter +
        stateFilter +
        TypeFilter +
        UndergraduatesFilter +
        admitRateFilter +
        admissionDifficultyFilter +
        campusSettingFilter +
        cipCodeFilter +
        denomFilter +
        sportFilter +
        tribalFilter +
        hbcuFilter
        ;

      console.log("filterByString", filterByString);
      
      return filterByString;
    },

  }
});