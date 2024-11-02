import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CocherasComponent } from './cocheras.component';

describe('CocherasComponent', () => {
  let component: CocherasComponent;
  let fixture: ComponentFixture<CocherasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocherasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocherasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
