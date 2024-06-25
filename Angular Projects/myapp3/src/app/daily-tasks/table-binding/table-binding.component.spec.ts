import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBindingComponent } from './table-binding.component';

describe('TableBindingComponent', () => {
  let component: TableBindingComponent;
  let fixture: ComponentFixture<TableBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBindingComponent]
    });
    fixture = TestBed.createComponent(TableBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
