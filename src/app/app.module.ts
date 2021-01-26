import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';


import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatSelectModule
} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddUserComponent } from './addUser/addUser.component';
import { UserGetComponent } from './getUsers/user-get.component';
import { UserEditComponent } from './editUser/user-edit.component';
import { SearchInputComponent } from './search/components/search-input/search-input.component';
import { SearchListComponent } from './search/components/search-list/search-list.component';
import { SearchContainerComponent } from './search/container/search-container/search-container.component';
import { PlaylistGetComponent } from './getPlaylists/playlist-get.component';
import { PlaylistService } from './playlist.service';
import { VideoService } from './video.service';
import { AddVideoComponent } from './addVideo/addVideo.component';
import { CreatePlaylistComponent } from './createPlaylist/createPlaylist.componenet';
import { AnnonceService } from './annonce.service';



const routes: Routes = [
  
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'getUsers',
    component: UserGetComponent
  },
  {
    path: 'getUsers/edit/:id',
    component: UserEditComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'getPlaylists',
    component: PlaylistGetComponent
  },
  {
    path: 'home',
    component: SearchContainerComponent
  },
  {
    path: 'addVideo',
    component: AddVideoComponent
  },
  {
    path: 'createPlaylist',
    component: CreatePlaylistComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
  },
  {path:'',redirectTo:"/login",pathMatch:"full"}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AddUserComponent,
    AdminComponent,
    SearchInputComponent,
    UserGetComponent,
    UserEditComponent,
    SearchListComponent,
    SearchContainerComponent,
    AddVideoComponent,
    CreatePlaylistComponent,
    PlaylistGetComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
    exports: [
    CommonModule,
     MatToolbarModule, 
     MatButtonModule, 
     MatCardModule, 
     MatInputModule, 
     MatDialogModule, 
     MatTableModule, 
     MatMenuModule,
     MatSelectModule,
     MatIconModule,
     MatProgressSpinnerModule,
     RouterModule
     ],
  providers: [
    UserService,
    PlaylistService,
    VideoService,
    AnnonceService,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
