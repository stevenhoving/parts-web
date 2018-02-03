import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CATEGORIES } from '../category-data';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit
{
  categories = CATEGORIES;
  selectedCategory: Category;

  constructor()
  {
  }

  ngOnInit()
  {
  }

  onSelect(category: Category): void
  {
    this.selectedCategory = category;
  }
}
