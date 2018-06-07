// Core Dependencies
import { RouterModule } from "@angular/router";
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";

// Configuration and Services
import { UserRoutes } from "./user.routing";

// Components
import { UserComponent } from "./user.component";
import { UserAccountComponent } from "./user-account/user-account.component";
import { UserFavouriteProductsComponent } from "./user-favourite-products/user-favourite-products.component";
import { UserCartItemsComponent } from "./user-cart-items/user-cart-items.component";
import { SharedModule } from "../shared/shared.module";
import { UserService } from "../shared/services/user.service";

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(UserRoutes)],
  declarations: [
    UserComponent,
    UserAccountComponent,
    UserFavouriteProductsComponent,
    UserCartItemsComponent

  ],
  providers: [UserService],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule {}
