import { NgForm, EmailValidator } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ToastyService, ToastOptions, ToastData, ToastyConfig } from "ng2-toasty";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../shared/services/user.service";
// import { AuthService } from "../../shared/services/auth.service";
import { User } from "../../shared/models/user";
import { Login } from "../../shared/models/login";

declare var $: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
  // providers: [EmailValidator]
})
export class LoginComponent implements OnInit {
  loginUser = {
    userId: "",
    userPassword: ""
  };
  login1 = new Login;
  user = new User;

  //가입하는 유저
  createUser;



  constructor(
    private userService: UserService,
    // private authService: AuthService,
    private toastyService: ToastyService,
    private router: Router,
    private route: ActivatedRoute,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.position = "top-right";
    this.toastyConfig.theme = "material";

    this.createUser = new User();
  }

  ngOnInit() { }

  signup() {
    // this.authService.signup(this.emailId, this.password);
    this.loginUser.userId = this.loginUser.userPassword = "";
  }

  addUser(userForm: NgForm) {
    userForm.value["isAdmin"] = false;
    this.userService.createUser(userForm.value).subscribe((data:User) => {
      this.createUser = data;
    });

    const toastOption: ToastOptions = {
      title: "User Registeration",
      msg: "Registering",
      showClose: true,
      timeout: 3000,
      theme: "material"
    };
    this.toastyService.wait(toastOption);
    setTimeout((router: Router) => {
      $("#createUserForm").modal("hide");
    }, 1500);

  }

  // login() {
  //   // console.log("loginForm" + this.loginUser.userId);
  //   this.userService.getUsers(this.login1)
  //     .subscribe((user:User) => {
  //       this.user = user;
  //     });
  //
  //   // if (this.authService.loginCheck(userForm.value["userId"], userForm.value["userPassword"]) === true) {
  //   //   const toastOption: ToastOptions = {
  //   //     title: "Authentication Success",
  //   //     msg: "Logging in please wait",
  //   //     showClose: true,
  //   //     timeout: 5000,
  //   //     theme: "material"
  //   //   };
  //   //   this.toastyService.wait(toastOption);
  //   //   const returnUrl = this.route.snapshot.queryParamMap.get("http://localhost:8080/toma/login/");
  //   //   setTimeout((router: Router) => {
  //   //     this.router.navigate([returnUrl || "/"]);
  //   //   }, 1500);
  //   // } else {
  //   //   const toastOption: ToastOptions = {
  //   //     title: "Authentication Failed",
  //   //     msg: "Invalid Credentials, Please Check your credentials",
  //   //     showClose: true,
  //   //     timeout: 5000,
  //   //     theme: "material"
  //   //   };
  //   // this.toastyService.error(toastOption);
  //   //     this.loginUser.userId = this.loginUser.userPassword = "";
  //   //   }
  // }
}
