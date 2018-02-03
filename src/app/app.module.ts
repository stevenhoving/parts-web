import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';

// 3e party modules
import { NzTreeModule } from 'ng-tree-antd';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AngularSplitModule } from 'angular-split';
// 3e party wrapper modules
import { AppMaterialModules } from './material.module';

// app components
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { DataCollectionComponent } from './parts-table/parts-table.component';

// app services
import { APIService } from './services/api.service';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [AppComponent, CategoryComponent, DataCollectionComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NzTreeModule,
    NgZorroAntdModule.forRoot(),
    AngularSplitModule,
    CdkTableModule,
    HttpClientModule,
    AppMaterialModules],
  providers: [APIService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
