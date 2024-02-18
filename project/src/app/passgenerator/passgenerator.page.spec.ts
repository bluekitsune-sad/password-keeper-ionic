import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassgeneratorPage } from './passgenerator.page';

describe('PassgeneratorPage', () => {
  let component: PassgeneratorPage;
  let fixture: ComponentFixture<PassgeneratorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PassgeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
