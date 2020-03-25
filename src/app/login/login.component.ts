import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  LoginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    public router: Router
  ) {}
  ngOnInit() {
    this.LoginForm = this.fb.group({
      email: "",
      password: ""
    });

    let storedUsers: any;
    if (localStorage.getItem("users")) {
      storedUsers = JSON.parse(localStorage.getItem("users"));
    } else {
      storedUsers = [];
    }
    console.log("storedusers:", storedUsers);

    var TeamArray = storedUsers.map(function(email) {
      return email.email;
    });
    console.log("TeamArray is:", TeamArray);
    var TempData = TeamArray.includes(this.LoginForm.value.email);
    console.log("TempData", TempData);
  }

  login() {
    // if (TempData == false) {
    //   var today = Date.now();
    //   this.LoginForm.value.id = today;
    //   this.LoginForm.value.id = storedUsers && today;
    //   storedUsers.push(this.LoginForm.value);
    //   localStorage.setItem("users", JSON.stringify(storedUsers));
    //   this.toastr.success(
    //     "You have registered successfully.",
    //     "Hello " + this.LoginForm.value.firstName
    //   );
    //   this.LoginForm.reset();
    //   this.router.navigate(["./login"]);
    // } else {
    //   this.toastr.error(
    //     "Email Id already exist.",
    //     "Hello " + this.LoginForm.value.firstName
    //   );
    // }
  }
}
