import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * @title Configurable checkbox
 */
@Component({
  selector: 'checkbox-configurable-example',
  templateUrl: 'checkbox-configurable-example.html',
  styleUrls: ['checkbox-configurable-example.css'],
})
export class CheckboxConfigurableExample {
  public allSelected: boolean = false;

  checkAllControl = new FormControl(false);

  public items = [
    {
      id: 1,
      val: 'john',
      isChecked: false,
    },
    {
      id: 2,
      val: 'jane',
      isChecked: false,
    },
  ];

  itemsFormArray = this.items.map()

  itemChanged(item, event) {
    item.isChecked = event.checked;

    let totalSelected = this.itemsObject.filter((i) => i.isChecked).length;
    if (totalSelected === 0) {
      this.allSelected = false;
      this.indeterminate = false;
    } else if (totalSelected > 0 && totalSelected < this.itemsObject.length) {
      this.allSelected = false;
      this.indeterminate = true;
    } else if (totalSelected === this.itemsObject.length) {
      this.allSelected = true;
      this.indeterminate = false;
    }
  }

  toggleSelectAll(event) {
    this.allSelected = event.checked;
    this.itemsObject.forEach((item) => {
      item.isChecked = event.checked;
    });
  }
}
