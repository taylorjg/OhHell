import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId({ length: 10 });

const getWeatherForecast = async () => {
  const string = localStorage.getItem("weatherforecast");
  return string ? JSON.parse(string) : [];
};

const COHORTS_KEY = "cohorts";

const cohorts = {
  getCohorts: async () => {
    const string = localStorage.getItem(COHORTS_KEY);
    return string ? JSON.parse(string) : [];
  },

  getCohort: async (id) => {
    const string = localStorage.getItem(COHORTS_KEY);
    const cohorts = string ? JSON.parse(string) : [];
    return cohorts.find((cohort) => cohort.id === id);
  },

  createCohort: async (variables) => {
    const string = localStorage.getItem(COHORTS_KEY);
    const cohorts = string ? JSON.parse(string) : [];
    const id = uid.rnd();
    const newCohort = { ...variables, id };
    const updatedCohorts = [...cohorts, newCohort];
    localStorage.setItem(COHORTS_KEY, JSON.stringify(updatedCohorts));
  },

  updateCohort: async (variables) => {
    const { id, name, players } = variables;
    const string = localStorage.getItem(COHORTS_KEY);
    const cohorts = string ? JSON.parse(string) : [];
    const foundCohort = cohorts.find((cohort) => cohort.id === id);
    if (foundCohort) {
      if (name || players) {
        const maybeName = name ? { name } : undefined;
        const maybePlayers = players ? { players } : undefined;
        const updatedCohort = {
          ...foundCohort,
          ...maybeName,
          ...maybePlayers,
        };
        const updatedCohorts = cohorts.map((cohort) =>
          cohort.id === id ? updatedCohort : cohort
        );
        localStorage.setItem(COHORTS_KEY, JSON.stringify(updatedCohorts));
      }
    } else {
      // should we throw an exception if cohort with given id isn't found ?
    }
  },

  deleteCohort: async (variables) => {
    const { id } = variables;
    const string = localStorage.getItem(COHORTS_KEY);
    const cohorts = string ? JSON.parse(string) : [];
    const foundCohort = cohorts.find((cohort) => cohort.id === id);
    if (foundCohort) {
      const updatedCohorts = cohorts.filter((cohort) => cohort.id !== id);
      localStorage.setItem(COHORTS_KEY, JSON.stringify(updatedCohorts));
    } else {
      // should we throw an exception if cohort with given id isn't found ?
    }
  },
};

export const apiLocalStorageImplementation = {
  getWeatherForecast,
  cohorts,
};
