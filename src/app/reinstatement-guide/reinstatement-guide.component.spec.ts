import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinstatementGuideComponent } from './reinstatement-guide.component';

describe('ReinstatementGuideComponent', () => {
  let component: ReinstatementGuideComponent;
  let fixture: ComponentFixture<ReinstatementGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReinstatementGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReinstatementGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
