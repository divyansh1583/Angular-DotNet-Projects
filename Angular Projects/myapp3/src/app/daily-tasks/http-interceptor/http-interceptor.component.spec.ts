import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpInterceptorComponent } from './http-interceptor.component';

describe('HttpInterceptorComponent', () => {
  let component: HttpInterceptorComponent;
  let fixture: ComponentFixture<HttpInterceptorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpInterceptorComponent]
    });
    fixture = TestBed.createComponent(HttpInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
