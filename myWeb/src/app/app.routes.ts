import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { SearchByNameComponent } from './pages/search-by-name/search-by-name';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './pages/login-page/login-page/login-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile/user-profile.component';
import { AdminInComponent } from './pages/admin/admin-in/admin-in.component';
import { ViewMyPostComponent } from './pages/view-my-post/view-my-post/view-my-post.component';
import { RegisterComponent } from './pages/register/register.component';

// export class CreatePostComponent{
    
export const routes: Routes = [
    {path:'create-post', component: CreatePostComponent },
    {path:'view-all', component: ViewAllComponent },
    {path:'search-by-name', component: SearchByNameComponent },
    {path:'view-post/:id', component: ViewPostComponent },
    { path: '', redirectTo: '/view-all', pathMatch: 'full' },
    //{ path: 'view-all-posts', component: ViewAllComponent },
    {path: 'login-page', component: LoginPageComponent},
    {path:'user-profile', component: UserProfileComponent},
    {path:'admin-in', component: AdminInComponent},
    {path:'view-my-post', component: ViewMyPostComponent},
    {path:"register", component: RegisterComponent}
];

// const routes: Routes = [
//     { path: 'create-post', component: CreatePostComponent },
//     { path: 'view-all', component: ViewAllPostsComponent },
//     { path: 'search-by-name', component: SearchByNameComponent },
//     { path: '', redirectTo: '/create-post', pathMatch: 'full' },
//     { path: '**', redirectTo: '/create-post' }
//   ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}