import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDialogComponent } from './poke-dialog.component';

describe('PokeDialogComponent', () => {
  let component: PokeDialogComponent;
  let fixture: ComponentFixture<PokeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
