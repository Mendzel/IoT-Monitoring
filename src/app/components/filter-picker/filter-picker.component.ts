import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filter } from 'src/interfaces/Filter';

@Component({
  selector: 'app-filter-picker',
  templateUrl: './filter-picker.component.html',
  styleUrls: ['./filter-picker.component.scss']
})
export class FilterPickerComponent implements OnInit {
  typesOfVehicles: Filter[] = [
    { name: "Wszystkie", value: "Wszystkie" },
    { name: "Tramwaj", value: "Tramwaj" },
    { name: "Autbous", value: "Autobus" },
    { name: "Pociąg", value: "Pociąg" }
  ]
  selectedType: string = '';
  @Output() selectionChanged: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  onSelectionChange(event: Filter) {
    this.selectionChanged.emit(event.value);
  }
}
