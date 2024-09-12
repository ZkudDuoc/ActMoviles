import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosCliPage } from './datos-cli.page';

describe('DatosCliPage', () => {
  let component: DatosCliPage;
  let fixture: ComponentFixture<DatosCliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosCliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
