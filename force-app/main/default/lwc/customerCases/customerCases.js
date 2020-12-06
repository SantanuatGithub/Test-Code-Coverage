import { LightningElement, wire } from "lwc";
import getCases from "@salesforce/apex/ShowCasesController.getCases";

const columns = [
  { label: "Case Number", fieldName: "CaseNumber" },
  { label: "Subject", fieldName: "Subject" },
  { label: "Status", fieldName: "Status" },
  { label: "Origin", fieldName: "Origin" },
  { label: "Created Date", fieldName: "CreatedDate", type: "Date" }
];

export default class CustomerCases extends LightningElement {
  columns = columns;

  @wire(getCases) cases;
}
