import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStoreOwnerComponent } from './register-store-owner.component';

describe('RegisterStoreOwnerComponent', () => {
  let component: RegisterStoreOwnerComponent;
  let fixture: ComponentFixture<RegisterStoreOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStoreOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterStoreOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
