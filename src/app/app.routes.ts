import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProductviewComponent } from './page/productview/productview.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent

    },
   
   { path:'product',
    component:ProductComponent
   },
   {
    path:'contact',
    component:ContactComponent
   },
   {
    path:'productview/:id', component:ProductviewComponent
   }
];

