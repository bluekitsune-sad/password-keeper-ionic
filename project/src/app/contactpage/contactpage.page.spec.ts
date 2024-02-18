import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactpagePage } from './contactpage.page';

describe('ContactpagePage', () => {
  let component: ContactpagePage;
  let fixture: ComponentFixture<ContactpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
