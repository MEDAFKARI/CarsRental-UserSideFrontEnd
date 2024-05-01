import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarsSecComponent } from './home-cars-sec.component';

describe('HomeCarsSecComponent', () => {
  let component: HomeCarsSecComponent;
  let fixture: ComponentFixture<HomeCarsSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCarsSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCarsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
