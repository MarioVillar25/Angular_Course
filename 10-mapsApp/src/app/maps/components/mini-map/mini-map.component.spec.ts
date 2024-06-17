import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiniMapComponent } from './mini-map.component';


describe('TestComponent', () => {
  let component: MiniMapComponent;
  let fixture: ComponentFixture<MiniMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniMapComponent],
      imports:[]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería de ejecutarse mi método', () => {
    expect(component).toBeTruthy();
    component.miMetodo('test');
  });
});
