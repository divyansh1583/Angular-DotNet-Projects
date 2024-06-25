import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSyncComponent } from './async-sync.component';

describe('AsyncSyncComponent', () => {
  let component: AsyncSyncComponent;
  let fixture: ComponentFixture<AsyncSyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncSyncComponent]
    });
    fixture = TestBed.createComponent(AsyncSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
