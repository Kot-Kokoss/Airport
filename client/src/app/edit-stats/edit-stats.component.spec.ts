import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatsComponent } from './edit-stats.component';

describe('EditStatsComponent', () => {
  let component: EditStatsComponent;
  let fixture: ComponentFixture<EditStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
