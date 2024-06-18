import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettigsComponent } from './profile-settigs.component';

describe('ProfileSettigsComponent', () => {
  let component: ProfileSettigsComponent;
  let fixture: ComponentFixture<ProfileSettigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSettigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSettigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
