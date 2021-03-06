import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { LocationsComponent } from './Components/locations/locations.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { PromotionsComponent } from './Components/promotions/promotions.component';
import { FoodListComponent } from './Components/food-list/food-list.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { VendorListComponent } from './Components/vendor-list/vendor-list.component';
import { VendorViewComponent } from './Components/vendor-view/vendor-view.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { UserViewComponent } from './Components/user-view/user-view.component';

const appRoutes: Routes = [
    { path: '',
        component: DashboardComponent,
        data: {
            animation: { value: 'Dashboard', }
        }
    },
    { path: 'Dashboard',
        component: DashboardComponent,
        data: {
            animation: { value: 'Dashboard', }
        }
    },
    { path: 'UserList',
    component: UserListComponent,
    data: {
        animation: { value: 'UserList', }
    }
},
{ path: 'VendorList',
component: VendorListComponent,
data: {
    animation: { value: 'VendorList', }
}
},
    { path: 'FoodList',
        component: FoodListComponent,
        data: {
            animation: { value: 'FoodList', }
        }
    },
    { path: 'Orders',
        component: OrdersComponent,
        data: {
            animation: { value: 'Orders', }
        }
    },
    { path: 'Payments',
        component: PaymentsComponent,
        data: {
            animation: { value: 'Payments', }
        }
    },
    { path: 'Locations',
        component: LocationsComponent,
        data: {
            animation: { value: 'Locations', }
        }
    },
    { path: 'Promotions',
        component: PromotionsComponent,
        data: {
            animation: { value: 'Promotions', }
        }
    },
    { path: 'Reports',
        component: ReportsComponent,
        data: {
            animation: { value: 'Reports', }
        }
    },
    { path: 'Settings',
        component: SettingsComponent,
        data: {
            animation: { value: 'Settings', }
        }
    },
    { path: 'Vendor_View',
        component: VendorViewComponent,
        data: {
            animation: { value: 'Vendor_View', }
        }
    },
    { path: 'reviews',
    component: ReviewsComponent,
    data: {
        animation: { value: 'reviews', }
    }
},
{ path: 'login-page',
component: LoginPageComponent,
data: {
    animation: { value: 'login-page', }
}
},
{ path: 'user-view',
component: UserViewComponent,
data: {
    animation: { value: 'user-view', }
}
}
];

@NgModule({
    declarations: [ ],
    imports: [ RouterModule.forRoot(appRoutes,
        { enableTracing: true }
      )],
    providers: [],
    bootstrap: []
  })
  export class AppRoutingModule { }
