export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(numberOfDepartments) {
      return Object.keys(numberOfDepartments).length;
    },
  };
}
