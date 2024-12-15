import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeliteComponent } from './dialog-delite.component';

describe('DialogDeliteComponent', () => {
  let component: DialogDeliteComponent;
  let fixture: ComponentFixture<DialogDeliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDeliteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
