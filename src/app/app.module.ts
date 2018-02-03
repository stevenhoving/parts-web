import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';

// 3e party components
import { NzTreeModule } from 'ng-tree-antd';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AngularSplitModule } from 'angular-split';

// app components
import { CategoryComponent } from './category/category.component';
import { AppComponent } from './app.component';
import { APIService } from './services/api.service';
import { AppMaterialModules } from './material.module';

@NgModule({
  declarations: [AppComponent, CategoryComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NzTreeModule,
    NgZorroAntdModule.forRoot(),
    AngularSplitModule,
    CdkTableModule,
    HttpClientModule,
    AppMaterialModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
