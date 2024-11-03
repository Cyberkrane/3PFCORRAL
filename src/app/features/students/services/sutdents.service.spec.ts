import { TestBed } from '@angular/core/testing';
import { SutdentsService } from './sutdents.service';



describe('SutdentsServiceService', () => {
  let service: SutdentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SutdentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
