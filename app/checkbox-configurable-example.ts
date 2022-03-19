import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'checkbox-configurable-example',
  templateUrl: 'checkbox-configurable-example.html',
  styleUrls: ['checkbox-configurable-example.css'],
})
export class CheckboxConfigurableExample implements OnInit {
  public allSelected: boolean = false;

  checkAllControl = new FormControl(false);

  public items = [
    {
      id: 1,
      name: 'john',
      isChecked: false,
    },
    {
      id: 2,
      name: 'jane',
      isChecked: false,
    },
  ];

  itemsFormArray: FormArray;

  ngOnInit(): void {
    this.checkAllControl.valueChanges.subscribe((isChecked) => {
      this.itemsFormArray.controls.forEach((group: any) => group.controls.isChecked.setValue(isChecked));
    });

    const controls = this.items.map((item) => {
      const group = new FormGroup({
        id: new FormControl(item.id),
        name: new FormControl(item.name),
        isChecked: new FormControl(item.isChecked),
      });

      return group;
    });

    this.itemsFormArray = new FormArray(controls);

    this.itemsFormArray.valueChanges.subscribe((value) => {
      this.allSelected = value.every((item) => item.isChecked);
      this.checkAllControl.setValue(this.allSelected, { emitEvent: false });
    });
  }
}
