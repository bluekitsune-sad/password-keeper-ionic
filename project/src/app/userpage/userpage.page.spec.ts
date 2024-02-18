import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserpagePage } from './userpage.page';

describe('UserpagePage', () => {
  let component: UserpagePage;
  let fixture: ComponentFixture<UserpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
