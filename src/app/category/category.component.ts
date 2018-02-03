import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit
{
  nodes = [];

  constructor (private categoryService: CategoryService)
  {
  }

  ngOnInit() {
    this.nodes = this.categoryService.getCategoryTree();
  }

  onEvent(ev: any) {
    console.log('basic', 'onEvent aka do something... like', ev);
  }

}
