import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokemonsComponent } from './search-pokemons.component';

describe('SearchPokemonsComponent', () => {
  let component: SearchPokemonsComponent;
  let fixture: ComponentFixture<SearchPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPokemonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
