import { createElement } from "lwc";
import CUSTOMERCASES from "c/customerCases";
import { registerApexTestWireAdapter } from "@salesforce/sfdx-lwc-jest";
import getCases from "@salesforce/apex/ShowCasesController.getCases";

const mockGetCasesList = require("./data/getCases.json");

const getCaseListAdapter = registerApexTestWireAdapter(getCases);

describe("c-customer-cases", () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    jest.clearAllMocks();
  });

  it("showing customer cases", () => {
    // Create element
    const element = createElement("c-customer-cases", {
      is: CUSTOMERCASES
    });
    document.body.appendChild(element);

    getCaseListAdapter.emit(mockGetCasesList);

    return Promise.resolve().then(() => {
      // Select elements for validation
      const caseDetails = element.shadowRoot.querySelectorAll("p");
      expect(caseDetails.length).toBe(mockGetCasesList.length);
      expect(caseDetails[0].textContent).toBe(
        mockGetCasesList[0].CaseNumber + " ## " + mockGetCasesList[0].Subject
      );
    });
  });
});
