import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DitestComponent } from './ditest.component';

describe('DitestComponent', () => {
  let component: DitestComponent;
  let fixture: ComponentFixture<DitestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DitestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DitestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
