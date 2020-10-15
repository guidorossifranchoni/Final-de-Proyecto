import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SesionesPage } from './sesiones.page';

describe('SesionesPage', () => {
  let component: SesionesPage;
  let fixture: ComponentFixture<SesionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SesionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
