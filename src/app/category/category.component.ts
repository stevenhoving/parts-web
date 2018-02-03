import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryTree } from '../category-data';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit
{
  nodes = CategoryTree;

  ngOnInit() {
  }

  onEvent(ev: any) {
    console.log('basic', 'onEvent aka do something... like', ev);
  }

}
