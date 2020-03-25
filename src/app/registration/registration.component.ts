import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app- registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent {
  angForm: FormGroup;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    public router: Router
  ) {}
  ngOnInit() {
    this.angForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}")
        ]
      ]
    });
  }

  storeValue() {
    this.submitted = true;
    if (this.angForm.invalid) {
      return false;
    }
    let storedUsers: any;
    if (localStorage.getItem("users")) {
      storedUsers = JSON.parse(localStorage.getItem("users"));
    } else {
      storedUsers = [];
    }

    var TeamArray = storedUsers.map(function(email) {
      return email.email;
    });

    var TempData = TeamArray.includes(this.angForm.value.email);

    if (TempData == false) {
      var today = Date.now();
      this.angForm.value.id = today;
      this.angForm.value.id = storedUsers && today;
      storedUsers.push(this.angForm.value);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      this.toastr.success(
        "You have registered successfully.",
        "Hello " + this.angForm.value.firstName
      );
      this.angForm.reset();
      this.router.navigate(["./login"]);
    } else {
      this.toastr.error(
        "Email Id already exist.",
        "Hello " + this.angForm.value.firstName
      );
    }
  }
  cancel() {
    this.angForm.reset();
  }
}
