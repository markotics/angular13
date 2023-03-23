import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/", pathMatch: "full"
  },
  {
    path: '',
    loadChildren: () => import('./components/search/search.module')
      .then(mod => mod.SearchModule)
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
