import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreConfigurationComponent } from './store-configuration.component';

describe('StoreConfigurationComponent', () => {
  let component: StoreConfigurationComponent;
  let fixture: ComponentFixture<StoreConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
