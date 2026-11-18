import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServices } from './modal-services';

describe('ModalServices', () => {
  let component: ModalServices;
  let fixture: ComponentFixture<ModalServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
