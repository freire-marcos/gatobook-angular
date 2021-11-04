import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaisListaComponent } from './animais-lista.component';

describe('AnimaisListaComponent', () => {
  let component: AnimaisListaComponent;
  let fixture: ComponentFixture<AnimaisListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaisListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaisListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
