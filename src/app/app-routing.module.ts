import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

const routes: Routes = [
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'about', component: AboutPageComponent
  }, 
  {
    path: 'blog', component: BlogPageComponent
  }, 
  {
    path: 'contact', component: ContactPageComponent
  }, 
  {
    path: 'portfolio', component: PortfolioPageComponent
  }, 
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
