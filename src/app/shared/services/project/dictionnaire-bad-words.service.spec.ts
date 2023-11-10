import { TestBed } from '@angular/core/testing';

import { DictionnaireBadWordsService } from './dictionnaire-bad-words.service';

describe('DictionnaireBadWordsService', () => {
  let service: DictionnaireBadWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionnaireBadWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
