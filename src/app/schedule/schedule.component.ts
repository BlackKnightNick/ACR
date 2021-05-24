import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  addressInputVisible = 0;

  addressChange(i) {
    console.log("AddressInputVisible: " + i);
    this.addressInputVisible = i;
  }

  billingInputVisible = 0;

  billingChange(i) {
    console.log("billingInputVisible: " + i);
    this.billingInputVisible = i;
  }

  constructor() { }

  ngOnInit(): void {
    // JavaScript goes here
    var fname = document.getElementById("input_fname");

    fname.focus();

    var btnReview = document.getElementById("button_review");
    btnReview.addEventListener("click", review);

    var btn_diagCancel = document.getElementById("dialog_cancel");
    var btn_diagContinue = document.getElementById("dialog_continue");
    var diag_mask = document.getElementById("dialog_mask");

    btn_diagCancel.addEventListener("click", hideDialog);
    diag_mask.addEventListener("click", hideDialog);
    btn_diagContinue.addEventListener("click", showDateTimePicker);

    function review() {
      var fname = document.getElementById("input_fname");
      var lname = document.getElementById("input_lname");
      var pnumber = document.getElementById("input_pnumber");

      var location_str = document.getElementById("input_location_street");
      var location_cty = document.getElementById("input_location_city");
      var location_sta = document.getElementById("input_location_state");

      var billing_str = document.getElementById("input_billing_street");
      var billing_cty = document.getElementById("input_billing_city");
      var billing_sta = document.getElementById("input_billing_state");


      var fn = ((<HTMLInputElement>fname).value);
      var ln = ((<HTMLInputElement>lname).value);
      var pnum = ((<HTMLInputElement>pnumber).value);

      if (location_str) {
        var loc_str = ((<HTMLInputElement>location_str).value);
        var loc_cty = ((<HTMLInputElement>location_cty).value);
        var loc_sta = ((<HTMLInputElement>location_sta).value);
      } else {
        var loc_str = "645 Pearl Rd., #49";
        var loc_cty = "Chester";
        var loc_sta = "California";
      }

      if (billing_str) { // if billing street input exists:

        // TODO: Checking "Custom Location" sets bill_bool to true???!! stop this pls

        var bill_str = ((<HTMLInputElement>billing_str).value);
        var bill_cty = ((<HTMLInputElement>billing_cty).value);
        var bill_sta = ((<HTMLInputElement>billing_sta).value);

        var bill_bool = true;
      } else if (bill_str == "" || bill_cty == "" || bill_sta == "") {
        // Give error message saying info is missing
        alert("Please fill out all billing fields");
        return;
      } else {
        var bill_str = "NONE";
        var bill_cty = "NONE";
        var bill_sta = "NONE";

        var bill_bool = false;
      }

      showDialog(fn, ln, pnum, loc_str, loc_cty, loc_sta, bill_str, bill_cty, bill_sta, bill_bool);
      // TODO: Allow "ACR Apartment" and "Pay at Site" options to process and show up in dialog
    }

    function showDialog(fn, ln, pnum, loc_str, loc_cty, loc_sta, bill_str, bill_cty, bill_sta, bill_bool) {

      var dialogBox = document.getElementById("dialog_box");
      var dialogMask = document.getElementById("dialog_mask");

      var diagName = document.getElementById("diag_name");
      var diagNum = document.getElementById("diag_num");
      var diagServAddr = document.getElementById("diag_servAddr");
      var diagBillAddr = document.getElementById("diag_billAddr");

      console.log("bill_bool: " + bill_bool);

      console.log(fn);
      console.log(ln);
      console.log(pnum);

      console.log(loc_str);
      console.log(loc_cty);
      console.log(loc_sta);

      if (bill_bool) {
        console.log(bill_str);
        console.log(bill_cty);
        console.log(bill_sta);
      }

      // TODO: Create actual dialog here
      var fullname = fn + " " + ln;
      var pnumber = pnum;
      var loc_address = loc_str + ", " + loc_cty + ", " + loc_sta;
      if (bill_bool) {
        var bill_address = bill_str + ", " + bill_cty + ", " + bill_sta;
      } else bill_address = "Pay Onsite";

      console.log(" ");

      console.log("Name: " + fullname);
      console.log("Phone Number: " + pnumber);
      console.log("Location: " + loc_address);
      console.log("Billing: " + bill_address);

      dialogBox.style.visibility = "visible";
      dialogBox.style.opacity = "1";

      dialogMask.style.visibility = "visible";
      dialogMask.style.opacity = "1";

      diagName.innerHTML = "Name: " + fullname;
      diagNum.innerHTML = "Phone Number: " + pnumber;
      diagServAddr.innerHTML = "Service Address: " + loc_address;
      diagBillAddr.innerHTML = "Billing: " + bill_address;
    }

    function hideDialog() {

      var dialogBox = document.getElementById("dialog_box");
      var dialogMask = document.getElementById("dialog_mask");

      dialogBox.style.visibility = "hidden";
      dialogBox.style.opacity = "0";

      dialogMask.style.visibility = "hidden";
      dialogMask.style.opacity = "0";
    }

    function showDateTimePicker() {
      var dialogBox = document.getElementById("dialog_box");
      var reviewDialog = document.getElementById("review_dialog");
      var dialogMask = document.getElementById("dialog_mask");

      reviewDialog.style.visibility = "hidden";
      reviewDialog.style.opacity = "0";
      reviewDialog.style.display = "none";

      dialogBox.innerHTML = dialogBox.innerHTML + "This part of the website is currently under construction, please check back later.";
    }
  }

}
