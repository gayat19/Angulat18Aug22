import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandComponent } from './understand.component';

describe('UnderstandComponent', () => {
  let component: UnderstandComponent;
  let fixture: ComponentFixture<UnderstandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
