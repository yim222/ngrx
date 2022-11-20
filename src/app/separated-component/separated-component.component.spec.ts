import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatedComponentComponent } from './separated-component.component';

describe('SeparatedComponentComponent', () => {
  let component: SeparatedComponentComponent;
  let fixture: ComponentFixture<SeparatedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparatedComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparatedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
